export type ScenePanel = {
  src: string;
  alt: string;
};

export type Scene = {
  id: string;
  index: number;
  title: string;
  bg: string;
  motif: string;
  narration: string[];
  panels: ScenePanel[];
  quote: string;
  philosophy: string;
};

export const scenes: Scene[] = [
  {
    id: "scene-01",
    index: 1,
    title: "Ánh đèn đầu tiên",
    bg: "/images/scene-01/hero-bg-lit.png",
    motif: "/images/scene-01/motif.png",
    narration: [
      "M lớn lên ở một vùng quê yên tĩnh. Đêm trước ngày lên thành phố học đại học, M ngồi bên cửa sổ gỗ cũ, nhìn về phía xa.",
      "Ở đó, thành phố chỉ hiện lên như vài chấm sáng nhỏ trên đường chân trời. M nghĩ rằng thành phố sẽ là nơi mình bắt đầu một cuộc đời mới — một phiên bản tự tin hơn, năng động hơn, được công nhận nhiều hơn.",
      "Nhưng M chưa biết rằng, từ giây phút bước vào môi trường mới, M cũng bắt đầu bước vào rất nhiều mối quan hệ mới — những mối quan hệ sẽ dần thay đổi cách M nhìn về chính mình.",
    ],
    panels: [
      {
        src: "/images/scene-01/panel-1.png",
        alt: "M ngồi nghiêng bên cửa sổ gỗ, cằm tựa tay, nhìn ra xa.",
      },
      {
        src: "/images/scene-01/panel-2.png",
        alt: "Close-up đôi mắt M phản chiếu ánh trăng và chấm sáng thành phố ở chân trời.",
      },
      {
        src: "/images/scene-01/panel-3.png",
        alt: "Bàn học gỗ nhỏ với vở mở, cốc sứ, đèn giấy ấm và balo canvas đã đóng gói sẵn.",
      },
    ],
    quote:
      "Không ai bước vào thành phố với một cái tôi hoàn toàn trống rỗng. Ta luôn mang theo những quan hệ đã tạo nên mình.",
    philosophy:
      "Theo triết học Mác – Lênin, con người không tồn tại như một cá nhân cô lập. M được hình thành từ gia đình, quê hương, trường học, kỳ vọng của cha mẹ và ước mơ đổi đời.",
  },
];
