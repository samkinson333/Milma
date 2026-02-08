export interface Notice {
    id: string;
    title: string;
    description?: string;
    publishDate: string;
    fileUrl: string;
    fileType: "pdf" | "doc" | "image";
    category: "organisation" | "public" | "tender" | "announcement";
    isPinned?: boolean;
}

export type NoticeCategory = Notice["category"] | "all";
