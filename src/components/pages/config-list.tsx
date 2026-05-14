import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Dropzone } from "@/components/ui/dropzone";
import { InfoIcon } from "lucide-react";

export default function ConfigList() {
  return (
    <div className="flex gap-4 justify-center p-10">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Add Playlist </CardTitle>
          <CardDescription>
            Choose how you would like to import your media content to get
            started with your IPTV playlist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="list-m3u" className="uppercase">
                  Paste m3u url
                </FieldLabel>
                <Input
                  id="list-m3u"
                  placeholder="https:example.com/playlist.m3u"
                />
              </Field>
              <Field orientation="responsive">
                <Button type="submit">Import</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardContent>
          <Dropzone
            onDrop={(acceptedFiles) => console.log(acceptedFiles)}
            accept={{
              "audio/*": [],
              "video/*": [],
              "text/plain": [],
              "application/x-mpegurl": [],
              "audio/x-mpegurl": [],
            }}
          />
        </CardContent>
      </Card>
      <Card className="max-w-2/5 bg-primary/10 h-fit">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <InfoIcon className="text-primary" />
            <span>How to start</span>
          </CardTitle>
        </CardHeader>
        <CardContent className=" text-muted-foreground">
          <ol className="space-y-2">
            <li className="flex gap-2 items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                1
              </span>
              <p>
                Obtain an M3U playlist URL or file from your IPTV service
                provider.
              </p>
            </li>
            <li className="flex gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                2
              </span>
              <p>
                Import the data using the form on the left. We'll automatically
                categorize your channels.
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                3
              </span>
              <p>
                Access your content from the sidebar and enjoy premium
                streaming.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
