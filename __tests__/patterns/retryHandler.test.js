const { retryHandler } = require("../../src/patterns/retryHandler");

describe("Retry Handler", () => {
    it("deve resolver com sucesso na primeira tentativa", async () => {
        const fn = jest.fn().mockResolvedValue("ok");
        const result = await retryHandler(fn, 3);
        expect(result).toBe("ok");
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("deve tentar múltiplas vezes e falhar", async () => {
        const fn = jest.fn().mockRejectedValue(new Error("fail"));
        await expect(retryHandler(fn, 2)).rejects.toThrow("Todas as tentativas falharam.");
        expect(fn).toHaveBeenCalledTimes(2);
    });
});