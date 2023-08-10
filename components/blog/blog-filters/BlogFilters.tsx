import TextInput from "@/components/text-input/TextInput";

interface BlogFiltersProps {
  search?: string;
  category?: string;
  onSearchChange?: (search: string) => void;
  onCategoryChange?: (category: string) => void;
}

export default function BlogFilters(props: BlogFiltersProps) {
  return (
    <div className="columns-3 gap-8 mb-20">
      <TextInput label="SEARCH" placeholder="Search" showNext />
      <TextInput label="Filter by CATEGORIES" placeholder="Filter" showNext />
      <TextInput label="GET THE LATEST UPDATES" placeholder="Email" showNext />
    </div>
  );
}
