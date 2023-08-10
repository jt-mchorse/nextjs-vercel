import Image from "next/image";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  showNext: boolean;
}

export default function TextInput(props: TextInputProps) {
  const { label, showNext, ...inputProps } = props;

  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5"
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={`input-${label}`}
          type="search"
          className="w-full py-4 text-sm pl-4 pr-10 border border-[#282832] focus:outline-none focus:text-gray-900"
          autoComplete="off"
          {...inputProps}
        />
        {showNext && (
          <span className="absolute inset-y-0 right-4 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <Image src="/arrow-right.png" alt="->" width={22} height={19} />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
