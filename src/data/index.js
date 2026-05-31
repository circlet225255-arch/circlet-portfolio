import {
  storyCreativeOperator,
  toolkitCreativeDirection,
  toolkitEventOps,
  toolkitMarketing,
  toolkitMedia,
  toolkitProposal,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Intro",
  },
  {
    id: "portfolio",
    title: "Logs",
  },
  {
    id: "experience",
    title: "Ops",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Concept Protocol",
    company_name: "Creative Direction",
    date: "Node 01",
    details: [
      "Chuyển brief thành <span style='color: white;'>concept sự kiện có câu chuyện rõ ràng</span>, có moodboard, key visual và flow trải nghiệm.",
      "Thiết kế <span style='color: white;'>proposal thuyết phục</span> với cấu trúc dễ trình bày, dễ bảo vệ ý tưởng và dễ chốt ngân sách.",
      "Định hình visual theo tinh thần <span style='color: white;'>cinematic, premium và có điểm nhấn văn hóa</span>.",
    ],
  },
  {
    title: "Production Grid",
    company_name: "Event Management",
    date: "Node 02",
    details: [
      "Lập timeline, budget, checklist và nhân sự để đảm bảo từng hạng mục <span style='color: white;'>đi đúng tiến độ</span>.",
      "Làm việc với vendor, media, venue và internal team theo một quy trình <span style='color: white;'>rõ việc, rõ người, rõ deadline</span>.",
      "Kiểm soát rủi ro sản xuất, setup, rehearsal và show day bằng <span style='color: white;'>run-down vận hành chi tiết</span>.",
    ],
  },
  {
    title: "Signal Campaign",
    company_name: "Campaign Strategy",
    date: "Node 03",
    details: [
      "Xây dựng thông điệp, kênh truyền thông và lịch nội dung để sự kiện có <span style='color: white;'>sức hút trước, trong và sau show</span>.",
      "Kết hợp social, KOL, PR và onsite media để tạo <span style='color: white;'>hành trình tiếp cận liên tục</span>.",
      "Theo dõi hiệu quả bằng insight, feedback và chỉ số tương tác để tối ưu cho lần tiếp theo.",
    ],
  },
  {
    title: "Media Afterimage",
    company_name: "Visual Storytelling",
    date: "Node 04",
    details: [
      "Định hướng góc máy, ảnh, clip highlight và recap để bắt được <span style='color: white;'>khoảnh khắc đáng nhớ nhất</span>.",
      "Phối hợp media team để đồng bộ key visual, motion, stage screen và nội dung đằng sau sự kiện.",
      "Biến tư liệu thành tài sản truyền thông có thể dùng lại cho <span style='color: white;'>proposal, case study và social portfolio</span>.",
    ],
  },
];

const personalProfile = [
  {
    label: "Name",
    value: "Đặng Hoàng Trường",
  },
  {
    label: "Birth",
    value: "25/05/2005",
  },
  {
    label: "Campus",
    value: "Sinh viên trường Đại học Công nghệ TP.HCM (HUTECH)",
  },
];

const careerModules = [
  {
    name: "Thiết kế Proposal",
    tag: "Creative Deck",
    description:
      "Xây dựng proposal có concept, moodboard, key visual và flow trải nghiệm đủ rõ để khách hàng hiểu nhanh giá trị ý tưởng.",
    image: toolkitProposal,
  },
  {
    name: "Quản trị sự kiện",
    tag: "Event Ops",
    description:
      "Theo dõi timeline, nhân sự, vendor, checklist và show-flow để ý tưởng có thể vận hành được trong thực tế.",
    image: toolkitEventOps,
  },
  {
    name: "Social Media",
    tag: "Media Signal",
    description:
      "Định hướng nội dung social, recap, short-form và nhịp truyền thông để sự kiện có sức sống trước và sau show.",
    image: toolkitMedia,
  },
  {
    name: "Tạo website",
    tag: "Digital Touchpoint",
    description:
      "Tư duy xây dựng website portfolio, landing page và trải nghiệm online như một điểm chạm nhận diện thương hiệu.",
    image: toolkitMarketing,
  },
  {
    name: "Marketing",
    tag: "Campaign Planner",
    description:
      "Lên thông điệp, kênh triển khai và kế hoạch nội dung để ý tưởng được khuếch đại đúng nhóm khách hàng.",
    image: toolkitCreativeDirection,
  },
  {
    name: "Design",
    tag: "Visual System",
    description:
      "Kết hợp bố cục, màu sắc, typography và hình ảnh để tạo hệ visual nhất quán cho proposal, media và event identity.",
    image: toolkitCreativeDirection,
  },
];

const softSkills = [
  "Giao tiếp tốt",
  "Tiếng Anh giao tiếp",
  "Sử dụng AI và các công cụ sáng tạo",
];

const educationStats = [
  {
    label: "Achievement",
    value: "Tốt nghiệp bằng giỏi",
  },
  {
    label: "GPA",
    value: "3.3",
  },
];

const hobbies = ["Thể thao", "Nghệ thuật", "Âm nhạc"];

const storyChapters = [
  {
    eyebrow: "Protocol 00",
    title: "The Creative Operator",
    description:
      "Đặng Hoàng Trường là nhân vật chính của portfolio này: một creative event manager kết nối ý tưởng, con người, hình ảnh và nhịp vận hành thành một trải nghiệm có dấu ấn riêng.",
    image: storyCreativeOperator,
  },
];

export { careerModules, educationStats, experiences, hobbies, personalProfile, softSkills, storyChapters };
