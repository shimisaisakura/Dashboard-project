import React from "react";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { BellIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export default function NotificationButton() {
  return (
    <div>
      <ButtonGroup aria-label="Notifications">
        <Button
          aria-label="Notifications, 12 unread"
          className="relative"
          size="icon-sm"
          variant="outline"
        >
          <BellIcon aria-hidden="true" />
          <Badge
            className="absolute -end-2 -top-1 z-10 text-xs"
            pill="true"
            size="sm"
          >
            12
          </Badge>
        </Button>
        <Button
          aria-label="Alerts, more than 99 unread"
          className="relative"
          size="icon-sm"
          variant="outline"
        >
          <BellIcon aria-hidden="true" />
          <Badge
            className="absolute -end-2 -top-1 z-10 text-xs"
            pill="true"
            size="sm"
            variant="destructive"
          >
            99+
          </Badge>
        </Button>
      </ButtonGroup>
    </div>
  );
}
