'use client';

import { BackButton } from "@/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LEGAL } from "@/lib/constants";

export function ReturnsClient() {
  return (
    <div className="container mx-auto py-12 md:py-24 max-w-4xl">
      <div className="mb-4">
        <BackButton />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">{LEGAL.returns.title}</CardTitle>
        </CardHeader>
        <CardContent
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: LEGAL.returns.body }}
        />
      </Card>
    </div>
  );
}