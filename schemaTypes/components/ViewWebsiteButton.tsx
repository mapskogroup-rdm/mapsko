"use client";

import { useFormValue } from "sanity";
import { Stack, Button, Text, Card } from "@sanity/ui";

export function ViewWebsiteButton() {
  const slug = useFormValue(["slug"]) as { current?: string } | undefined;
  const slugValue = slug?.current;

  if (!slugValue) {
    return (
      <Card padding={3} radius={2} tone="caution">
        <Text size={1}>Save the document with a slug to view the website</Text>
      </Card>
    );
  }

  const websiteUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/project/${slugValue}`;

  return (
    <Stack space={3}>
      <Button
        as="a"
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        text="Open Project Page"
        tone="primary"
      />
      <Text size={0} muted>
        {websiteUrl}
      </Text>
    </Stack>
  );
}
