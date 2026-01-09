import { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISelectElement {
  label: string;
  value: string;
  items: string[];
  onChange: (value: string) => void;
}

export const SelectElement: FC<ISelectElement> = ({
  label,
  value,
  items,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <p>{label}</p>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {items.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
