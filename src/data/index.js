import {
  profilePortrait,
  styleReference,
  styleArch,
  styleCity,
  stylePoster,
  styleTemple,
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

const portfolio = [
  {
    name: "Thiết kế Proposal",
    description:
      "Xây dựng proposal có câu chuyện, moodboard, layout rõ ràng và visual đủ mạnh để khách hàng hình dung được trải nghiệm sự kiện ngay từ trang đầu.",
    image: stylePoster,
  },
  {
    name: "Quản trị dự án sự kiện",
    description:
      "Điều phối timeline, nhân sự, vendor, ngân sách và show-flow như một hành trình có điểm đến rõ ràng từ concept đến show day.",
    image: styleCity,
  },
  {
    name: "Marketing Planner",
    description:
      "Lên thông điệp, kênh truyền thông, lịch nội dung và nhịp khuếch đại để sự kiện có sức hút trước, trong và sau chương trình.",
    image: styleArch,
  },
  {
    name: "Media",
    description:
      "Định hướng góc quay, ảnh, recap, short-form content và visual story để biến tư liệu sự kiện thành tài sản truyền thông dài hạn.",
    image: styleTemple,
  },
];

const storyChapters = [
  {
    eyebrow: "Protocol 00",
    title: "The Creative Operator",
    description:
      "Đặng Hoàng Trường là nhân vật chính của portfolio này: một creative event manager kết nối ý tưởng, con người, hình ảnh và nhịp vận hành thành một trải nghiệm có dấu ấn riêng.",
    image: profilePortrait,
  },
  {
    eyebrow: "Protocol 01",
    title: "The Brief Signal",
    description:
      "Khách hàng bước vào thế giới của ý tưởng. Mỗi brief được đọc như trang đầu của một cuốn truyện: có bối cảnh, nhân vật, mục tiêu và cảm xúc cần được đánh thức.",
    image: styleReference,
  },
  {
    eyebrow: "Protocol 02",
    title: "Proposal As A Neon Map",
    description:
      "Proposal không chỉ là slide trình bày. Nó là bản đồ dẫn khách hàng đi qua concept, visual mood, flow trải nghiệm và lý do vì sao sự kiện này đáng để đầu tư.",
    image: stylePoster,
  },
  {
    eyebrow: "Protocol 03",
    title: "Project City Grid",
    description:
      "Một sự kiện được vận hành như một thành phố sống động: nhiều đội nhóm, nhiều nhà cung cấp, nhiều điểm chạm, tất cả cần chung một nhịp điều phối.",
    image: styleCity,
  },
  {
    eyebrow: "Protocol 04",
    title: "Campaign Signal",
    description:
      "Marketing planner tạo ra tín hiệu để khán giả nhìn thấy, ghi nhớ và muốn tham gia. Mỗi kênh truyền thông là một khung tranh trong cùng một câu chuyện.",
    image: styleArch,
  },
  {
    eyebrow: "Protocol 05",
    title: "Media Afterglow",
    description:
      "Sau show day, media giữ lại ánh sáng của trải nghiệm: recap, ảnh, short video và case study biến khoảnh khắc thành tài sản thương hiệu dài hạn.",
    image: styleTemple,
  },
];

export { experiences, portfolio, storyChapters };
