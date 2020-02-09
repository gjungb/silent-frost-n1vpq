interface Page {
  Name: string;
  tags?: string[];
}

interface Folio extends Page {
  kind: "folio";
  Inhalt: object;
}

interface Chapter extends Page {
  kind: "chapter";
  folios?: Folio[];
}

export type IPage = Folio | Chapter;
