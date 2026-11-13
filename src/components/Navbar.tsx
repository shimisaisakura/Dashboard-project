import { Search } from "lucide-react";
import { Button } from "./ui/button";

import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import ProfileAvatar from "./ProfileAvatar";
import { DarkModeToggle } from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center pl-7">
      <div>
        <Field>
          <FieldLabel htmlFor="input-button-group" className="sr-only">
            Search
          </FieldLabel>
          <div className="flex">
            <Input
              id="input-button-group"
              placeholder="Type to search..."
              className="rounded-l-full pl-4 rounded-r-none"
            />
            <Button variant="outline" className="rounded-r-xl rounded-l-none">
              <Search />
            </Button>
          </div>
        </Field>
      </div>
      <div className="flex gap-4">
        <DarkModeToggle />
        <ProfileAvatar />
      </div>
    </nav>
  );
}
