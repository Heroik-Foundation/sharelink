"use client";
 
import { toast } from "@heroui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Props {
    value?: Date;
    onSelect?: (date: Date) => void;
    label?: string;
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    activeMonth: string[];
    year: number,
    setYear: (by: number) => void
}

const MONTHS = [
    {
        name: "Jan",
        index: "01",
    },
    {
        name: "Feb",
        index: "02",
    },
    {
        name: "Mar",
        index: "03",
    },
    {
        name: "Apr",
        index: "04",
    },
    {
        name: "May",
        index: "05",
    },
    {
        name: "Jun",
        index: "06",
    },
    {
        name: "Jul",
        index: "07",
    },
    {
        name: "Aug",
        index: "08",
    },
    {
        name: "Sep",
        index: "09",
    },
    {
        name: "Oct",
        index: "10",
    },
    {
        name: "Nov",
        index: "11",
    },
    {
        name: "Dec",
        index: "12",
    },
];

export default function SmartCalendar({
    value,
    onSelect,
    label,
    minYear = 2000,
    maxYear = new Date().getFullYear() + 5,
    disabled = false,
    activeMonth,
    year, 
    setYear
}: Props) {

    const handleSelect = (monthIndex: number) => {
        if (disabled) return;
        onSelect?.(new Date(year, monthIndex, 1));
    };

    const currentMonth = new Date().getMonth();

    const handleClick = (type: "increase" | "decrease") => {
        if(type === "increase") {
            if(year === maxYear) {
                toast.danger("No Event Available");
            } else {
                setYear(year + 1)
            }
        } else if( type === "decrease") {
            if(year === minYear) {
                toast.danger("No Event Available");
            } else {
                setYear(year - 1)
            }
        }
    } 

    return (
        <div className="w-full max-w-sm flex flex-col gap-3">
            {label && (
                <label className="text-sm font-medium text-center text-gray-700">
                    {label}
                </label>
            )}

            {/* Year Navigation */}
            <div className="flex items-center justify-between px-2">
                <button
                    type="button"
                    disabled={year === minYear}
                    onClick={() => handleClick("decrease")}
                    className={` ${year === minYear ? " cursor-not-allowed " : " "} border rounded px-2 py-1 text-sm disabled:opacity-40 `}
                >
                    <IoChevronBack />
                </button>

                <span className="font-medium text-gray-800">{year ? year : value?.getFullYear()}</span>

                <button
                    type="button"
                    disabled={year === maxYear}
                    onClick={() => handleClick("increase")}
                    className={` ${year === maxYear ? " cursor-not-allowed " : " "} border rounded px-2 py-1 text-sm disabled:opacity-40 `}
                >
                    <IoChevronForward />
                </button>
            </div>

            {/* Months */}
            <div className="grid grid-cols-3 gap-3 rounded-lg border bg-white p-4 shadow-sm">
                {MONTHS.map((month, index) => {
                    const isActive = activeMonth?.includes(
                        `${year}-${month.index}`,
                    );

                    return (
                        <button
                            key={month?.index}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleSelect(index)}
                            className={`
                rounded-md px-3 py-2 text-sm font-medium transition
                ${
                    (isActive && index+1 >= currentMonth)
                        ? "bg-[#37137F] text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
                        >
                            {month?.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
