import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
        <div className="flex-grow ml-4 mr-4 relative">
            <Input
                placeholder="Search"
                className="w-full pl-7"
            />
            <SearchIcon className="w-4 h-4 text-slate-500 absolute top-3 left-2"/>
        </div>
     );
}
 
export default Search;
<div>
    <Input 
    />
</div>