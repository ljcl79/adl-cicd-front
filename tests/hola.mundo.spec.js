import { test, expect } from '@playwright/test';

test.describe("Pruebas del Home", () => {
    test("Valida texto parrafo", async ({ page }) => {
        await page.goto("/");

        const element = page.getByText('Celebrando con la gente de Tester Engineer');
        await expect(element).toBeVisible();
    });
});