import React, { useState, useCallback } from 'react';
import { Button } from "@repo/design-system/components/ui/button"
import { Input } from "@repo/design-system/components/ui/input"
import { cn } from "@repo/design-system/lib/utils"

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onChange,
    min = 0,
    max,
    step = 1,
    className
}) => {
    const handleIncrement = useCallback(() => {
        const newValue = value + step;
        if (max === undefined || newValue <= max) {
            onChange(newValue);
        }
    }, [value, onChange, step, max]);

    const handleDecrement = useCallback(() => {
        const newValue = value - step;
        if (newValue >= min) {
            onChange(newValue);
        }
    }, [value, onChange, step, min]);

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseInt(event.target.value, 10);
            if (isNaN(newValue)) {
                // Handle empty input.  You could set it to min, 0, or previous value.
                onChange(min); // Or onChange(0); or leave it as is.
                return;
            }

            let clampedValue = newValue;
            if (min !== undefined && clampedValue < min) {
                clampedValue = min;
            }
            if (max !== undefined && clampedValue > max) {
                clampedValue = max;
            }
            onChange(clampedValue);
        },
        [min, max, onChange]
    );

    return (
        <div
            className={cn(
                "flex items-center gap-1.5 border rounded-md",
                className
            )}
        >
            <Button
                variant="ghost"
                size="icon"
                onClick={handleDecrement}
                className={"p-2 hover:bg-transparent border-transparent"}
                aria-label="Decrease quantity"
                disabled={value <= min}
            >
                <span className="text-xl">−</span>
            </Button>
            <Input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={handleInputChange}
                className={
                    "w-8 h-8 text-center p-0 border-0"
                }
                aria-label="Quantity"
            />
            <Button
                variant="ghost"
                size="icon"
                onClick={handleIncrement}
                className="p-2 hover:bg-transparent border-transparent"
                aria-label="Increase quantity"
                disabled={max !== undefined && value >= max}
            >
                <span className="text-xl">+</span>
            </Button>
        </div>
    );
};

export { NumberInput };
