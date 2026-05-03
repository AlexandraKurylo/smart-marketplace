import { useId, type ChangeEvent, type FC } from "react";
import { LuSearch } from "react-icons/lu";
import cls from "./SearchInput.module.css";

export interface ISearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

export const SearchInput: FC<ISearchInputProps> = ({ value, onChange, onSearch }) => {
  const inputId = useId();

  return (
    <div className={cls.searchBar}>
      <label htmlFor={inputId} className={cls.label}>
        <LuSearch className={cls.searchIcon} size={20} />
      </label>
      <input
        type="text"
        id={inputId}
        className={cls.searchInput}
        placeholder="Search by name..."
        value={value}
        onChange={onChange}
      />
      <button type="button" className={cls.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};
