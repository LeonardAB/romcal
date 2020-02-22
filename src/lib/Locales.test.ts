/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import { Locales } from "..";

describe("Testing localization functionality", () => {
    test("If the locale is set to 'fr', romcal should output text in French", () => {
        Locales.setLocale("fr");
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("Tous les Saints");
    });

    test("If the locale is set to 'en-CA', romcal should output text in Canadian French", () => {
        Locales.setLocale("enCA");
        expect(
            Locales.localize({
                key: "sanctoral.saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            }),
        ).toBe("Saints John de Brébeuf, Isaac Jogues, Priests, and Companions, Martyrs, Secondary Patrons of Canada");
    });

    test("If the locale is set with an unknown region, romcal should fallback to its base language when exists in src/locales", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Locales.setLocale("fr-XX" as any);
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("Tous les Saints");
    });

    test("If a string is missing in the 'fr-CA' locale, romcal should fall back to base French", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Locales.setLocale("fr-CA" as any);
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("Tous les Saints");
    });

    test("If a string is missing in the 'zz' locale, romcal should fallback to English ", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Locales.setLocale("zz" as any);
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });

    test("If an unknown locale is set, romcal should fallback to English", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Locales.setLocale("xx-XX" as any);
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });

    test("When the last locale set is 'en', romcal should output English locale", () => {
        Locales.setLocale("it");
        Locales.setLocale("en");
        expect(Locales.localize({ key: "celebrations.allSaints" })).toBe("All Saints");
    });
});