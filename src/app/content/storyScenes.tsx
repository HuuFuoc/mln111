import type { StorySceneProps } from "../components/StoryScene";
import type { StoryBeatProps } from "../components/StoryBeat";

/**
 * Scene 01 — Ánh đèn đầu tiên  (heightVh 480)
 * Timeline (local progress 0..1):
 *  0.00 – 0.24 : "Chapter 01" eyebrow + title + subtitle (drift out by 0.34)
 *  0.20 – 0.74 : beat-1  enter 0.20→0.42 (22%) | hold 0.42→0.56 | exit 0.56→0.74 (18%)
 *  0.58 – 0.93 : beat-2  enter 0.58→0.80 (22%) | hold 0.80→0.86 | exit 0.86→0.94 (8%)
 *  0.92 – 1.00 : closing quote (fadeIn 30% of span)
 * Beats crossfade naturally (0.58–0.74).  Closing fades in after beat-2 mostly gone.
 * The bg dark → lit crossfade peaks around p=0.4.
 */
const scene01: StorySceneProps = {
  sceneId: "scene-01",
  backgroundImage: "/images/scene-01/bg1.png",
  backgroundImageLit: "/images/scene-01/bg2.png",
  litThreshold: 0.4,
  heightVh: 480,
  layers: [
    // Decorative watercolor motif as a corner frame, settles into place
    {
      id: "motif",
      type: "motif",
      src: "/images/scene-01/motif.png",
      start: 0.05,
      end: 1.0,
      fadeIn: 0.12,
      fadeOut: 0.05,
      from: { opacity: 0, scale: 1.04 },
      to: { opacity: 0.55, scale: 1.0 },
      zIndex: 12,
    },

    // Eyebrow "CHƯƠNG 01" — already visible at p=0 (no entry fade), drifts up + fades out
    {
      id: "chapter",
      type: "text",
      content: (
        <span className="font-sans text-[11px] uppercase tracking-[0.55em] text-amber-200/80">
          Chương 01
        </span>
      ),
      className: "items-start pt-[18vh]",
      start: -0.05,
      end: 0.24,
      fadeIn: 0.05,
      fadeOut: 0.4,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -10 },
      zIndex: 30,
    },

    // Main title — visible at scroll=0, drifts up gently and ghosts away as the lamp lights up
    {
      id: "title",
      type: "text",
      content: (
        <h1
          id="scene-01-title"
          className="font-display text-5xl font-medium leading-tight tracking-tight text-zinc-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Ánh đèn đầu tiên
        </h1>
      ),
      start: -0.05,
      end: 0.32,
      fadeIn: 0.08,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0, scale: 1 },
      to: { opacity: 1, y: -40, scale: 1.02 },
      zIndex: 32,
    },

    // Subtitle / opening cue
    {
      id: "subtitle",
      type: "text",
      content: (
        <p className="font-serif max-w-2xl text-base italic text-zinc-200/85 sm:text-lg md:text-xl">
          Một sinh viên. Một thành phố. Những phiên bản đang định hình lại chính mình.
        </p>
      ),
      className: "items-end pb-[22vh]",
      start: -0.03,
      end: 0.34,
      fadeIn: 0.1,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -20 },
      zIndex: 32,
    },

    // -- narration-1 + panel-1 moved to beats[] below --
    // -- narration-2 + panel-2 moved to beats[] below --

    // Closing philosophical line — quote feel
    {
      id: "closing",
      type: "text",
      content: (
        <blockquote className="font-serif max-w-3xl text-xl italic leading-[1.7] text-amber-100/95 sm:text-2xl md:text-3xl md:leading-[1.75]">
          “Không ai bước vào thành phố với một cái tôi hoàn toàn trống rỗng.
          Ta luôn mang theo những quan hệ đã tạo nên mình.”
        </blockquote>
      ),
      start: 0.92,
      end: 1.00,
      fadeIn: 0.35,
      fadeOut: 0.10,
      from: { opacity: 0, y: 32 },
      to: { opacity: 1, y: 0 },
      zIndex: 36,
    },
  ],

  beats: [
    // beat-1 : enter 0.20→0.42 (22%) | hold 0.42→0.56 | exit 0.56→0.74 (18%)
    {
      id: "beat-narration-panel-1",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          M lớn lên ở một vùng quê yên tĩnh. Đêm trước ngày lên thành phố học
          đại học, M ngồi bên cửa sổ gỗ cũ, nhìn về phía xa.
        </p>
      ),
      imageSrc: "/images/scene-01/panel-1.png",
      imageAlt: "M ngồi nghiêng bên cửa sổ gỗ, cằm tựa tay, nhìn ra xa.",
      layout: "text-top",
      start: 0.20,
      enterEnd: 0.42,
      exitStart: 0.56,
      end: 0.74,
      zIndex: 33,
    } satisfies StoryBeatProps,

    // beat-2 : enter 0.58→0.80 (22%) | hold 0.80→0.86 | exit 0.86→0.94 (8%)
    {
      id: "beat-narration-panel-2",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Ở đó, thành phố chỉ hiện lên như vài chấm sáng nhỏ trên đường chân
          trời. M nghĩ rằng thành phố sẽ là nơi mình bắt đầu một cuộc đời mới.
        </p>
      ),
      imageSrc: "/images/scene-01/panel-2.png",
      imageAlt: "Những chấm sáng thành phố hiện lên trên đường chân trời xa.",
      layout: "text-top",
      start: 0.58,
      enterEnd: 0.80,
      exitStart: 0.86,
      end: 0.94,
      zIndex: 35,
    } satisfies StoryBeatProps,
  ],
};

/**
 * Scene 02 — Thành phố và những tiêu chuẩn mới  (heightVh 560)
 * Timeline (local progress 0..1):
 *  0.00 – 0.30 : "Chapter 02" eyebrow + title + subtitle (drift out by 0.34)
 *  0.20 – 0.44 : beat-1  "Ngày đầu ở đại học..."          → panel-1 (ngẩng đầu nhìn billboards)
 *  0.40 – 0.60 : beat-2  "Bạn bè nói về câu lạc bộ..."    → panel-2 (đám đông blur đi ngang)
 *  0.56 – 0.72 : beat-3  "Trên mạng xã hội..."            → panel-3 (floating UI cards)
 *  0.68 – 0.84 : beat-4  "M bắt đầu tự hỏi..."            → panel-4 (close-up phản chiếu neon)
 *  0.82 – 0.94 : beat-5  "Ban đầu M chỉ đăng vài tấm..."  → panel-5 (M side, quyết định)
 *  0.92 – 1.00 : closing quote
 * Beats crossfade (each exit overlaps the next enter by ~0.04).
 */
const scene02: StorySceneProps = {
  sceneId: "scene-02",
  backgroundImage: "/images/scene-02/bg.png",
  heightVh: 560,
  layers: [
    // Decorative neon-scribble corner motif (frames the whole scene)
    {
      id: "motif",
      type: "motif",
      src: "/images/scene-02/motif.png",
      start: 0.04,
      end: 1.0,
      fadeIn: 0.1,
      fadeOut: 0.05,
      from: { opacity: 0, scale: 1.04 },
      to: { opacity: 0.5, scale: 1.0 },
      zIndex: 12,
    },

    // Eyebrow "CHƯƠNG 02"
    {
      id: "chapter",
      type: "text",
      content: (
        <span className="font-sans text-[11px] uppercase tracking-[0.55em] text-amber-200/80">
          Chương 02
        </span>
      ),
      className: "items-start pt-[18vh]",
      start: -0.05,
      end: 0.24,
      fadeIn: 0.05,
      fadeOut: 0.4,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -10 },
      zIndex: 30,
    },

    // Main title
    {
      id: "title",
      type: "text",
      content: (
        <h1
          id="scene-02-title"
          className="font-display max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-zinc-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl lg:text-[76px]"
        >
          Thành phố và những tiêu chuẩn mới
        </h1>
      ),
      start: -0.05,
      end: 0.32,
      fadeIn: 0.08,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0, scale: 1 },
      to: { opacity: 1, y: -40, scale: 1.02 },
      zIndex: 32,
    },

    // Subtitle
    {
      id: "subtitle",
      type: "text",
      content: (
        <p className="font-serif max-w-2xl text-base italic text-zinc-200/85 sm:text-lg md:text-xl">
          Đèn neon, lượt thích và những phép so sánh thầm lặng đầu tiên.
        </p>
      ),
      className: "items-end pb-[22vh]",
      start: -0.03,
      end: 0.34,
      fadeIn: 0.1,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -20 },
      zIndex: 32,
    },

    // Closing philosophical line
    {
      id: "closing",
      type: "text",
      content: (
        <blockquote className="font-serif max-w-3xl text-xl italic leading-[1.7] text-amber-100/95 sm:text-2xl md:text-3xl md:leading-[1.75]">
          “M không chỉ sử dụng mạng xã hội.
          M cũng đang bị mạng xã hội định hình lại.”
        </blockquote>
      ),
      start: 0.92,
      end: 1.0,
      fadeIn: 0.35,
      fadeOut: 0.1,
      from: { opacity: 0, y: 32 },
      to: { opacity: 1, y: 0 },
      zIndex: 36,
    },
  ],

  beats: [
    // beat-1 : enter 0.20→0.30 | hold 0.30→0.36 | exit 0.36→0.44
    {
      id: "s2-beat-1",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Ngày đầu ở đại học, M thấy mọi thứ đều nhanh hơn mình tưởng.
        </p>
      ),
      imageSrc: "/images/scene-02/panel-1.png",
      imageAlt:
        "M đứng trên vỉa hè ướt mưa, ngẩng đầu nhìn các biển quảng cáo phát sáng phía trên.",
      layout: "text-top",
      start: 0.2,
      enterEnd: 0.3,
      exitStart: 0.36,
      end: 0.44,
      zIndex: 33,
    } satisfies StoryBeatProps,

    // beat-2 : enter 0.40→0.48 | hold 0.48→0.54 | exit 0.54→0.60
    {
      id: "s2-beat-2",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Bạn bè nói về câu lạc bộ. Người khác đăng ảnh đi sự kiện. Có người
          khoe thành tích, học bổng, dự án, công việc làm thêm.
        </p>
      ),
      imageSrc: "/images/scene-02/panel-2.png",
      imageAlt:
        "Đám đông sinh viên blur đi ngang qua, M đứng yên ở giữa, sắc nét.",
      layout: "text-top",
      start: 0.4,
      enterEnd: 0.48,
      exitStart: 0.54,
      end: 0.6,
      zIndex: 34,
    } satisfies StoryBeatProps,

    // beat-3 : enter 0.56→0.62 | hold 0.62→0.66 | exit 0.66→0.72
    {
      id: "s2-beat-3",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Trên mạng xã hội, ai cũng có vẻ như đang sống một cuộc đời rất đáng
          ngưỡng mộ.
        </p>
      ),
      imageSrc: "/images/scene-02/panel-3.png",
      imageAlt:
        "M đứng giữa các floating UI card frosted glass — avatar, trái tim, biểu đồ, huy hiệu — lơ lửng quanh.",
      layout: "text-top",
      start: 0.56,
      enterEnd: 0.62,
      exitStart: 0.66,
      end: 0.72,
      zIndex: 35,
    } satisfies StoryBeatProps,

    // beat-4 : enter 0.68→0.74 | hold 0.74→0.80 | exit 0.80→0.84
    {
      id: "s2-beat-4",
      text: (
        <div className="space-y-3 text-center">
          <p className="font-serif text-[17px] leading-[1.7] text-zinc-200/85 sm:text-[19px] md:text-[20px]">
            M bắt đầu tự hỏi:
          </p>
          <p className="font-serif text-[18px] italic leading-[1.75] text-amber-100/90 sm:text-[20px] md:text-[22px]">
            “Mình có đang chậm hơn mọi người không?”
            <br />
            “Mình có đủ nổi bật không?”
            <br />
            “Mình có đang bị bỏ lại phía sau không?”
          </p>
        </div>
      ),
      imageSrc: "/images/scene-02/panel-4.png",
      imageAlt:
        "Close-up khuôn mặt M, trong tròng mắt phản chiếu vệt neon xanh tím mờ.",
      layout: "text-top",
      start: 0.68,
      enterEnd: 0.74,
      exitStart: 0.8,
      end: 0.84,
      zIndex: 36,
    } satisfies StoryBeatProps,

    // beat-5 : enter 0.82→0.88 | hold 0.88→0.91 | exit 0.91→0.94
    {
      id: "s2-beat-5",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Ban đầu, M chỉ đăng vài tấm ảnh để lưu lại kỷ niệm. Nhưng rồi M nhận
          ra: khi mình vui vẻ hơn, tích cực hơn, mạnh mẽ hơn, mọi người phản
          hồi nhiều hơn. Từ đó, M bắt đầu học cách trở thành phiên bản được
          yêu thích.
        </p>
      ),
      imageSrc: "/images/scene-02/panel-5.png",
      imageAlt:
        "M đứng nghiêng dưới ánh đèn thành phố, ánh nhìn dần định hình quyết định.",
      layout: "text-top",
      start: 0.82,
      enterEnd: 0.88,
      exitStart: 0.91,
      end: 0.94,
      zIndex: 37,
    } satisfies StoryBeatProps,
  ],
};

/**
 * Scene 03 — Một M luôn tích cực (split-screen)  (heightVh 520)
 * Timeline (local progress 0..1):
 *  0.00 – 0.30 : "Chapter 03" eyebrow + title + subtitle
 *  0.20 – 0.46 : beat-1  ONLINE  "Một bức ảnh thư viện..."         → panel-1-online (text-right, M-online ở nửa trái BG)
 *  0.44 – 0.64 : beat-2  ONLINE  "Mỗi ngày là một cơ hội..."       → panel-2-online (text-right)
 *  0.62 – 0.82 : beat-3  REAL    "Nhưng ngoài đời..."              → panel-3-real (text-left, M-thật ở nửa phải BG)
 *  0.80 – 0.94 : beat-4  REAL    "Có những tối, M chỉ nằm im..."   → panel-4-real (text-left)
 *  0.92 – 1.00 : closing quote
 * ONLINE và REAL beats so le sides để gắn vào BG split dọc.
 */
const scene03: StorySceneProps = {
  sceneId: "scene-03",
  backgroundImage: "/images/scene-03/bg.png",
  heightVh: 520,
  layers: [
    {
      id: "motif",
      type: "motif",
      src: "/images/scene-03/motif.png",
      start: 0.04,
      end: 1.0,
      fadeIn: 0.1,
      fadeOut: 0.05,
      from: { opacity: 0, scale: 1.04 },
      to: { opacity: 0.55, scale: 1.0 },
      zIndex: 12,
    },

    {
      id: "chapter",
      type: "text",
      content: (
        <span className="font-sans text-[11px] uppercase tracking-[0.55em] text-amber-200/80">
          Chương 03
        </span>
      ),
      className: "items-start pt-[18vh]",
      start: -0.05,
      end: 0.24,
      fadeIn: 0.05,
      fadeOut: 0.4,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -10 },
      zIndex: 30,
    },

    {
      id: "title",
      type: "text",
      content: (
        <h1
          id="scene-03-title"
          className="font-display max-w-[14ch] text-5xl font-medium leading-tight tracking-tight text-zinc-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[84px]"
        >
          Một M luôn tích cực
        </h1>
      ),
      start: -0.05,
      end: 0.32,
      fadeIn: 0.08,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0, scale: 1 },
      to: { opacity: 1, y: -40, scale: 1.02 },
      zIndex: 32,
    },

    {
      id: "subtitle",
      type: "text",
      content: (
        <p className="font-serif max-w-2xl text-base italic text-zinc-200/85 sm:text-lg md:text-xl">
          Hai phiên bản, một con người — ánh đèn ấm bên trái, ánh điện thoại
          lạnh bên phải.
        </p>
      ),
      className: "items-end pb-[22vh]",
      start: -0.03,
      end: 0.34,
      fadeIn: 0.1,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -20 },
      zIndex: 32,
    },

    {
      id: "closing",
      type: "text",
      content: (
        <blockquote className="font-serif max-w-3xl text-xl italic leading-[1.7] text-amber-100/95 sm:text-2xl md:text-3xl md:leading-[1.75]">
          “Một con người có thể có nhiều khuôn mặt.
          Vấn đề bắt đầu khi chỉ một khuôn mặt được phép tồn tại.”
        </blockquote>
      ),
      start: 0.92,
      end: 1.0,
      fadeIn: 0.35,
      fadeOut: 0.1,
      from: { opacity: 0, y: 32 },
      to: { opacity: 1, y: 0 },
      zIndex: 36,
    },
  ],

  beats: [
    // beat-1 ONLINE — image on LEFT (overlays pink studio half), text on RIGHT
    {
      id: "s3-beat-1",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          M bắt đầu xây dựng hình ảnh của mình trên mạng. Một bức ảnh ở thư
          viện. Một caption về sự cố gắng. Một story ở sự kiện sinh viên. Một
          dòng trạng thái truyền cảm hứng.
        </p>
      ),
      imageSrc: "/images/scene-03/panel-1-online.png",
      imageAlt: "M phiên bản online cười rạng rỡ trước nền hồng pastel.",
      layout: "text-right",
      start: 0.2,
      enterEnd: 0.32,
      exitStart: 0.38,
      end: 0.46,
      zIndex: 33,
    } satisfies StoryBeatProps,

    // beat-2 ONLINE — image on LEFT, text on RIGHT
    {
      id: "s3-beat-2",
      text: (
        <div className="space-y-3 text-center md:text-left">
          <p className="font-serif text-[17px] leading-[1.75] text-zinc-100/95 sm:text-[19px] md:text-[20px]">
            M viết:
          </p>
          <p className="font-serif text-[18px] italic leading-[1.7] text-amber-100/90 sm:text-[20px] md:text-[22px]">
            “Mỗi ngày là một cơ hội để tốt hơn.”
            <br />
            “Đừng bỏ cuộc, vì bạn xứng đáng với thành công.”
          </p>
          <p className="font-serif text-[17px] leading-[1.75] text-zinc-100/90 sm:text-[19px] md:text-[20px]">
            Dần dần, mọi người nhớ đến M như một người năng động, vui vẻ và
            tích cực.
          </p>
        </div>
      ),
      imageSrc: "/images/scene-03/panel-2-online.png",
      imageAlt: "M phiên bản online cầm cốc cà phê, sparkle và icon trái tim.",
      layout: "text-right",
      start: 0.44,
      enterEnd: 0.52,
      exitStart: 0.58,
      end: 0.64,
      zIndex: 34,
    } satisfies StoryBeatProps,

    // beat-3 REAL — image on RIGHT (overlays teal room half), text on LEFT
    {
      id: "s3-beat-3",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Nhưng ngoài đời, có những ngày M không muốn nói chuyện với ai.
        </p>
      ),
      imageSrc: "/images/scene-03/panel-3-real.png",
      imageAlt:
        "M ngồi bệt trên sàn dựa lưng giường, ánh xanh điện thoại hắt lên mặt.",
      layout: "text-left",
      start: 0.62,
      enterEnd: 0.7,
      exitStart: 0.76,
      end: 0.82,
      zIndex: 35,
    } satisfies StoryBeatProps,

    // beat-4 REAL — image on RIGHT, text on LEFT
    {
      id: "s3-beat-4",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Có những tối, M chỉ nằm im trong phòng trọ, nhìn màn hình điện thoại
          sáng lên trong bóng tối. M không muốn ai thấy phần đó của mình.
        </p>
      ),
      imageSrc: "/images/scene-03/panel-4-real.png",
      imageAlt: "M nằm nghiêng trên giường, ánh xanh điện thoại cạnh gối.",
      layout: "text-left",
      start: 0.8,
      enterEnd: 0.86,
      exitStart: 0.9,
      end: 0.94,
      zIndex: 36,
    } satisfies StoryBeatProps,
  ],
};

/**
 * Scene 04 — "Ổn mà"  (heightVh 560)
 * Timeline (local progress 0..1):
 *  0.00 – 0.30 : "Chapter 04" eyebrow + title + subtitle
 *  0.20 – 0.44 : beat-1  "Gặp bạn bè, M vẫn cười..."             → panel-1 (M cười với bạn blur)
 *  0.40 – 0.60 : beat-2  "'Ổn mà.' — Câu trả lời lặp lại..."     → panel-2 (close-up nụ cười mím môi)
 *  0.56 – 0.72 : beat-3  "Các mối quan hệ dần nhẹ ở bề mặt..."   → panel-3 (M giữa chat bubble rỗng)
 *  0.68 – 0.84 : beat-4  "Ít người thật sự hiểu M hơn..."        → panel-4-cracked (bubble nứt)
 *  0.82 – 0.94 : beat-5  closing image — cô đơn giữa đám đông    → panel-5-crowd
 *  0.92 – 1.00 : closing quote
 */
const scene04: StorySceneProps = {
  sceneId: "scene-04",
  backgroundImage: "/images/scene-04/bg.png",
  heightVh: 560,
  layers: [
    {
      id: "motif",
      type: "motif",
      src: "/images/scene-04/motif.png",
      start: 0.04,
      end: 1.0,
      fadeIn: 0.1,
      fadeOut: 0.05,
      from: { opacity: 0, scale: 1.04 },
      to: { opacity: 0.55, scale: 1.0 },
      zIndex: 12,
    },

    {
      id: "chapter",
      type: "text",
      content: (
        <span className="font-sans text-[11px] uppercase tracking-[0.55em] text-amber-200/80">
          Chương 04
        </span>
      ),
      className: "items-start pt-[18vh]",
      start: -0.05,
      end: 0.24,
      fadeIn: 0.05,
      fadeOut: 0.4,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -10 },
      zIndex: 30,
    },

    {
      id: "title",
      type: "text",
      content: (
        <h1
          id="scene-04-title"
          className="font-display text-5xl font-medium leading-tight tracking-tight text-zinc-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          “Ổn mà.”
        </h1>
      ),
      start: -0.05,
      end: 0.32,
      fadeIn: 0.08,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0, scale: 1 },
      to: { opacity: 1, y: -40, scale: 1.02 },
      zIndex: 32,
    },

    {
      id: "subtitle",
      type: "text",
      content: (
        <p className="font-serif max-w-2xl text-base italic text-zinc-200/85 sm:text-lg md:text-xl">
          Hai chữ ngắn nhất, lặp đi lặp lại đến khi không còn phân biệt được
          thật và quen.
        </p>
      ),
      className: "items-end pb-[22vh]",
      start: -0.03,
      end: 0.34,
      fadeIn: 0.1,
      fadeOut: 0.42,
      from: { opacity: 1, y: 0 },
      to: { opacity: 1, y: -20 },
      zIndex: 32,
    },

    {
      id: "closing",
      type: "text",
      content: (
        <blockquote className="font-serif max-w-3xl text-xl italic leading-[1.7] text-amber-100/95 sm:text-2xl md:text-3xl md:leading-[1.75]">
          “Điều làm M mệt nhất không phải là cố gắng.
          Điều làm M mệt nhất là phải luôn xuất hiện như thể mình không bao
          giờ mệt.”
        </blockquote>
      ),
      start: 0.92,
      end: 1.0,
      fadeIn: 0.35,
      fadeOut: 0.1,
      from: { opacity: 0, y: 32 },
      to: { opacity: 1, y: 0 },
      zIndex: 38,
    },
  ],

  beats: [
    // beat-1
    {
      id: "s4-beat-1",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Gặp bạn bè, M vẫn cười. Đi học nhóm, M vẫn nói chuyện vui vẻ. Khi ai
          đó hỏi “Dạo này ổn không?”, M trả lời rất nhanh: “Ổn mà.”
        </p>
      ),
      imageSrc: "/images/scene-04/panel-1.png",
      imageAlt:
        "M đứng cầm cốc cà phê, cười lịch sự với một bạn blur ở phía phải.",
      layout: "text-top",
      start: 0.2,
      enterEnd: 0.3,
      exitStart: 0.36,
      end: 0.44,
      zIndex: 33,
    } satisfies StoryBeatProps,

    // beat-2
    {
      id: "s4-beat-2",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Câu trả lời ấy lặp lại nhiều lần đến mức M không còn biết mình nói
          vì thật sự ổn, hay vì đã quen phải tỏ ra như vậy.
        </p>
      ),
      imageSrc: "/images/scene-04/panel-2.png",
      imageAlt:
        "Close-up khuôn mặt M, nụ cười mím môi lịch sự, mắt nhìn xuống xa cách.",
      layout: "text-top",
      start: 0.4,
      enterEnd: 0.48,
      exitStart: 0.54,
      end: 0.6,
      zIndex: 34,
    } satisfies StoryBeatProps,

    // beat-3
    {
      id: "s4-beat-3",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          Các mối quan hệ quanh M dần trở nên nhẹ ở bề mặt, nhưng rỗng ở bên
          trong.
        </p>
      ),
      imageSrc: "/images/scene-04/panel-3.png",
      imageAlt:
        "M đứng giữa cụm chat bubble rỗng lơ lửng, chỉ có dấu chấm bên trong.",
      layout: "text-top",
      start: 0.56,
      enterEnd: 0.62,
      exitStart: 0.66,
      end: 0.72,
      zIndex: 35,
    } satisfies StoryBeatProps,

    // beat-4
    {
      id: "s4-beat-4",
      text: (
        <p className="font-serif text-[18px] leading-[1.85] text-zinc-100/95 sm:text-[20px] md:text-[22px]">
          M có nhiều người theo dõi hơn. Nhiều người biết đến hơn. Nhưng lại
          ít người thật sự hiểu M hơn.
        </p>
      ),
      imageSrc: "/images/scene-04/panel-4-cracked.png",
      imageAlt:
        "Các chat bubble quanh M nứt nhẹ, tan ở cạnh — kết nối bắt đầu rạn.",
      layout: "text-top",
      start: 0.68,
      enterEnd: 0.74,
      exitStart: 0.8,
      end: 0.84,
      zIndex: 36,
    } satisfies StoryBeatProps,

    // beat-5
    {
      id: "s4-beat-5",
      text: null,
      imageSrc: "/images/scene-04/panel-5-crowd.png",
      imageAlt:
        "M đứng sắc nét chính giữa, vây quanh là silhouette sinh viên blur — cô đơn giữa đám đông.",
      layout: "center",
      start: 0.82,
      enterEnd: 0.88,
      exitStart: 0.91,
      end: 0.94,
      zIndex: 37,
    } satisfies StoryBeatProps,
  ],
};

export const storyScenes: StorySceneProps[] = [scene01, scene02, scene03, scene04];
