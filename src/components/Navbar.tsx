import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import ProfileAvatar from "./ProfileAvatar";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center">
      <div>
        <Field>
          <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
          <ButtonGroup>
            <Input id="input-button-group" placeholder="Type to search..." />
            <Button variant="outline">
              <Search />
            </Button>
          </ButtonGroup>
        </Field>
      </div>
      <div>
        <ProfileAvatar />
      </div>
    </nav>
  );
}
