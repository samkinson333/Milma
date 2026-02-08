import { Notice } from "../types/notice";

const MOCK_NOTICES: Notice[] = [
    {
        id: "1",
        title: "Annual Report 2024-25",
        description: "Comprehensive report on the organization's performance and financial statements for the fiscal year 2024-25.",
        publishDate: "2025-01-15",
        fileUrl: "/documents/annual-report-2024.pdf",
        fileType: "pdf",
        category: "organisation",
        isPinned: true,
    },
    {
        id: "2",
        title: "Tender for Supply of Automated Milk Collection Units",
        description: "Invitations for bids for the supply, installation, and commissioning of AMCU across various cooperative societies.",
        publishDate: "2025-02-01",
        fileUrl: "/documents/tender-amcu.pdf",
        fileType: "pdf",
        category: "tender",
        isPinned: true,
    },
    {
        id: "3",
        title: "Revised Milk Procurement Prices - February 2025",
        description: "Official notification regarding the adjustment of procurement prices for primary milk producers.",
        publishDate: "2025-01-28",
        fileUrl: "/documents/procurement-prices-feb.pdf",
        fileType: "pdf",
        category: "announcement",
    },
    {
        id: "4",
        title: "Public Notice: Quality Assurance Standards",
        description: "Information for the general public regarding our updated hygiene and safety protocols in processing plants.",
        publishDate: "2025-01-20",
        fileUrl: "/images/quality-assurance.jpg",
        fileType: "image",
        category: "public",
    },
    {
        id: "5",
        title: "Recruitment of Junior Executives (Dairy)",
        description: "Notification for the recruitment of Junior Executives in various dairies under TRCMPU.",
        publishDate: "2025-01-10",
        fileUrl: "/documents/recruitment-jr-exec.pdf",
        fileType: "pdf",
        category: "organisation",
    },
    {
        id: "6",
        title: "Expression of Interest: Solar Power Installation",
        description: "Seeking partners for installing solar panels in regional dairies to promote sustainable energy.",
        publishDate: "2025-01-05",
        fileUrl: "/documents/eoi-solar.doc",
        fileType: "doc",
        category: "tender",
    }
];

export const noticeService = {
    getNotices: async (): Promise<Notice[]> => {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_NOTICES), 500);
        });
    }
};
