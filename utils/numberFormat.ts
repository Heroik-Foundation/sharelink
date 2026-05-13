import formatter from "format-number";

export const currencies = ["usd", "cad", "eur", "gbp", "aud", "nzd"] as const;

export type Currency = (typeof currencies)[number];

export const currencySymbols: Record<Currency, string> = {
    usd: "US$",
    cad: "CA$",
    eur: "€",
    gbp: "£",
    aud: "A$",
    nzd: "NZ$",
};

export const formatNumber = (number: number | string, currency?: Currency) => {
    const prefix = currency ? currencySymbols[currency] : "";

    if (number === "***") {
        return `${prefix} ****`;
    }

    const value = Number(number);

    return formatter({
        prefix,
        round: 2,
        integerSeparator: ",",
        decimal: ".",
        padRight: 2,
    })(value);
};
