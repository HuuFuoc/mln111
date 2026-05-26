# Storytelling Website – Sinh viên M giữa hai phiên bản của chính mình

> Định hướng: Interactive graphic novel / scrollytelling theo tinh thần website “The Boat”: đọc bằng thao tác scroll, hình ảnh chiếm vai trò chính, chữ ngắn nhưng nặng cảm xúc, chuyển động và âm thanh dẫn nhịp câu chuyện.

---

## 1. Ý tưởng tổng thể

Website kể câu chuyện về M – một sinh viên từ quê lên thành phố học đại học. Trên mạng xã hội, M xây dựng hình ảnh năng động, tích cực, truyền cảm hứng. Nhưng ở đời thực, M lại cô đơn, áp lực và dần không còn nhận ra đâu là con người thật của mình.

Câu chuyện được triển khai như một hành trình thị giác:

1. Từ quê lên thành phố.
2. Bước vào môi trường mới.
3. Tạo ra hình tượng online.
4. Bị chính hình tượng đó chi phối.
5. Các mối quan hệ trở nên “diễn”.
6. M rơi vào khủng hoảng bản thân.
7. Nhìn lại bằng triết học Mác - Lênin.
8. Tìm cách sống thật hơn trong các quan hệ xã hội chân thành hơn.

Thông điệp chính:

> M không thể tìm thấy bản thân bằng cách tách mình khỏi xã hội.  
> M chỉ có thể hiểu mình khi nhìn lại toàn bộ những quan hệ xã hội đang tạo nên mình.

---

## 2. Phong cách storytelling cần hướng tới

### Tinh thần hình ảnh

Không làm website như một bài thuyết trình nhiều chữ.  
Nên làm như một truyện tranh điện tử có chiều sâu cảm xúc.

Phong cách phù hợp:

- Cinematic digital illustration.
- Semi-realistic.
- Tông màu xanh đêm, tím, xám, trắng, đen.
- Ít màu rực.
- Nhiều khoảng trống.
- Nhân vật M luôn là trung tâm cảm xúc.
- Text ngắn, xuất hiện từng đoạn.
- Hình ảnh và chuyển động phải kể chuyện trước, chữ chỉ bổ sung ý nghĩa.

### Cấu trúc trải nghiệm

Người dùng scroll xuống để đi qua từng lớp tâm lý của M.

Mỗi scene nên có:

- Một hình ảnh chính.
- Một đoạn narration ngắn.
- Một lớp ý nghĩa triết học.
- Một hiệu ứng chuyển động.
- Một âm thanh nền hoặc âm thanh gợi cảm xúc.
- Một câu quote ngắn để chốt scene.

---

## 3. Cấu trúc page đề xuất

```txt
/src
  /content
    m-story.md
    scenes.ts
  /components
    StoryPage.tsx
    SceneSection.tsx
    ParallaxLayer.tsx
    AnimatedText.tsx
    SocialCard.tsx
    RelationshipMap.tsx
    AudioController.tsx
  /assets
    /images
      scene-01-countryside.png
      scene-02-city.png
      scene-03-social-persona.png
      scene-04-split-self.png
      scene-05-fake-relationships.png
      scene-06-identity-crisis.png
      scene-07-social-relations-map.png
      scene-08-healing.png
    /audio
      countryside-night.mp3
      city-noise.mp3
      notification.mp3
      room-silence.mp3
      heartbeat.mp3
      soft-ending.mp3
```

---

# 4. Scene-by-scene Storytelling

---

## Scene 01 – Ánh đèn thành phố ở rất xa

### Title

Ánh đèn đầu tiên

### Narration

M lớn lên ở một vùng quê yên tĩnh.

Đêm trước ngày lên thành phố học đại học, M ngồi bên cửa sổ gỗ cũ, nhìn về phía xa. Ở đó, thành phố chỉ hiện lên như vài chấm sáng nhỏ trên đường chân trời.

M nghĩ rằng thành phố sẽ là nơi mình bắt đầu một cuộc đời mới.

Một phiên bản tự tin hơn.  
Năng động hơn.  
Được công nhận nhiều hơn.

Nhưng M chưa biết rằng, từ giây phút bước vào môi trường mới, M cũng bắt đầu bước vào rất nhiều mối quan hệ mới – những mối quan hệ sẽ dần thay đổi cách M nhìn về chính mình.

### Philosophy layer

Theo triết học Mác - Lênin, con người không tồn tại như một cá nhân cô lập. M được hình thành từ gia đình, quê hương, trường học, kỳ vọng của cha mẹ và ước mơ đổi đời.

Ngay từ đầu, M đã là một con người nằm trong các quan hệ xã hội cụ thể.

### Quote

> Không ai bước vào thành phố với một cái tôi hoàn toàn trống rỗng.  
> Ta luôn mang theo những quan hệ đã tạo nên mình.

### Visual direction (graphic-novel layout)

Mỗi scene = **1 background không khí** (full-bleed 16:9 phía sau) + **1 họa tiết góc** (watercolor motif viền trang trí) + **4 ô truyện** (panel vuông 1:1, kể tuần tự khi scroll).

- **Background atmosphere**: cảnh đêm miền quê Việt Nam, không có nhân vật. Đường chân trời xa có vài chấm sáng nhỏ của thành phố. Tone trầm, đóng vai trò "sân khấu" mờ.
- **Motif góc**: nét watercolor hoa cau & lá tre ở 2 góc đối diện, ink-wash mảnh — dấu nhận diện cho scene quê.
- **Panel 1** (medium): M ngồi nghiêng bên cửa sổ gỗ, cằm tựa tay, nhìn ra xa.
- **Panel 2** (extreme close-up): đôi mắt M phản chiếu ánh trăng + những chấm sáng thành phố mờ.
- **Panel 3** (still life): bàn học vở mở, đèn giấy ấm, balo canvas đóng gói sẵn cạnh ghế — không nhân vật.
- **Panel 4** (wide): M nhỏ bé bên khung cửa sổ, bầu trời đêm rộng phía sau.

### Animation direction with React Spring

- Background fade in chậm (opacity 0 → 1, ~1.2s).
- Motif góc fade in nhẹ sau background (~0.6s lag), không di chuyển.
- 4 panel xuất hiện tuần tự khi scroll: mỗi panel scale 0.95 → 1 + opacity 0 → 1, lệch nhau 200–300ms.
- Text narration chia cột (3 cột) phía trên cụm panel, reveal từng đoạn theo scroll.
- Ánh đèn thành phố trong background nhấp nháy rất nhẹ (loop infinite).

### Audio direction

- Tiếng côn trùng ban đêm.
- Gió nhẹ.
- Âm piano rất nhỏ.

---

## Scene 02 – Thành phố không chỉ có ước mơ

### Title

Thành phố và những tiêu chuẩn mới

### Narration

Ngày đầu ở đại học, M thấy mọi thứ đều nhanh hơn mình tưởng.

Bạn bè nói về câu lạc bộ.  
Người khác đăng ảnh đi sự kiện.  
Có người khoe thành tích, học bổng, dự án, công việc làm thêm.

Trên mạng xã hội, ai cũng có vẻ như đang sống một cuộc đời rất đáng ngưỡng mộ.

M bắt đầu tự hỏi:

“Mình có đang chậm hơn mọi người không?”  
“Mình có đủ nổi bật không?”  
“Mình có đang bị bỏ lại phía sau không?”

Ban đầu, M chỉ đăng vài tấm ảnh để lưu lại kỷ niệm.  
Nhưng rồi M nhận ra: khi mình vui vẻ hơn, tích cực hơn, mạnh mẽ hơn, mọi người phản hồi nhiều hơn.

Từ đó, M bắt đầu học cách trở thành phiên bản được yêu thích.

### Philosophy layer

Mạng xã hội không chỉ là công cụ cá nhân. Nó là một môi trường xã hội mới, nơi M được nhìn nhận, đánh giá và phản hồi thông qua lượt thích, bình luận và sự chú ý.

Những phản hồi ấy tác động ngược lại đến M, khiến M điều chỉnh hành vi của mình.

Điều này thể hiện rõ luận điểm: bản chất con người được hình thành và biến đổi trong các quan hệ xã hội.

### Quote

> M không chỉ sử dụng mạng xã hội.  
> M cũng đang bị mạng xã hội định hình lại.

### Visual direction

- Thành phố đông, ánh đèn nhiều, biển quảng cáo, màn hình điện thoại.
- M đứng giữa dòng người.
- Các social card nổi lên quanh M.
- Ban đầu card ít, sau đó dày hơn.

### Animation direction with React Spring

- Social cards trượt từ nhiều hướng vào.
- Like/comment counter tăng dần.
- Background city noise chuyển động nhẹ.
- M bị che một phần bởi các card.

### Audio direction

- Tiếng xe thành phố.
- Tiếng thông báo điện thoại.
- Tiếng người nói chuyện xa xa.

---

## Scene 03 – Phiên bản online ra đời

### Title

Một M luôn tích cực

### Narration

M bắt đầu xây dựng hình ảnh của mình trên mạng.

Một bức ảnh ở thư viện.  
Một caption về sự cố gắng.  
Một story ở sự kiện sinh viên.  
Một dòng trạng thái truyền cảm hứng.

M viết:

“Mỗi ngày là một cơ hội để tốt hơn.”

“Đừng bỏ cuộc, vì bạn xứng đáng với thành công.”

“Hãy sống hết mình với tuổi trẻ.”

Dần dần, mọi người nhớ đến M như một người năng động, vui vẻ và tích cực.

Nhưng ngoài đời, có những ngày M không muốn nói chuyện với ai.

Có những tối, M chỉ nằm im trong phòng trọ, nhìn màn hình điện thoại sáng lên trong bóng tối.

M không muốn ai thấy phần đó của mình.

### Philosophy layer

Không nên hiểu đơn giản rằng M trên mạng là “giả”, còn M ngoài đời mới là “thật tuyệt đối”.

Cả hai đều là những biểu hiện của M trong những quan hệ xã hội khác nhau.

- Với mạng xã hội, M là người truyền cảm hứng.
- Với bạn bè, M cố gắng tỏ ra ổn.
- Với gia đình, M muốn chứng minh mình trưởng thành.
- Khi ở một mình, M đối diện với áp lực và cô đơn.

Con người thật của M không nằm ở một mặt duy nhất, mà phải được hiểu trong tổng thể các quan hệ xã hội ấy.

### Quote

> Một con người có thể có nhiều khuôn mặt.  
> Vấn đề bắt đầu khi chỉ một khuôn mặt được phép tồn tại.

### Visual direction

- Split screen.
- Bên trái: M online, ánh sáng đẹp, nhiều like.
- Bên phải: M trong phòng trọ, ánh sáng xanh từ điện thoại, cô đơn.
- Hai bên càng scroll càng lệch tông màu.

### Animation direction with React Spring

- Split panel mở ra từ giữa màn hình.
- Online M sáng dần.
- Real M tối dần.
- Text online hiện nhanh, text đời thật hiện chậm.

### Audio direction

- Bên online: notification, crowd ambience nhẹ.
- Bên đời thật: tiếng quạt, tiếng thở, silence.

---

## Scene 04 – Khi vai diễn bước ra ngoài đời

### Title

“Ổn mà”

### Narration

M không chỉ diễn trên mạng nữa.

Gặp bạn bè, M vẫn cười.  
Đi học nhóm, M vẫn nói chuyện vui vẻ.  
Khi ai đó hỏi “Dạo này ổn không?”, M trả lời rất nhanh:

“Ổn mà.”

Câu trả lời ấy lặp lại nhiều lần đến mức M không còn biết mình nói vì thật sự ổn, hay vì đã quen phải tỏ ra như vậy.

Các mối quan hệ quanh M dần trở nên nhẹ ở bề mặt, nhưng rỗng ở bên trong.

M có nhiều người theo dõi hơn.  
Nhiều người biết đến hơn.  
Nhưng lại ít người thật sự hiểu M hơn.

### Philosophy layer

Các quan hệ xã hội có thể giúp con người phát triển, nhưng cũng có thể tạo ra áp lực khiến con người bị tha hóa.

Trong trường hợp của M, quan hệ xã hội không còn là nơi M được chia sẻ thật, mà trở thành sân khấu nơi M phải trình diễn một hình ảnh phù hợp với kỳ vọng của người khác.

### Quote

> Điều làm M mệt nhất không phải là cố gắng.  
> Điều làm M mệt nhất là phải luôn xuất hiện như thể mình không bao giờ mệt.

### Visual direction

- M đứng giữa nhiều bong bóng hội thoại.
- Các câu nói lặp lại:
  - “Ổn không?”
  - “Ổn mà.”
  - “Cậu truyền cảm hứng thật.”
  - “Ước gì mình được như cậu.”
- Gương mặt M không còn biểu cảm rõ.

### Animation direction with React Spring

- Chat bubbles xuất hiện liên tục.
- Mỗi lần câu “Ổn mà” hiện ra, background tối hơn.
- Một lớp blur phủ dần lên các nhân vật xung quanh.

### Audio direction

- Tiếng nói chuyện bị bóp méo nhẹ.
- Tiếng notification xa dần.
- Nhịp tim rất nhẹ ở nền.

---

## Scene 05 – Không nhận ra chính mình

### Title

Mình là ai?

### Narration

Một đêm, M mở lại trang cá nhân của mình.

Tấm ảnh nào cũng đẹp.  
Dòng trạng thái nào cũng tích cực.  
Mọi thứ nhìn vào đều giống như một cuộc đời đáng mơ ước.

Nhưng M lại thấy xa lạ.

M nhìn phiên bản ấy và tự hỏi:

“Đây có thật là mình không?”

“Mình đang sống như mình muốn, hay như người khác muốn nhìn thấy?”

“Nếu không còn những bài đăng, những lượt thích, những lời khen, mình là ai?”

Câu hỏi ấy làm M sợ.

Không phải vì M không có bản chất.  
Mà vì M đã quen tìm bản thân mình trong ánh nhìn của người khác.

### Philosophy layer

Ở đây xuất hiện mâu thuẫn giữa hai quan điểm:

Quan điểm 1: Con người phải sống đúng với bản chất thật bên trong, không bị xã hội chi phối.

Quan điểm này có điểm đúng: nó nhắc con người không nên sống giả tạo, không nên đánh mất cảm xúc thật.

Nhưng nếu cho rằng có một “bản chất thật” hoàn toàn có sẵn bên trong, tách khỏi xã hội, thì chưa phù hợp với triết học Mác - Lênin.

Quan điểm 2: Con người là sản phẩm của xã hội, nên việc thay đổi theo môi trường là bình thường.

Quan điểm này gần hơn với triết học Mác - Lênin vì nó thấy được vai trò của xã hội. Tuy nhiên, cũng không nên hiểu rằng con người chỉ là sản phẩm bị động của xã hội.

Con người vừa chịu tác động của xã hội, vừa có khả năng nhận thức, lựa chọn và cải tạo các quan hệ xã hội của mình.

### Quote

> M không đánh mất bản thân vì thay đổi.  
> M khủng hoảng vì không còn làm chủ được những quan hệ đang thay đổi mình.

### Visual direction

- M đứng trước màn hình điện thoại lớn.
- Trên màn hình là phiên bản online của M đang cười.
- M thật đứng bên ngoài màn hình, im lặng.
- Khoảng cách giữa hai phiên bản rất rõ.

### Animation direction with React Spring

- Reflection effect: online persona phản chiếu như gương.
- Khi scroll, reflection bị nhiễu.
- Các câu hỏi xuất hiện từng dòng, chậm và nặng.

### Audio direction

- Âm thanh điện thoại rè nhẹ.
- Tiếng heartbeat rõ hơn.
- Nền gần như im lặng.

---

## Scene 06 – Nhìn M bằng triết học Mác - Lênin

### Title

Bản chất con người là tổng hòa các quan hệ xã hội

### Narration

Nếu chỉ nhìn M trên mạng, ta sẽ nghĩ M là người vui vẻ, tích cực, mạnh mẽ.

Nếu chỉ nhìn M trong phòng trọ, ta sẽ nghĩ M là người cô đơn, yếu đuối, khép kín.

Nhưng cả hai cách nhìn ấy đều chưa đủ.

M phải được hiểu trong toàn bộ các quan hệ xã hội đang tác động đến mình:

Gia đình.  
Nhà trường.  
Bạn bè.  
Mạng xã hội.  
Thành phố.  
Kỳ vọng thành công.  
Nỗi sợ bị đánh giá.  
Nhu cầu được công nhận.  
Nhu cầu được sống thật.

Chính tổng hòa các quan hệ đó tạo nên con người M.

### Philosophy layer

Theo triết học Mác - Lênin, bản chất con người không phải là một cái gì trừu tượng, bất biến, nằm sẵn bên trong từng cá nhân riêng lẻ.

Bản chất con người được hình thành trong đời sống hiện thực, thông qua các quan hệ xã hội cụ thể.

Vì vậy, câu chuyện của M không nên được hiểu là câu chuyện của một cá nhân “giả tạo”, mà là biểu hiện của một con người đang bị giằng kéo bởi nhiều quan hệ xã hội khác nhau.

### Quote

> Muốn hiểu M, không thể chỉ hỏi “M thật sự là ai?”.  
> Phải hỏi: “Những quan hệ nào đang tạo nên M?”

### Visual direction

- M đứng ở trung tâm.
- Xung quanh là các node:
  - Gia đình
  - Trường học
  - Bạn bè
  - Mạng xã hội
  - Thành phố
  - Kỳ vọng
  - Cảm xúc thật
- Ban đầu các đường nối rối, kéo M về nhiều phía.
- Sau đó các đường nối dần rõ hơn.

### Animation direction with React Spring

- Dùng RelationshipMap.
- Node xuất hiện từng cái.
- Line nối vào M bằng animation draw path.
- Một số line rung nhẹ để thể hiện áp lực.
- Cuối scene, map ổn định hơn.

### Audio direction

- Âm nền trầm, chậm.
- Khi mỗi node xuất hiện có một sound cue nhỏ.
- Âm thanh dần bớt căng khi map ổn định.

---

## Scene 07 – Ý kiến của nhóm

### Title

Không tách khỏi xã hội, cũng không đánh mất chính mình

### Narration

Nhóm cho rằng không nên tuyệt đối hóa một trong hai quan điểm.

Quan điểm “con người phải sống đúng với bản chất thật bên trong” có giá trị vì nhắc M phải trung thực với cảm xúc của mình. M không nên biến cuộc sống thành một màn trình diễn.

Tuy nhiên, nếu hiểu rằng bản chất con người hoàn toàn có sẵn bên trong và không chịu tác động của xã hội thì chưa đầy đủ.

Quan điểm “con người là sản phẩm của xã hội” phù hợp hơn với triết học Mác - Lênin, vì con người luôn được hình thành trong các quan hệ xã hội cụ thể.

Nhưng cũng không thể hiểu rằng con người chỉ bị xã hội quyết định một cách thụ động.

M vừa chịu tác động của xã hội, vừa có khả năng nhận thức lại bản thân, lựa chọn lại các mối quan hệ, điều chỉnh cách sống và xây dựng môi trường xã hội lành mạnh hơn.

### Group opinion

Trong trường hợp của M, việc thay đổi theo môi trường đại học và mạng xã hội là điều bình thường.

Nhưng khi sự thay đổi ấy làm M xa rời cảm xúc thật, biến các mối quan hệ thành sự trình diễn và khiến M không còn nhận ra chính mình, thì M cần nhìn lại.

M không cần xóa bỏ hoàn toàn hình ảnh online.  
M cần làm cho hình ảnh đó gần hơn với đời sống thật.

M không cần tách khỏi xã hội để tìm “con người thật”.  
M cần xây dựng những quan hệ xã hội chân thành hơn, nơi M được công nhận không chỉ khi mạnh mẽ, tích cực và thành công, mà cả khi mệt mỏi, yếu đuối và cần được lắng nghe.

### Quote

> Sống thật không phải là sống ngoài xã hội.  
> Sống thật là sống trong những quan hệ xã hội chân thành hơn.

### Visual direction

- Hai phiên bản của M dần tiến lại gần nhau.
- Các social card không biến mất hoàn toàn, nhưng bớt che phủ M.
- Một người bạn thật sự xuất hiện cạnh M.
- M đặt điện thoại xuống hoặc mở cửa phòng.

### Animation direction with React Spring

- Online M và real M merge bằng opacity crossfade.
- Social cards scale nhỏ lại và trôi ra xa.
- Ánh sáng phòng chuyển từ xanh lạnh sang vàng ấm.
- Node “Bạn bè thật”, “Gia đình”, “Chính mình” sáng lên nhẹ.

### Audio direction

- Nhịp tim giảm.
- Âm piano ấm hơn.
- Tiếng thành phố nhỏ lại.
- Có âm thanh gió hoặc cửa sổ mở.

---

## Scene 08 – Kết

### Title

Tìm lại mình trong những quan hệ chân thành hơn

### Narration

M không cần trở thành một người hoàn toàn khác.

M cũng không cần phủ nhận phiên bản tích cực mà mình từng xây dựng.

Điều M cần là để phiên bản ấy không còn là chiếc mặt nạ duy nhất.

M có thể tích cực, nhưng cũng có quyền mệt.  
M có thể truyền cảm hứng, nhưng cũng có quyền cần được lắng nghe.  
M có thể thay đổi theo xã hội, nhưng không nên để xã hội biến mình thành một vai diễn.

Từ câu chuyện của M, ta thấy rõ:

Bản chất con người là tổng hòa các quan hệ xã hội.

Con người không tìm thấy bản thân bằng cách tách mình khỏi xã hội, mà bằng cách nhận thức, lựa chọn và xây dựng những quan hệ xã hội nhân văn hơn.

### Final quote

> Muốn tìm lại chính mình, M không cần biến mất khỏi thế giới.  
> M cần trở về với những quan hệ thật hơn trong thế giới ấy.

### Visual direction

- M đứng ở ban công/ký túc xá/phòng trọ.
- Thành phố vẫn ở đó, nhưng không còn áp đảo.
- Ánh sáng bình minh hoặc ánh vàng nhẹ.
- Không khí mở, dịu, có hy vọng.

### Animation direction with React Spring

- Scroll cuối làm background sáng dần.
- Text final quote hiện chậm.
- Các lớp hình ảnh dừng chuyển động.
- Có thể cho nút “Replay story” hoặc “View philosophy summary”.

### Audio direction

- Nhạc nền dịu.
- Tiếng chim/tiếng gió nhẹ.
- Kết thúc bằng silence ngắn.

---

# 5. Mapping nội dung sang component React

## Data structure gợi ý

```ts
export const scenes = [
  {
    id: "opening",
    title: "Ánh đèn đầu tiên",
    type: "cinematic",
    image: "/images/scene-01-countryside.png",
    audio: "/audio/countryside-night.mp3",
    quote: "Không ai bước vào thành phố với một cái tôi hoàn toàn trống rỗng.",
    narration: [
      "M lớn lên ở một vùng quê yên tĩnh.",
      "Đêm trước ngày lên thành phố học đại học, M ngồi bên cửa sổ gỗ cũ, nhìn về phía xa.",
      "Ở đó, thành phố chỉ hiện lên như vài chấm sáng nhỏ trên đường chân trời.",
    ],
    philosophy:
      "Theo triết học Mác - Lênin, con người không tồn tại như một cá nhân cô lập. M được hình thành từ gia đình, quê hương, trường học, kỳ vọng của cha mẹ và ước mơ đổi đời.",
    motion: {
      background: "slowFade",
      text: "lineReveal",
      character: "softAppear",
    },
  },
];
```

---

## Animation patterns nên dùng

### 1. Scroll-based fade

Dùng cho text narration.

```txt
opacity: 0 -> 1
transform: translateY(40px) -> translateY(0)
```

### 2. Parallax layers

Dùng cho background, social cards, city lights.

```txt
background speed: 0.2
character speed: 0.5
foreground cards speed: 0.8
```

### 3. Split-screen transition

Dùng cho scene online persona.

```txt
left panel: x -100% -> 0
right panel: x 100% -> 0
center line: opacity 0 -> 1
```

### 4. Social pressure effect

Dùng cho các card mạng xã hội.

```txt
scale: 0.8 -> 1
opacity: 0 -> 1
rotation: random small angle
blur background gradually
```

### 5. Identity glitch

Dùng cho cảnh M không nhận ra mình.

```txt
filter: blur(0px) -> blur(2px)
x: small shake
opacity flicker
```

### 6. Relationship map

Dùng cho phần triết học.

```txt
nodes appear one by one
lines draw from node to M
some lines shake to show pressure
final layout stabilizes
```

---

# 6. Prompt tạo ảnh cho từng scene (cho ChatGPT / DALL·E)

Mỗi scene được tách thành **6 prompt theo cấu trúc graphic-novel**: 1 **BG** (atmosphere background 16:9) + 1 **MOTIF** (họa tiết góc trang trí 16:9) + 4 **PANEL** (ô truyện vuông 1:1). Mục đích:

- Mỗi scene render như một "trang truyện" — BG là sân khấu, MOTIF là viền nhận diện, các panel kể tuần tự khi scroll.
- Dễ giữ nhân vật M nhất quán giữa các scene (qua character reference sheet ở 6.1).
- Dễ giữ 4 panel cùng scene nhất quán với nhau (qua Scene Anchor — đóng vai trò "thế giới chung" của 4 panel).
- Dễ chỉnh sửa từng phần (regen 1 panel mà không phải làm lại cả scene).

## 6.0 Cách dùng prompt với ChatGPT

1. Generate **character reference sheet (mục 6.1)** trước nhất. Tải file PNG về.
2. Với mọi prompt **PANEL có nhân vật M**: **upload reference sheet vào cùng turn chat** rồi paste prompt — ChatGPT sẽ dùng ảnh đó để giữ khuôn mặt/dáng người nhất quán.
3. **QUAN TRỌNG — Scene Anchor pattern (giữ 4 panel cùng scene khớp với nhau):**
   - Mỗi scene 01–08 có một khối **Scene Anchor** ở đầu, mô tả cố định: thế giới, outfit M, đạo cụ, hướng ánh sáng, style và **layout output** (BG/MOTIF/PANEL có khung khác nhau).
   - Khi gửi bất kỳ prompt nào của scene (BG / MOTIF / P1 / P2 / P3 / P4) cho ChatGPT, **paste nguyên xi khối Scene Anchor vào TRƯỚC**, rồi mới paste prompt cụ thể phía sau. Cấu trúc 1 turn chat:

     ```
     [SCENE ANCHOR của scene X — copy nguyên xi]

     [Prompt cụ thể — vd: 01·P1 Panel 1]
     ```

   - Như vậy mọi panel cùng scene đều dựa trên cùng "thế giới" — outfit M giữ nguyên giữa 4 panel, ánh sáng giữ đúng 2 hướng, đạo cụ cố định giữ vị trí. 4 panel của cùng scene sẽ ăn nhập về tông và logic khi compose trong React.
   - Mỗi prompt PANEL đã có chỉ dẫn "khung vuông 1:1, viền mảnh đen, nền NGOÀI khung là trắng kem trung tính phẳng" — DALL·E sẽ render dạng "tem panel" sẵn sàng cắt và đặt lên BG trong React.

4. Với **BG** và **MOTIF**: prompt đã yêu cầu vùng giữa khung "khá trống" hoặc "HOÀN TOÀN TRỐNG" — để khi đặt panel lên trên không che mất phần đẹp.
5. Tách nền sau khi tải: ảnh PANEL có nền trắng kem solid → dùng `remove.bg`, Photoshop hoặc `rembg` để tách khung panel thành PNG transparent rồi compose lên BG trong React.
6. ChatGPT/DALL·E **không nhận negative prompt** kiểu Midjourney. Mọi yêu cầu "không có…" đã được viết lại thành chỉ dẫn dương trong cùng prompt.
7. Tỉ lệ khung hình ghi bằng lời ("ảnh ngang 16:9" cho BG/MOTIF, "khung vuông 1:1" cho PANEL) — ChatGPT tự chọn size phù hợp.
8. Nếu kết quả lệch reference sheet, gõ tiếp: _"Vẽ lại, giữ đúng khuôn mặt và kiểu tóc của nhân vật trong ảnh tham chiếu đầu tiên."_
9. Nếu DALL·E vẽ panel KHÔNG có khung viền hoặc KHÔNG có nền trắng kem ngoài khung như yêu cầu, gõ tiếp: _"Vẽ lại — phần nội dung phải nằm BÊN TRONG một khung vuông viền mảnh đen ở chính giữa ảnh; phần ngoài khung phải là nền trắng kem trung tính phẳng để dễ cắt."_

**Style tokens dùng chung (đã inline trong mọi prompt — chỉ tham khảo):**

```
STYLE   = cinematic digital illustration, semi-realistic, painterly brush strokes,
          soft cinematic lighting, shallow depth of field, subtle film grain
PALETTE = midnight blue, deep violet, cool gray with warm amber accents, low saturation
AVOID   = chữ/logo/watermark trong ảnh, méo mặt/lệch mắt/thừa ngón,
          phong cách anime chibi, 3D nhựa, quá bão hòa
```

## 6.1 Character reference sheet – M (generate trước, dùng cho mọi scene)

```
Hãy vẽ một character reference sheet cho nhân vật tên "M" — nữ sinh viên đại học Việt Nam, 19 tuổi.

Ngoại hình: dáng nhỏ khoảng 1m60, mặt trái xoan, đường hàm mềm, da rám nhẹ, mắt một mí hình hạnh nhân, mũi nhỏ, môi tự nhiên. Tóc đen dài chấm vai, rẽ ngôi lệch, đôi lúc buộc đuôi ngựa thấp.

Trang phục mặc định: áo len oversized màu kem be, jeans màu chàm đậm dáng suông, giày canvas trắng, balo canvas đen nhỏ.

Biểu cảm: trầm tĩnh, nội tâm, ánh mắt hơi mệt nhưng dịu dàng.

Bố cục: 3 góc nhìn trên cùng một canvas — front view, 3/4 view, side view. Full body. Nền xám trung tính phẳng. Ánh sáng diffuse đều.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ, không logo, không watermark. Khuôn mặt cân đối, hai mắt đối xứng, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

**Outfit variants** (mô tả lại khi prompt từng scene):

- **Quê**: áo sơ mi trắng cũ, quần vải xám, dép tổ ong.
- **Đi học**: sweater be, jeans indigo, balo canvas đen.
- **Phòng trọ buổi tối**: hoodie xám rộng, quần đùi, tóc búi lỏng.
- **Online persona**: sweater hồng pastel, son nhẹ, tóc chải gọn, ánh beauty light.
- **Kết**: áo len mỏng vàng nhạt, tóc xõa tự nhiên.

---

## Scene 01 – Ánh đèn đầu tiên

> **Cấu trúc graphic-novel:** 1 BG (full-bleed 16:9) + 1 MOTIF (họa tiết góc, nền trong suốt) + 4 PANEL (khung vuông 1:1 đặt ở giữa nền trung tính phẳng). Scene Anchor giữ thế giới + outfit + ánh sáng đồng nhất giữa các panel.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 01: Ánh đèn đầu tiên]

World: phòng ngủ miền quê Việt Nam đêm yên tĩnh, có khung cửa sổ gỗ tróc sơn nhìn ra đồng lúa và bóng cây dừa; đường chân trời xa có vài chấm sáng nhỏ của thành phố.

Nhân vật M (chỉ xuất hiện trong PANEL, KHÔNG có trong BG/MOTIF): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1 — mặt trái xoan, mắt một mí hạnh nhân, tóc đen dài chấm vai. Outfit "quê": áo sơ mi trắng cũ + quần vải xám. Biểu cảm trầm tĩnh, nội tâm, hy vọng pha lẫn bất an.

Đạo cụ cố định trong scene: bàn học gỗ nhỏ kê SÁT DƯỚI cửa sổ; trên bàn có vở mở (chữ tay tiếng Việt như nét trừu tượng không đọc được), cốc sứ, đèn giấy phát ánh ấm dịu; ghế gỗ thấp đặt nghiêng BÊN CẠNH bàn; balo canvas đen đã đóng gói sẵn dựa vào chân ghế; vách ván gỗ; ảnh gia đình bạc màu treo trên tường bên trái.

Ánh sáng nhất quán mọi panel: ánh trăng xanh lạnh từ camera TRÁI (qua cửa sổ); ánh đèn giấy ấm amber từ camera PHẢI.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật, KHÔNG có nội thất hay cửa sổ — chỉ atmosphere làm sân khấu.
- MOTIF = khung ngang 16:9, họa tiết watercolor chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG (sẽ đặt panel lên).
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng để dễ tách.
```

### 01·BG — Atmosphere background (không nhân vật, không nội thất)

```
Hãy vẽ một cảnh đêm tại miền quê Việt Nam yên tĩnh, nhìn từ ngoài đồng: bầu trời navy sâu lấp ló vài sao mờ chiếm 2/3 trên khung; phía dưới là đồng lúa, bóng cây dừa, vài mái ngói thấp ở xa. Đường chân trời ở 1/3 dưới khung có vài chấm sáng nhỏ — ánh đèn thành phố. Sương lạnh trôi nhẹ, ánh trăng xanh tím dịu phủ toàn cảnh.

KHÔNG có cửa sổ, KHÔNG có nội thất, KHÔNG có nhân vật — chỉ là cảnh không khí "sân khấu" làm nền cho các panel sẽ đặt lên trên. Vùng giữa khung để khá trống và mờ (sẽ bị panel che).

Bố cục: wide cinematic shot, ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber rất nhẹ ở chân trời, low saturation.

Trong ảnh không có chữ, không logo, không watermark, không có người, không có cửa sổ hay đồ vật trong phòng. Tránh phong cách anime chibi và 3D nhựa.
```

### 01·MOTIF — Decorative corner motif (họa tiết viền trang trí)

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — nét watercolor lỏng vẽ hoa cau và lá tre Việt Nam, kiểu ink-wash trên giấy: vài chùm hoa cau trắng ngà nhỏ, vài lá tre mảnh xanh xám nhạt, vài giọt mực loang ngẫu nhiên kiểu thư pháp.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-trái và góc dưới-phải), mỗi cụm họa tiết chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem) để khi đặt lên background và các panel sẽ không che mất. Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, brush stroke thư pháp Á Đông, low saturation, painterly. Tông cool gray-green với chút trắng kem ngà. Không màu rực.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật, không có nội thất. Tránh phong cách anime chibi và 3D nhựa.
```

### 01·P1 — Panel 1: M bên cửa sổ (medium shot)

> Upload **reference sheet 6.1** + **Scene Anchor** vào turn chat này trước khi paste prompt.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M — nữ sinh viên Việt Nam 19 tuổi theo ảnh tham chiếu — ngồi nghiêng trên ghế gỗ thấp cạnh cửa sổ gỗ tróc sơn, gối hơi co lên, cằm tựa lên tay, mắt nhìn ra ngoài cửa sổ với ánh mắt hy vọng pha lẫn bất an. Mặc áo sơ mi trắng cũ + quần vải xám. Phía sau M qua cửa sổ thấy bầu trời đêm và vài chấm sáng xa của thành phố.

Góc máy: medium shot, ngang tầm vai M.

Ánh sáng: ánh trăng xanh lạnh từ camera TRÁI chiếu lên mặt M qua cửa sổ; ánh đèn giấy ấm amber rim light từ camera PHẢI.

NGOÀI khung vuông: nền trắng kem trung tính phẳng để dễ tách panel khi compose. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, semi-realistic, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M trong khung. Khuôn mặt cân đối, hai mắt đối xứng, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 01·P2 — Panel 2: Close-up ánh mắt M

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Extreme close-up gương mặt M từ sống mũi đến trán, đặc tả đôi mắt một mí hạnh nhân theo ảnh tham chiếu. Trong tròng mắt M phản chiếu mờ ánh trăng và vài chấm sáng nhỏ của thành phố ở chân trời xa. Một sợi tóc đen rơi ngang trán. Biểu cảm: tĩnh lặng, hy vọng pha lẫn bất an, hơi ướt mí.

Ánh sáng: ánh trăng xanh lạnh nhẹ trên gò má TRÁI; nửa mặt PHẢI tối hơn với rim light amber nhạt từ đèn giấy.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ phần mặt M. Khuôn mặt cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 01·P3 — Panel 3: Still life — chuẩn bị lên đường (không nhân vật)

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Still life góc bàn học của M — bàn gỗ nhỏ kê sát dưới khung cửa sổ; trên bàn có vở mở với nét chữ tay tiếng Việt như nét trừu tượng không đọc được, cốc sứ trắng có nước, đèn giấy phát ánh ấm dịu; ghế gỗ thấp đặt nghiêng bên cạnh bàn; balo canvas đen đã đóng gói sẵn dựa vào chân ghế, một góc chiếc áo trắng nhô ra khỏi miệng balo. Không có người.

Góc máy: 3/4 từ trên xuống, gần.

Ánh sáng: ánh trăng xanh lạnh qua cửa sổ từ phía TRÁI + ánh đèn giấy ấm amber từ phía PHẢI, hai nguồn gặp nhau trên mặt bàn.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.

Trong ảnh không có chữ đọc được, không logo, không watermark, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 01·P4 — Panel 4: Wide — M nhỏ bé bên cửa sổ

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide shot — M theo ảnh tham chiếu NHỎ BÉ ngồi cạnh khung cửa sổ gỗ lớn ở 1/3 dưới khung. Phía trên và phía sau M là bầu trời đêm rộng, đường chân trời xa hiện vài chấm sáng nhỏ của thành phố. Vách phòng tối, chỉ thấy bóng khung cửa sổ và bóng đèn giấy ấm phía bên phải. Mặc áo sơ mi trắng cũ + quần vải xám.

Góc máy: wide, từ phía trong phòng nhìn ra, lùi xa M để nhân vật trở nên nhỏ.

Ánh sáng: ánh trăng xanh chiếm chủ đạo từ TRÁI; đèn giấy chỉ là điểm sáng amber nhỏ phía PHẢI.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M nhỏ trong khung. Khuôn mặt cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 02 – Thành phố và những tiêu chuẩn mới

> **Cấu trúc graphic-novel:** 1 BG (atmosphere phố) + 1 MOTIF (neon scribble góc) + 4 PANEL vuông 1:1.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 02: Thành phố và những tiêu chuẩn mới]

World: vỉa hè một con phố hiện đại ở thành phố Việt Nam, đầu tối, vừa mưa nhẹ xong nên mặt nhựa loang loáng nước. Cao ốc hai bên đường với bảng hiệu phát sáng (chữ chỉ là nét trừu tượng không đọc được), vệt sáng đèn xe máy kéo dài, biển neon xanh tím và hồng. Đám đông sinh viên ẩn danh đi ngang qua.

Nhân vật M (chỉ xuất hiện trong PANEL, KHÔNG có trong BG/MOTIF): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1. Outfit "đi học": sweater oversized kem be + jeans chàm đậm + giày canvas trắng + balo canvas đen nhỏ. Biểu cảm nhỏ bé hy vọng pha lẫn bị áp đảo, vai hơi rụt.

Đạo cụ cố định trong scene: floating UI cards quanh M (avatar tròn, icon trái tim, bong bóng comment, ribbon huy hiệu, đường biểu đồ chấm — KHÔNG chứa chữ thật); silhouette sinh viên blur đi ngang (chỉ thấy lưng và profile).

Ánh sáng nhất quán mọi panel: rim light xanh tím lạnh từ neon thành phố phía SAU lưng M; front fill mềm từ phía trước; mặt đường ướt phản chiếu ánh neon.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray với electric blue và warm amber accents, low saturation.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật chính, chỉ atmosphere phố.
- MOTIF = khung ngang 16:9, họa tiết neon scribble chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 02·BG — Atmosphere background (không nhân vật chính)

```
Hãy vẽ một con phố hiện đại ở thành phố Việt Nam vào đầu buổi tối: cao ốc với bảng hiệu phát sáng nhưng các chữ chỉ là nét trừu tượng không đọc được, dòng đèn xe máy kéo thành vệt sáng kéo dài, biển neon xanh tím và hồng, mặt đường nhựa loang loáng nước mưa phản chiếu ánh neon, bóng đám đông mờ ở xa. KHÔNG có nhân vật chính, KHÔNG có nhân vật cụ thể ở foreground.

Bố cục: wide cinematic shot, đường chân trời ở khoảng giữa khung, vùng giữa khung (sẽ bị panel che) khá trống và blur. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray với electric blue và warm amber accents, low saturation.

Trong ảnh không có chữ đọc được, không tên thương hiệu cụ thể, không logo, không watermark, không có nhân vật chính. Tránh phong cách anime chibi và 3D nhựa.
```

### 02·MOTIF — Neon-scribble corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — nét scribble neon kiểu watercolor: vài vệt sáng nguệch ngoạc giống vệt đèn xe máy chuyển động, vài đốm bokeh tròn nhỏ kiểu lens flare, vài chấm electric blue + magenta + warm amber loang nhẹ.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-phải và góc dưới-trái), mỗi cụm chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, painterly. Tông electric blue + magenta + warm amber, low–mid saturation. Không màu rực gắt.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật, không có nội thất.
```

### 02·P1 — Panel 1: M đứng vỉa hè ngước nhìn biển quảng cáo

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M — nữ sinh viên Việt Nam 19 tuổi theo ảnh tham chiếu — đứng yên một mình trên vỉa hè ướt mưa, vai hơi rụt, ngẩng ĐẦU LÊN nhìn các biển quảng cáo phát sáng phía trên cao ngoài khung, biểu cảm nhỏ bé hy vọng pha lẫn bị áp đảo. Mặc sweater oversized kem be + jeans chàm đậm + giày canvas trắng, balo canvas đen nhỏ. Cao ốc và neon mờ ở background.

Góc máy: medium-wide shot, ngang tầm ngực M, hơi low angle để thấy biển quảng cáo phía trên.

Ánh sáng: rim light xanh tím lạnh từ neon phía SAU lưng M; front fill ấm mềm.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray với electric blue và warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M trong khung. Khuôn mặt cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 02·P2 — Panel 2: Close-up ánh mắt M phản chiếu neon

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up gương mặt M từ vai trở lên theo ảnh tham chiếu. Trong tròng mắt M phản chiếu mờ các vệt neon xanh tím và hồng, vài biển quảng cáo mờ. Một sợi tóc đen rơi xuống má. Biểu cảm: hơi ngơ ngác, choáng ngợp, môi mím nhẹ.

Mắt M nhìn lệch lên phía trên-phải, KHÔNG nhìn vào camera. Ánh sáng: rim light electric blue + magenta từ phía sau và bên trên, mặt M sáng dịu ở phía trước.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray với electric blue và magenta accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ khuôn mặt M. Khuôn mặt cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 02·P3 — Panel 3: Floating UI cards bao quanh M

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu đứng ở chính giữa khung panel, half-body view, một tay cầm điện thoại. Quanh M là 6–8 floating UI cards lơ lửng trong không trung: avatar tròn, icon trái tim, hình bong bóng comment, ribbon huy hiệu, đường biểu đồ chấm. Các card có chất liệu frosted glass, glow nhẹ, nghiêng ngẫu nhiên. KHÔNG card nào có chữ thật — chỉ chấm hoặc nét lượn sóng.

Ánh sáng: glow nhẹ từ các card chiếu lên mặt M; rim light neon từ phía sau.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray với warm amber và pink accents, low saturation.

Trong ảnh không có chữ đọc được, không typography thật, không logo, chỉ một nhân vật M. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 02·P4 — Panel 4: Đám đông blur đi ngang, M đứng yên giữa

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide-medium shot — M theo ảnh tham chiếu đứng yên CHÍNH GIỮA khung panel, SẮC NÉT, là điểm dừng duy nhất trong khung. Xung quanh M là 4–6 silhouette sinh viên Việt Nam đang đi ngang qua (chỉ thấy lưng và profile blur, đeo balo và cầm điện thoại) — họ được vẽ với motion blur nhẹ. Mặt đường ướt phản chiếu neon mờ.

Góc máy: ngang tầm vai M, lùi xa để thấy không gian hai bên.

Ánh sáng: rim light xanh tím lạnh từ neon phía SAU lưng M; front fill mềm.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, motion blur cho silhouette, subtle film grain. Palette: midnight blue, deep violet, cool gray với electric blue accents, low saturation.

Trong ảnh không có chữ/logo/watermark, các silhouette không có khuôn mặt nhận diện, chỉ M là nét sắc. Khuôn mặt M cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 03 – Phiên bản online ra đời (split-screen)

> **Cấu trúc graphic-novel:** 1 BG (split dọc online | real) + 1 MOTIF split + 4 PANEL đan xen ONLINE / REAL để so sánh trực diện.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 03: Phiên bản online ra đời]

World: 2 không gian song song của cùng một con người M.
- ONLINE: studio chụp hình ảo — gradient hồng pastel + magenta ấm, bokeh ring-light, sparkle nhỏ, ánh sáng beauty ấm.
- ĐỜI THẬT: phòng trọ nhỏ tối ở Việt Nam — giường nhàu, đống quần áo trên ghế, cốc mì ăn liền dở, dây sạc trên sàn; nguồn sáng duy nhất là ánh xanh lạnh từ màn hình điện thoại.

Nhân vật M (cùng một khuôn mặt theo reference sheet 6.1, KHÁC outfit/dáng/ánh sáng giữa 2 phía):
- M-ONLINE: sweater hồng pastel, makeup natural-glam dịu, tóc chải gọn, cười ấm, dáng tự tin.
- M-REAL: hoodie xám oversized, tóc búi lỏng, không trang điểm, ánh mắt mệt trống rỗng.

Ánh sáng nhất quán theo từng panel:
- Panel ONLINE → beauty light ấm từ phía trước + halo glow phía sau tóc; palette pastel pink, cream, soft gold.
- Panel REAL → ánh xanh lạnh từ màn hình điện thoại hắt từ dưới lên mặt M, bóng đổ nặng; palette deep teal, cold blue, charcoal gray.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, chia đôi DỌC ở giữa: nửa trái pastel pink studio, nửa phải deep teal phòng trọ, đường nối ở giữa mềm như watercolor wash chảy vào nhau.
- MOTIF = khung ngang 16:9, góc trên-trái có sparkle hồng + bokeh ring-light, góc dưới-phải có vệt blue-light + chuông notification mờ, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 03·BG — Atmosphere background split dọc (không nhân vật)

```
  Hãy vẽ một background chia DỌC ở chính giữa khung thành 2 nửa, đường nối ở giữa mềm như watercolor wash chảy vào nhau (KHÔNG phải đường thẳng cứng).

  NỬA TRÁI: studio chụp hình ảo — gradient hồng pastel pha magenta ấm, bokeh ring-light beauty mềm, hạt sparkle nhỏ trôi nhẹ. Sạch và được curate.

  NỬA PHẢI: phòng trọ nhỏ tối ở Việt Nam vào ban đêm — bóng mờ giường bừa, đống quần áo trên ghế, cốc mì ăn liền dở, dây sạc nằm trên sàn. Nguồn sáng duy nhất là ánh xanh lạnh từ ngoài khung hắt lên tường. Lặng và cô đơn.

  KHÔNG có nhân vật ở bất kỳ nửa nào. Vùng giữa mỗi nửa khung để khá trống (sẽ bị panel che). Ảnh ngang 16:9.

  Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette nửa trái: pastel pink, magenta, warm cream. Palette nửa phải: deep teal, cold blue, charcoal gray.

  Trong ảnh không có chữ/logo/watermark, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 03·MOTIF — Decorative split motif

```
Hãy vẽ một họa tiết trang trí ở 2 GÓC đối diện của khung.

GÓC TRÊN-TRÁI: nét watercolor sparkle hồng pastel + vài đốm bokeh ring-light + vài chấm soft gold.

GÓC DƯỚI-PHẢI: vệt watercolor blue-light xanh lạnh + đường viền chuông notification cách điệu mờ + vài chấm cyan.

Mỗi cụm chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, painterly. Tông pastel pink ở góc trái, cool cyan-teal ở góc phải, low saturation. Không màu rực gắt.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật.
```

### 03·P1 — Panel 1 (ONLINE): M-online cười rạng rỡ

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — phiên bản "online persona": sweater hồng pastel, makeup natural-glam dịu, tóc chải gọn. Close-up half-body portrait, tay đặt gần cằm, đầu nghiêng nhẹ, cười rạng rỡ ấm dịu, mắt tự tin. Như một post Instagram được curate kỹ.

Ánh sáng: beauty light ấm từ phía trước + halo glow phía sau tóc; vài hạt sparkle bay nhẹ; bokeh ring-light hồng mờ ở background.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: pastel pink, warm cream, soft gold accents.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M. Khuôn mặt cân đối, hai mắt đối xứng, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 03·P2 — Panel 2 (REAL): M-thật một mình trong phòng trọ tối

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — phiên bản đời thật: hoodie xám oversized, tóc búi lỏng, không trang điểm. Ngồi bệt trên sàn dựa lưng vào giường, gối co lên, một tay cầm điện thoại, mắt mệt trống rỗng, miệng hơi hé. Half-body close-up.

Ánh sáng: ánh xanh lạnh từ màn hình điện thoại hắt TỪ DƯỚI LÊN mặt M; bóng đổ nặng phần còn lại. Phía sau M lờ mờ thấy chăn nhàu.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, bóng đổ nặng, subtle film grain. Palette: deep teal, cold blue, charcoal gray, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M. Khuôn mặt cân đối, đủ ngón tay, không có nụ cười. Tránh phong cách anime chibi và 3D nhựa.
```

### 03·P3 — Panel 3 (ONLINE): M-online tạo dáng "ngày tích cực"

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — phiên bản online: sweater hồng pastel, makeup natural-glam. Medium shot half-body, tay cầm cốc cà phê take-away đẹp, đứng trước background bokeh pastel mơ hồ (gợi quán cà phê hoặc sảnh hiện đại). Cười dịu, ánh mắt tươi sáng, dáng tự tin nhẹ nhàng. Vài icon trái tim và sparkle lơ lửng quanh M.

Ánh sáng: beauty light ấm dịu từ phía trước, halo glow phía sau tóc.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: pastel pink, warm cream, soft gold accents.

Trong ảnh không có chữ trên cốc, không logo thương hiệu, không watermark, chỉ một nhân vật M. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 03·P4 — Panel 4 (REAL): M-thật nằm im, điện thoại sáng cạnh mặt

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — phiên bản đời thật: hoodie xám, tóc búi lỏng. Nằm nghiêng trên giường nhàu, một tay đỡ má, mắt mở trống nhìn vào màn hình điện thoại đặt cạnh gối; màn hình điện thoại phát sáng xanh hắt lên một nửa mặt M. Trên sàn thấy mờ cốc mì ăn liền dở và dây sạc lung tung. Wide-medium shot.

Ánh sáng: ánh xanh lạnh duy nhất từ màn hình điện thoại; phần còn lại tối, bóng đổ nặng.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, bóng đổ nặng, subtle film grain. Palette: deep teal, cold blue, charcoal gray, low saturation.

Trong ảnh không có chữ trên màn hình điện thoại, không logo, không watermark, chỉ một nhân vật M. Khuôn mặt cân đối, đủ ngón tay, không có nụ cười. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 04 – "Ổn mà"

> **Cấu trúc graphic-novel:** 1 BG (canteen blur bokeh) + 1 MOTIF (chat bubble rỗng nứt ở góc) + 4 PANEL vuông 1:1.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 04: "Ổn mà"]

World: góc canteen hoặc khu tự học ở trường đại học Việt Nam, blur thành heavy bokeh đến mức background gần như trừu tượng. Ánh đèn sodium ấm pha với đèn fluorescent trần lạnh.

Nhân vật M (chỉ xuất hiện trong PANEL): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1. Outfit "đi học": sweater oversized kem be + jeans chàm đậm + balo canvas đen nhỏ. Biểu cảm chính: nụ cười lịch sự MÍM MÔI không chạm tới mắt, mắt hơi nhìn xuống, vai hơi gồng. Thường cầm điện thoại hoặc cốc cà phê.

Đạo cụ cố định trong scene: 3–4 silhouette sinh viên Việt Nam blur mạnh xung quanh M (chỉ thấy lưng và vai, không có khuôn mặt rõ); cụm chat bubble trong suốt RỖNG (không chữ thật, chỉ chấm hoặc nét lượn sóng) lơ lửng quanh M, một vài bubble nứt nhẹ hoặc tan ở cạnh.

Ánh sáng nhất quán mọi panel: front light mềm chiếu thẳng vào M; ánh đèn sodium ấm pha với fluorescent lạnh ở background; mặt M hơi desaturated so với môi trường.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: muted blue-gray với vài đốm warm amber, low saturation.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật chính nổi rõ, chỉ canteen blur bokeh.
- MOTIF = khung ngang 16:9, họa tiết chat bubble rỗng nứt chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 04·BG — Atmosphere background (không nhân vật)

```
Hãy vẽ nội thất một góc canteen hoặc góc tự học của trường đại học Việt Nam, làm mờ thành heavy bokeh: ánh đèn sodium ấm pha với đèn fluorescent trần lạnh, bóng sinh viên rất mờ ở xa, shallow depth of field đến mức background gần như trừu tượng. KHÔNG có nhân vật chính, không có biển hiệu đọc được.

Bố cục: wide cinematic shot, vùng giữa khung (sẽ bị panel che) khá trống. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: muted blue-gray với vài đốm amber ấm, low saturation.

Trong ảnh không có chữ đọc được, không logo/watermark, không có nhân vật chính nổi rõ. Tránh phong cách anime chibi và 3D nhựa.
```

### 04·MOTIF — Empty chat-bubble corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — cụm chat bubble rỗng trong suốt watercolor, chất liệu frosted glass, một vài bubble NỨT NHẸ, một vài bubble đang TAN ở cạnh thành sương mờ.

Quan trọng: trong bubble KHÔNG có chữ — chỉ vài chấm trừu tượng hoặc nét lượn sóng mờ.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-trái và góc dưới-phải), mỗi cụm 3–4 bubble chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, painterly. Tông cool gray với accent warm amber rất nhẹ, low saturation.

Trong ảnh không có chữ thật, không typography, không logo, không có nhân vật.
```

### 04·P1 — Panel 1: M cười lịch sự với một bạn blur

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — sweater kem be + jeans chàm — đứng đối diện một silhouette bạn sinh viên blur ở 1/3 phải khung (chỉ thấy vai và một phần profile, không có khuôn mặt rõ). M nở nụ cười LỊCH SỰ mím môi không chạm tới mắt, đầu hơi nghiêng, một tay cầm cốc cà phê take-away. Medium shot, ngang tầm ngực.

Ánh sáng: front light mềm vào M; bokeh canteen mờ ở phía sau.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: muted blue-gray với vài đốm amber, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ M sắc nét, silhouette bạn không có khuôn mặt nhận diện. Khuôn mặt M cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 04·P2 — Panel 2: Close-up nụ cười mím môi không chạm tới mắt

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up gương mặt M theo ảnh tham chiếu — chỉ từ cằm đến trán. Nụ cười LỊCH SỰ mím môi (cơ miệng kéo lên nhẹ nhưng KHÔNG hở răng), mắt KHÔNG cười cùng — ánh mắt hơi nhìn xuống và sang một bên, vẻ xa cách. Một sợi tóc rơi xuống má. Biểu cảm: lễ phép nhưng trống rỗng.

Ánh sáng: front light mềm, mặt M hơi desaturated, hơi xám.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: muted blue-gray với vài đốm amber rất nhẹ, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ khuôn mặt M. Khuôn mặt cân đối, hai mắt đối xứng, không có nụ cười rộng tươi rói. Tránh phong cách anime chibi và 3D nhựa.
```

### 04·P3 — Panel 3: M giữa cụm chat bubble rỗng

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu đứng CHÍNH GIỮA khung panel, half-body, tay cầm điện thoại, vai hơi gồng. Quanh M là 5–7 chat bubble RỖNG trong suốt lơ lửng các kích thước và góc nghiêng khác nhau — chất liệu frosted glass, glow dịu, vài bubble nứt nhẹ hoặc tan ở cạnh. Trong bubble KHÔNG có chữ thật, chỉ chấm hoặc nét lượn sóng mờ.

Ánh sáng: front light mềm, glow nhẹ từ các bubble.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: muted blue-gray với vài đốm warm amber, low saturation.

Trong ảnh không có chữ thật, không typography, không logo, chỉ M là nhân vật. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 04·P4 — Panel 4: M đứng giữa nhóm silhouette blur

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide-medium shot — M theo ảnh tham chiếu đứng CHÍNH GIỮA khung panel, SẮC NÉT, là điểm dừng duy nhất. Xung quanh M là 3–4 silhouette sinh viên Việt Nam blur mạnh đứng vây quanh (chỉ thấy lưng, vai, một phần profile, KHÔNG có khuôn mặt rõ). M giữ nụ cười mím môi lịch sự, ánh mắt vẫn hơi xa cách. Cảm giác cô đơn giữa đám đông.

Ánh sáng: front light mềm vào M; silhouette tối hơn xung quanh.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, gaussian blur cho silhouette, subtle film grain. Palette: muted blue-gray với vài đốm amber, low saturation.

Trong ảnh không có chữ/logo/watermark, silhouette không có khuôn mặt nhận diện, chỉ M nét sắc. Khuôn mặt M cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 05 – Mình là ai?

> **Cấu trúc graphic-novel:** 1 BG (phòng tối ánh xanh) + 1 MOTIF (RGB-split glitch ở góc) + 4 PANEL đối đầu M-real ⟷ M-online trong màn hình.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 05: Mình là ai?]

World: phòng ngủ tối gần như trống vào nửa đêm; nguồn sáng duy nhất là ánh xanh lạnh từ một màn hình điện thoại khổng lồ. Bóng mờ bàn, giường ở phía sau. Chromatic aberration nhẹ và glitch lines mảnh ở các cạnh khung.

Hai phiên bản của M (cùng khuôn mặt theo reference sheet 6.1):
- M-REAL: hoodie xám oversized, tóc búi lỏng, không trang điểm. Dáng nhỏ bé, bất an, vai rụt, ánh mắt mệt mỏi mất phương hướng.
- M-ONLINE (chỉ xuất hiện BÊN TRONG màn hình điện thoại trong panel): sweater hồng pastel, makeup natural-glam, tóc chải gọn, cười rạng rỡ tự tin. Saturation cao hơn.

Đạo cụ cố định: smartphone DỌC khổng lồ phát sáng — chiếm vai trò "tấm gương phản chiếu", màn hình hiển thị M-online; halo glow dịu quanh máy; bezel rõ ràng.

Ánh sáng nhất quán: nguồn sáng DUY NHẤT là ánh xanh cyan lạnh mạnh từ màn hình điện thoại; bóng đổ sâu nặng phần còn lại; rim light xanh lên silhouette M-real. Phần BÊN TRONG màn hình thì beauty light ấm cho M-online.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette tổng: cold cyan, deep navy, charcoal gray + warmer pastel pink CHỈ cho phần trong màn hình.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật, không có điện thoại, chỉ atmosphere phòng tối.
- MOTIF = khung ngang 16:9, họa tiết RGB-split + scanline chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 05·BG — Atmosphere background (phòng tối, không nhân vật)

```
Hãy vẽ một phòng ngủ tối gần như trống vào nửa đêm. Tường tối, bóng mờ của bàn và giường ở phía sau, bóng đổ sâu nặng, chromatic aberration nhẹ ở các cạnh khung. Nguồn sáng duy nhất là ánh xanh lạnh mạnh từ ngoài khung (một màn hình điện thoại). KHÔNG có nhân vật, KHÔNG có điện thoại trong khung.

Bố cục: ảnh ngang 16:9, high contrast, vùng giữa khung (sẽ bị panel che) khá trống.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: cold cyan, deep navy, charcoal gray, low saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có ánh sáng ấm. Tránh phong cách anime chibi và 3D nhựa.
```

### 05·MOTIF — RGB-split glitch corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — nét watercolor + glitch: vài đường RGB split mảnh (đỏ-xanh lệch), vài scanline ngang mờ, vài cluster pixel artifact nhỏ, chấm cyan và magenta loang nhẹ kiểu ink-wash.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-phải và góc dưới-trái), mỗi cụm chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash hòa với glitch art, ink-wash texture, painterly. Tông cold cyan + magenta, opacity thấp, low saturation. Không glitch quá nặng.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật.
```

### 05·P1 — Panel 1: M-real đứng quay lưng nhìn lên điện thoại khổng lồ

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M-REAL theo ảnh tham chiếu — hoodie xám oversized, tóc búi lỏng — đứng ở vùng giữa-trái khung panel, quay LƯNG MỘT PHẦN về phía camera (góc 3/4 từ sau), ngẩng lên nhìn một chiếc smartphone DỌC khổng lồ phát sáng chiếm trọn nửa phải khung panel. Màn hình điện thoại tỏa ánh cyan lạnh, có halo glow quanh. M nhỏ bé, vai rụt. Trong màn hình điện thoại hiển thị MỜ chân dung phiên bản online persona của M (sweater hồng, đang cười) — render nhẹ hơn, ít chi tiết hơn M-real.

Ánh sáng: ánh cyan lạnh từ màn hình hắt lên silhouette M-real từ phía trước-phải; bóng đổ sâu phần lưng.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: cold cyan, deep navy, charcoal gray; pastel pink chỉ trong vùng màn hình.

Trong ảnh không có chữ/logo/watermark, chỉ 1 M-real ở phòng + 1 M-online mờ trong màn hình. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 05·P2 — Panel 2: Close-up M-online cười rạng rỡ trong màn hình

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up khuôn mặt M-ONLINE theo ảnh tham chiếu — sweater hồng pastel, makeup natural-glam, tóc chải gọn, cười rạng rỡ với ánh mắt tự tin. Khung panel toàn bộ được render như đang nhìn QUA MÀN HÌNH ĐIỆN THOẠI: có bezel mảnh ở 4 cạnh trong khung panel, một vài đường scanline rất mờ chạy ngang, chromatic aberration rất nhẹ ở cạnh.

Ánh sáng: beauty light ấm từ phía trước, halo glow phía sau tóc.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor pha với screen artifact rất nhẹ, subtle film grain. Palette: pastel pink, warm cream, soft gold accents; viền có cool cyan.

Trong ảnh không có chữ/logo/watermark, chỉ một khuôn mặt M-online. Khuôn mặt cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 05·P3 — Panel 3: Close-up M-real ngẩng nhìn, mắt ướt

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up gương mặt M-REAL theo ảnh tham chiếu — hoodie xám, tóc búi lỏng, không trang điểm. Cằm hơi ngẩng lên nhìn vào nguồn sáng ngoài khung (màn hình điện thoại); một sợi tóc rơi xuống trán. Mắt hơi ƯỚT, biểu cảm hoang mang trống rỗng pha lẫn đau, miệng hơi hé. Tròng mắt phản chiếu mờ một khuôn mặt nhỏ — chính là M-online đang cười.

Ánh sáng: ánh CYAN LẠNH mạnh hắt từ DƯỚI-PHẢI lên mặt M; nửa mặt trái tối hơn, bóng đổ sâu.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: cold cyan, deep navy, charcoal gray, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ mặt M-real (phản chiếu trong mắt rất nhỏ). Khuôn mặt cân đối, hai mắt đối xứng, không có nụ cười. Tránh phong cách anime chibi và 3D nhựa.
```

### 05·P4 — Panel 4: Wide — M nhỏ bé ngồi bệt trước điện thoại khổng lồ

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide shot — M-REAL theo ảnh tham chiếu NGỒI BỆT trên sàn ở 1/3 dưới-trái khung panel, đầu gối co lên, hai tay buông xuôi, ngẩng đầu nhìn lên smartphone DỌC khổng lồ phát sáng cyan chiếm trọn nửa phải khung panel. M rất NHỎ BÉ so với điện thoại. Trong màn hình hiển thị mờ một chân dung của M-online đang cười. Phần còn lại của phòng tối, bóng đổ sâu.

Ánh sáng: ánh cyan lạnh từ điện thoại là nguồn sáng duy nhất; phần còn lại đen.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: cold cyan, deep navy, charcoal gray với pastel pink mờ trong màn hình.

Trong ảnh không có chữ/logo/watermark, chỉ 1 M-real + 1 M-online mờ trong màn hình. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 06 – Relationship map

> **Cấu trúc graphic-novel:** 1 BG (vũ trụ tối) + 1 MOTIF (sợi năng lượng cong ở góc) + 4 PANEL — gồm 1 panel intro, 2 panel zoom vào icon-relationship, 1 panel overview vòng tròn.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 06: Relationship map]

World: không gian trừu tượng kiểu vũ trụ tối — gradient navy sâu chuyển sang đen, các chấm nhỏ rải rác như chòm sao, glow nebula tím dịu. Có khoảng negative space sạch ở chính giữa khung.

Nhân vật M (chỉ xuất hiện trong PANEL): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1. Outfit MẶC ĐỊNH: sweater oversized kem be + jeans chàm đậm. Biểu cảm trung tính trầm tư, nhìn thẳng vào camera.

Đạo cụ cố định trong scene: 7 ICON glow line-art (Family, School, Friends, Social media, City, Expectations, Inner emotion) và các SỢI NĂNG LƯỢNG cong mảnh phát sáng nối icon vào tay/tim M — một số sợi căng thẳng, một số rối hoặc kéo lệch các góc.

Ánh sáng nhất quán mọi panel: rim light AMBER ẤM dịu từ phía TRÊN ĐỈNH ĐẦU M; phần còn lại của cơ thể tông LẠNH; glow cyan/tím phát ra từ icon và các sợi năng lượng.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray với warm amber accents (rim light trên đầu) và glow cyan/tím (cho icon + sợi).

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật, KHÔNG có icon, chỉ vũ trụ tối + chòm sao + nebula.
- MOTIF = khung ngang 16:9, sợi năng lượng cong glow chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 06·BG — Atmosphere background (vũ trụ tối, không nhân vật)

```
Hãy vẽ một background trừu tượng kiểu vũ trụ tối: gradient navy sâu chuyển dần sang đen, các chấm nhỏ rải rác như chòm sao, glow nebula màu tím dịu, có khoảng negative space sạch ở giữa khung. KHÔNG có nhân vật, KHÔNG có icon, không có sợi năng lượng.

Bố cục: ảnh ngang 16:9, vùng giữa khung khá trống (sẽ bị panel che).

Style: cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray với warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có ánh nắng ngày, không có foreground rối. Tránh phong cách anime chibi và 3D nhựa.
```

### 06·MOTIF — Energy-strand corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — các sợi năng lượng cong mảnh phát sáng watercolor, kết hợp với vài đốm bokeh nhỏ glow cyan-tím và vài chấm star sparkle.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-trái và góc dưới-phải), mỗi cụm 3–5 sợi cong chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash + glow line-art, ink-wash texture, painterly. Tông midnight blue + deep violet + glow cyan-tím dịu, accent amber rất nhẹ, low saturation.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật, không có hình khối đặc.
```

### 06·P1 — Panel 1: M đứng giữa, hai tay xòe ra (intro)

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — sweater kem be + jeans chàm — đứng CHÍNH GIỮA khung panel, FULL BODY, hai tay HƠI XÒE SANG HAI BÊN như đang bị các sợi dây vô hình kéo, nhìn thẳng vào camera với biểu cảm trung tính trầm tư. Góc máy hơi LOW ANGLE (từ dưới lên).

Phía sau M lờ mờ là nebula tím và chòm sao (background vũ trụ). KHÔNG vẽ icon hoặc sợi cụ thể trong panel này — chỉ M.

Ánh sáng: rim light AMBER ẤM dịu từ phía trên đỉnh đầu M; phần thân tông lạnh navy-tím.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray với warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M. Khuôn mặt cân đối, hai mắt đối xứng, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 06·P2 — Panel 2: Cụm 4 icon glow line-art (Family / School / Social media / Expectations)

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

4 ICON minimalist line-art phát sáng, halo glow dịu cyan-tím, stroke đều, đặt theo lưới 2×2 trong khung panel trên nền vũ trụ tối:
1) FAMILY — hai bóng người lớn cùng một đứa trẻ nhỏ (góc trên-trái).
2) SCHOOL — một chiếc mũ tốt nghiệp (góc trên-phải).
3) SOCIAL MEDIA — trái tim cách điệu trong khung vuông bo góc (góc dưới-trái).
4) EXPECTATIONS — mũi tên hướng lên với vương miện nhỏ phía trên (góc dưới-phải).

Mỗi icon có vài sợi năng lượng glow nhỏ tỏa ra từ icon ra cạnh khung panel (gợi ý chúng đang nối tới một điểm M ngoài khung).

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly + glow line-art, subtle film grain. Palette: midnight blue, deep violet, glow cyan-tím, accent amber rất nhẹ, low saturation.

Trong ảnh không có chữ/logo/thương hiệu, không có nhân vật, không có chi tiết photorealistic. Tránh phong cách cartoon mascot và 3D nhựa.
```

### 06·P3 — Panel 3: Close-up tay/ngực M bị một sợi năng lượng kéo

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up tay và phần ngực-vai của M theo ảnh tham chiếu — sweater kem be. Một bàn tay M giơ lên, ngón tay hơi co như đang bị KÉO; từ giữa ngực M có một sợi năng lượng cong glow CYAN-TÍM mảnh chạy ra phía rìa khung panel — sợi căng, có bloom dịu và vài đốm sáng nhỏ dọc theo sợi. Vài sợi khác mờ hơn từ vai và bụng kéo các hướng khác nhau.

Ánh sáng: rim light amber từ phía trên; tông tổng lạnh; glow cyan-tím từ sợi năng lượng phát sáng lên da và sweater.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor + glow line-art, subtle film grain. Palette: midnight blue, deep violet, cool gray, glow cyan-tím, accent amber, low saturation.

Trong ảnh không có chữ/logo/watermark, không thấy mặt M (chỉ thấy tay + thân). Đủ ngón tay, không méo. Tránh phong cách anime chibi và 3D nhựa.
```

### 06·P4 — Panel 4: Wide map view — M giữa, 7 icon xếp vòng quanh, sợi nối

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

WIDE map view — M theo ảnh tham chiếu đứng CHÍNH GIỮA khung panel, FULL BODY, hai tay hơi xòe sang hai bên, đầu hơi cúi nhẹ. Xung quanh M là 7 ICON glow line-art (Family, School, Friends, Social media, City, Expectations, Inner emotion) đặt theo VÒNG TRÒN đều quanh M; mỗi icon có halo glow cyan-tím dịu.

Các sợi năng lượng cong mảnh glow nối từ mỗi icon vào tay/ngực/đầu M — một số sợi căng thẳng và thẳng, một số rối hoặc kéo lệch các góc đối nghịch. Có bloom dịu và đốm sáng nhỏ dọc các sợi.

Ánh sáng: rim light AMBER ẤM trên đỉnh đầu M; thân tông lạnh; glow cyan-tím từ icon và sợi.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kết hợp glow line-art, brush stroke watercolor, subtle film grain. Palette: midnight blue, deep violet, cool gray với warm amber accents và glow cyan-tím, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M giữa các icon. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 07 – Hai phiên bản hòa lại

> **Cấu trúc graphic-novel:** 1 BG (phòng trọ bình minh) + 1 MOTIF (hạt bụi vàng trong tia nắng ở góc) + 4 PANEL — kể quá trình hai phiên bản M tan vào nhau.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 07: Hai phiên bản hòa lại]

World: VẪN căn phòng trọ nhỏ ở Việt Nam như Scene 03 và 05 (cùng layout: giường, bàn, cửa sổ — KHÔNG đổi vị trí), nhưng giờ là BÌNH MINH. Cửa sổ với tấm rèm mở hé, ánh nắng ấm xuyên qua, hạt bụi bay trong tia nắng. Tường bắt ánh vàng ấm pha với ánh xanh lạnh còn sót lại từ đêm.

Nhân vật M (MERGED — phiên bản hòa lại): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1. Outfit hybrid: sweater oversized kem be với makeup natural rất dịu, tóc xõa nhẹ. Nửa nụ cười THẬT, ánh mắt bình tĩnh và PRESENT.

Đạo cụ cố định trong scene: ghost layer của "online persona M" (sweater hồng pastel, opacity rất thấp, các cạnh đang TAN DẦN thành hạt sáng); floating UI cards từ Scene 02/04 giờ NHỎ HƠN, trôi RA XA, opacity ~40%, đang tan thành hạt sáng ấm.

Ánh sáng nhất quán mọi panel: ánh VÀNG ẤM bình minh từ cửa sổ (camera TRÁI) chiếu lên một nửa mặt M; ánh XANH LẠNH đêm sót lại chiếu nửa mặt kia (camera PHẢI); HAI NGUỒN gặp nhau DỊU DÀNG ở đường giữa mặt M.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: warm amber và honey gold pha với cool blue và cool gray, low–mid saturation.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật, KHÔNG có ghost — chỉ phòng trọ bình minh.
- MOTIF = khung ngang 16:9, hạt bụi vàng + cánh hoa nhỏ chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 07·BG — Atmosphere background (phòng trọ bình minh, không nhân vật)

```
Hãy vẽ vẫn chính căn phòng trọ nhỏ ở Việt Nam như Scene 03 và 05, nhưng lần này có ánh nắng SỚM ẤM xuyên qua tấm rèm mở hé, hạt bụi lơ lửng trong tia nắng. Tường bắt ánh vàng ấm pha với ánh xanh lạnh còn sót lại từ đêm. Giường được kéo phẳng hơn, đống quần áo trên ghế đã gấp gọn nhẹ. KHÔNG có nhân vật.

Bố cục: ảnh ngang 16:9, vùng giữa khung khá trống (sẽ bị panel che).

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette chuyển tiếp: xanh lạnh dần thành amber ấm và vàng mật ong, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có tối nặng, không có tương phản gắt. Tránh phong cách anime chibi và 3D nhựa.
```

### 07·MOTIF — Dust-mote + petal corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — nét watercolor mềm vẽ hạt bụi vàng ấm lơ lửng trong tia nắng + vài cánh hoa nhỏ rơi (cánh hoa nhỏ kiểu hoa hồng/hoa nhài) + vài đốm bokeh ấm.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-trái với tia nắng nghiêng xuống + hạt bụi vàng; góc dưới-phải với cánh hoa rơi + bokeh ấm), mỗi cụm chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, painterly. Tông warm amber + honey gold + cream nhẹ, low saturation. Không màu rực gắt.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật.
```

### 07·P1 — Panel 1: M (merged) đứng cạnh cửa sổ, nửa mặt ấm nửa mặt lạnh

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — sweater kem be, makeup natural dịu, tóc xõa nhẹ. Đứng cạnh cửa sổ với rèm mở hé phía sau-trái khung panel, half-body, góc 3/4 nhẹ. Một tay đặt nhẹ lên khung cửa. Nửa nụ cười THẬT, ánh mắt bình tĩnh và present.

Ánh sáng: ánh VÀNG ẤM bình minh từ cửa sổ (TRÁI khung) chiếu lên nửa mặt trái; ánh XANH LẠNH đêm sót chiếu nửa mặt phải; hai nguồn gặp nhau dịu dàng ở đường giữa mặt M. Vài hạt bụi vàng bay trong tia nắng phía sau.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette: warm amber và honey gold pha với cool blue và cool gray, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M (KHÔNG nhân đôi), không có biểu cảm cường điệu. Khuôn mặt cân đối, hai mắt đối xứng, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 07·P2 — Panel 2: Close-up ánh mắt M, online persona ghost mờ phía sau

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up gương mặt M-MERGED theo ảnh tham chiếu — chỉ từ cằm đến trán. Ánh mắt BÌNH TĨNH, hiện diện ở khoảnh khắc này, mí dưới hơi cong nhẹ (gợi vừa khóc nhẹ vừa được giải tỏa). Một sợi tóc rơi ngang má.

Phía sau M (lệch sang phải) là một GHOST mờ của online persona M (sweater hồng pastel, đường nét chỉ thấy lờ mờ, các cạnh đang TAN thành hạt sáng dịu, opacity rất thấp).

Ánh sáng: nửa mặt trái M ấm amber, nửa phải lạnh cool blue, hai nguồn gặp nhau ở giữa.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: warm amber + cool blue, accent pastel pink chỉ ở vùng ghost, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ M-merged sắc nét + ghost mờ. Khuôn mặt M-merged cân đối, hai mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 07·P3 — Panel 3: Tay M trên khung cửa sổ, hạt bụi vàng bay (không thấy mặt)

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up bàn tay M đặt nhẹ trên khung cửa sổ gỗ; thấy một phần cổ tay và tay áo sweater kem be. Phía sau bàn tay là tấm rèm mở hé, ánh nắng vàng ấm xuyên qua, HẠT BỤI VÀNG lơ lửng trong tia nắng. Một cánh hoa nhỏ vừa rơi xuống thanh cửa sổ. KHÔNG thấy mặt M.

Ánh sáng: ánh vàng ấm chiếu vào tay từ phía cửa sổ; phần còn lại của bàn tay có cool blue dịu rất nhẹ.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: warm amber + honey gold với cool gray nhẹ ở vùng bóng, low saturation.

Trong ảnh không có chữ/logo/watermark, không có khuôn mặt — chỉ tay. Bàn tay đủ ngón, không méo. Tránh phong cách anime chibi và 3D nhựa.
```

### 07·P4 — Panel 4: Wide — M cạnh cửa sổ, online persona đang tan, social cards trôi xa

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide-medium shot — M-MERGED theo ảnh tham chiếu (sweater kem be, tóc xõa) đứng cạnh cửa sổ ở 1/3 phải khung panel, half-body view 3/4 nhẹ. Phía sau lưng-cạnh M là một GHOST online persona M (sweater hồng) đang TAN DẦN thành hạt sáng dịu, các cạnh đang biến mất. Quanh khung panel ở phía xa là 4–5 floating UI card NHỎ (avatar tròn, trái tim, bong bóng comment) đang trôi RA RÌA KHUNG, các cạnh tan thành hạt sáng ấm, opacity ~40%.

Ánh sáng: ánh vàng ấm bình minh từ cửa sổ chiếm chủ đạo; cool blue chỉ còn rất nhẹ trên ghost và một góc tường.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: warm amber + honey gold với cool blue rất nhẹ và pastel pink mờ ở ghost, low–mid saturation.

Trong ảnh không có chữ thật trên card, không logo, không watermark; chỉ 1 M-merged sắc nét + 1 ghost mờ. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 08 – Kết / Tìm lại mình

> **Cấu trúc graphic-novel:** 1 BG (skyline bình minh) + 1 MOTIF (lá cây + bokeh ấm ở góc) + 4 PANEL — kết thúc bằng wide shot thanh thản.

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt: BG / MOTIF / P1–P4)

```
[SCENE ANCHOR — Scene 08: Kết / Tìm lại mình]

World: ban công nhỏ hoặc cửa sổ ký túc xá vào lúc BÌNH MINH, view nhìn ra skyline thành phố Việt Nam tĩnh lặng. Bầu trời hồng-vàng dịu, mây thấp bắt ánh ấm, các tòa nhà xa silhouette xanh lạnh, vài con chim sớm trên trời.

Nhân vật M (chỉ xuất hiện trong PANEL): nữ sinh viên Việt Nam 19 tuổi theo reference sheet 6.1. Outfit "KẾT": áo len mỏng VÀNG NHẠT mềm, tóc xõa tự nhiên, gió nhẹ thổi tóc bay nhẹ. Biểu cảm bình tĩnh, present, half-smile rất dịu — KHÔNG cười rộng, KHÔNG mệt buồn.

Đạo cụ cố định trong scene: thanh chắn ban công bằng kim loại đơn giản; trên thanh chắn có một chiếc smartphone ÚP MẶT, một cốc sứ trà ấm bốc khói mảnh, một chậu cây nhỏ xanh.

Ánh sáng nhất quán mọi panel: ánh BÌNH MINH ẤM chiếu từ phía bên ngoài (trước mặt M, từ phía skyline) lên mặt và tóc M; phần lưng M có cool blue dịu sót lại đêm.

Style nhất quán: cinematic digital illustration, semi-realistic, painterly brush strokes, ink-wash watercolor texture kiểu graphic novel, soft cinematic lighting, subtle film grain. Palette: pink, peach, gold dịu ấm với phần xa xanh lạnh, low–mid saturation.

Layout output theo loại ảnh:
- BG = khung ngang 16:9, KHÔNG có nhân vật, KHÔNG có thanh chắn — chỉ skyline bình minh.
- MOTIF = khung ngang 16:9, lá cây + bokeh ấm + tia bình minh chỉ phủ 2 góc đối diện, phần giữa khung HOÀN TOÀN TRỐNG.
- PANEL = khung VUÔNG 1:1 viền mảnh đen ở CHÍNH GIỮA ảnh, ngoài khung là nền trắng kem trung tính phẳng.
```

### 08·BG — Atmosphere background (skyline bình minh, không nhân vật)

```
Hãy vẽ view nhìn từ ban công nhỏ hoặc cửa sổ ký túc xá lúc bình minh, hướng ra skyline thành phố Việt Nam tĩnh lặng: bầu trời hồng-vàng dịu, mây thấp bắt ánh ấm, các tòa nhà xa silhouette xanh lạnh, vài con chim sớm trên trời. KHÔNG có nhân vật, KHÔNG có thanh chắn ban công, không có đồ vật.

Bố cục: wide cinematic shot, đường chân trời ở khoảng giữa khung, vùng giữa khung (sẽ bị panel che) khá trống. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette dịu ấm: pink, peach, gold với phần xa xanh lạnh, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có đêm tối gắt. Tránh phong cách anime chibi và 3D nhựa.
```

### 08·MOTIF — Sunrise leaf + bokeh corner motif

```
Hãy vẽ một họa tiết trang trí ở GÓC khung — nét watercolor mềm: vài chiếc lá cây xanh nhạt (kiểu lá bàng hoặc lá trầu non) + vài đốm bokeh ấm peach-gold + vài tia bình minh mảnh kiểu light streak.

Bố cục: họa tiết CHỈ phủ 2 góc đối diện của khung (góc trên-phải với tia bình minh nghiêng xuống + lá cây; góc dưới-trái với bokeh ấm + cánh hoa nhỏ), mỗi cụm chiếm khoảng 1/4 diện tích góc đó. Phần giữa khung và 2 góc còn lại HOÀN TOÀN TRỐNG (nền trắng kem). Ảnh ngang 16:9.

Style: loose watercolor wash, ink-wash texture, painterly. Tông warm peach + honey gold + cool green nhạt cho lá, low–mid saturation. Không màu rực gắt.

Trong ảnh không có chữ, không logo, không watermark, không có nhân vật.
```

### 08·P1 — Panel 1: M đứng ban công nhìn bình minh (half-body từ sau-hông)

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

M theo ảnh tham chiếu — áo len mỏng vàng nhạt, tóc xõa tự nhiên, gió nhẹ thổi vài sợi tóc bay. Đứng ở ban công, hai tay đặt nhẹ trên thanh chắn kim loại, nhìn ra phía bình minh ngoài khung. Half-body shot, view 3/4 nhẹ TỪ PHÍA SAU-BÊN HÔNG — thấy profile bình tĩnh của M, không thấy mặt trực diện. Phía xa qua thanh chắn lờ mờ silhouette skyline xanh lạnh.

Ánh sáng: ánh bình minh ấm peach-gold chiếu lên mặt và tóc M từ phía trước; lưng M có cool blue dịu.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration kiểu graphic novel, brush stroke watercolor, subtle film grain. Palette dịu ấm: pink, peach, gold với cool blue ở vùng bóng, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 08·P2 — Panel 2: Still life — điện thoại úp, cốc trà bốc khói, chậu cây nhỏ

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Still life trên thanh chắn ban công kim loại: một chiếc smartphone ÚP MẶT XUỐNG (không thấy màn hình), bên cạnh là một cốc sứ trắng đựng trà ấm bốc khói mảnh xoắn nhẹ lên, và một chậu cây nhỏ xanh tươi đặt phía sau. Phía xa qua thanh chắn lờ mờ silhouette skyline ấm-lạnh. KHÔNG có người.

Góc máy: close-up 3/4 từ trên hơi nghiêng xuống.

Ánh sáng: ánh bình minh ấm peach-gold chiếu từ phía xa lên các vật; vài hạt bụi sáng ấm trong tia nắng.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: warm amber + honey gold + cool green nhạt cho cây, low saturation.

Trong ảnh không có chữ/logo trên điện thoại, không có watermark, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 08·P3 — Panel 3: Close-up profile M, gió thổi tóc, mắt nhìn xa

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Close-up PROFILE side view khuôn mặt M theo ảnh tham chiếu — nhìn nghiêng từ một bên. Tóc xõa, vài sợi tóc bay nhẹ trong gió. Áo len vàng nhạt thấy phần cổ áo. Mắt M nhìn ra phía xa (ngoài khung panel), KHÔNG nhìn camera. Half-smile dịu rất nhẹ trên môi.

Ánh sáng: ánh bình minh ấm peach-gold chiếu mạnh từ phía trước (cùng hướng M nhìn) lên gương mặt và tóc; phần sau đầu có cool blue dịu rất nhẹ.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, soft brush stroke watercolor, subtle film grain. Palette: pink, peach, gold với cool blue ở vùng bóng tóc, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, chỉ profile M. Khuôn mặt cân đối, không có biểu cảm mệt buồn, không có nụ cười rộng. Tránh phong cách anime chibi và 3D nhựa.
```

### 08·P4 — Panel 4: Wide — M nhỏ bé, skyline bình minh rộng phía trước

> Upload **reference sheet 6.1** + **Scene Anchor**.

```
Hãy vẽ một Ô TRUYỆN KHUNG VUÔNG 1:1, viền mảnh đen, nội dung bên trong khung là:

Wide shot — M theo ảnh tham chiếu (áo len vàng nhạt, tóc xõa) đứng NHỎ BÉ ở 1/3 dưới khung panel, half-body view từ phía SAU (chỉ thấy lưng và một phần profile), hai tay đặt nhẹ trên thanh chắn ban công kim loại. Phía trước M (chiếm 2/3 trên khung panel) là skyline thành phố Việt Nam bình minh rộng mở: bầu trời hồng-vàng dịu, mây thấp ấm, tòa nhà xa silhouette xanh lạnh, vài con chim sớm. Trên thanh chắn bên cạnh M thấy mờ chiếc smartphone úp mặt và cốc trà bốc khói.

Ánh sáng: ánh bình minh ấm peach-gold chiếm chủ đạo từ phía trước; lưng M có cool blue dịu.

NGOÀI khung vuông: nền trắng kem trung tính phẳng. Khung panel nằm CHÍNH GIỮA ảnh.

Style: ink-wash painterly illustration, brush stroke watercolor, subtle film grain. Palette: pink, peach, gold với phần xa xanh lạnh, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M nhỏ trong khung. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

---

## 6.x · Lưu ý khi generate với ChatGPT

- Generate **character sheet (6.1)** trước. Sau đó với mỗi prompt PANEL có nhân vật M: **upload reference sheet vào cùng turn chat** trước khi paste prompt — ChatGPT sẽ tự giữ khuôn mặt nhất quán.
- Thứ tự generate trong 1 scene: **BG → MOTIF → P1 → P2 → P3 → P4**. Mỗi turn paste Scene Anchor lên trước. Nếu panel sau lệch panel trước, thêm: _"Giữ đúng outfit, ánh sáng và biểu cảm như đã mô tả trong Scene Anchor."_
- Generate **BG** ở tỉ lệ 16:9 đầy đủ. **MOTIF** cũng 16:9 nhưng phần giữa khung trống — sau khi tải về có thể dùng `remove.bg` để tách nền trắng kem thành PNG transparent. **PANEL** là khung vuông 1:1 với khung viền sẵn — dùng `remove.bg` hoặc Photoshop để cắt khung panel thành PNG có alpha rồi compose lên BG trong React.
- Giữ **cùng hướng ánh sáng** giữa 4 panel của 1 scene (đã note sẵn trong Scene Anchor) — đây là yếu tố giữ "1 trang truyện" trông liền mạch khi đặt cạnh nhau.
- Nếu DALL·E vẽ panel mà KHÔNG có khung viền hoặc nền ngoài không phải trắng kem phẳng, gõ follow-up: _"Vẽ lại — nội dung trong một khung vuông viền đen mảnh ở chính giữa ảnh; phần ngoài khung phải là nền trắng kem trung tính phẳng."_
- Nếu kết quả lệch reference quá nhiều, gõ follow-up: _"Vẽ lại, giữ đúng khuôn mặt và kiểu tóc của nhân vật trong ảnh tham chiếu đầu tiên. Đừng thay đổi nét mặt."_
- Nếu DALL·E thêm chữ ngoài ý muốn (cả trong panel lẫn ngoài khung), gõ follow-up: _"Vẽ lại nhưng tuyệt đối không có chữ hay ký tự nào trong ảnh."_
- Compose trong React: **BG full-bleed** (z-index thấp nhất) → **MOTIF** đặt chồng (z-index giữa, blend "multiply" hoặc "normal") → **4 PANEL** đặt thành cụm 2×2 hoặc 1×4 ở chính giữa khung (z-index cao nhất). Mỗi panel có animation `opacity 0→1 + scale 0.95→1` khi vào viewport, lệch nhau 200–300ms.

---

# 7. Cách thuyết trình phần website

Khi trình bày, không nên nói: “Website của em chỉ minh họa câu chuyện của M.”

Nên nói:

Website được xây dựng theo hướng interactive storytelling. Người xem không chỉ đọc nội dung, mà đi qua từng lớp quan hệ xã hội đang tác động đến M.

Ở phần đầu, M được đặt trong quan hệ với quê hương và gia đình.  
Sang phần giữa, M bước vào quan hệ với thành phố, trường học, bạn bè và mạng xã hội.  
Đến cao trào, các quan hệ ấy trở thành áp lực khiến M không nhận ra chính mình.  
Cuối cùng, website dùng quan điểm triết học Mác - Lênin để lý giải rằng bản chất con người là tổng hòa các quan hệ xã hội.

Điểm quan trọng là website không kết luận M “giả tạo”.  
Website cho thấy M là một cá nhân đang bị giằng kéo trong các quan hệ xã hội phức tạp của đời sống hiện đại.

---

# 8. Short script để nói trước lớp

Website của nhóm em chọn cách kể chuyện theo dạng cuộn tương tác. Nhân vật M không được giới thiệu bằng lý thuyết ngay từ đầu, mà được đặt vào một hành trình cảm xúc: từ quê lên thành phố, bước vào môi trường đại học, tạo dựng hình ảnh trên mạng xã hội, rồi dần bị chính hình ảnh đó chi phối.

Mỗi phần của website tương ứng với một tầng quan hệ xã hội. Ban đầu là gia đình và quê hương, sau đó là trường học, bạn bè, thành phố và mạng xã hội. Khi các quan hệ này tạo ra quá nhiều kỳ vọng, M bắt đầu sống theo hình tượng online hơn là cảm xúc thật của mình.

Từ đó, nhóm em vận dụng quan điểm của triết học Mác - Lênin để làm rõ rằng bản chất con người không phải là một cái tôi cô lập, có sẵn bên trong cá nhân. Bản chất con người được hình thành trong tổng hòa các quan hệ xã hội.

Vì vậy, vấn đề của M không phải chỉ là “sống thật hay sống giả”, mà là M đang bị chi phối bởi những quan hệ xã hội thiếu chân thành. Muốn tìm lại chính mình, M không cần tách khỏi xã hội, mà cần nhận thức lại và xây dựng những quan hệ xã hội lành mạnh, nhân văn hơn.

---

# 9. Checklist triển khai website

## Content

- [ ] Mỗi scene chỉ nên có 1 ý chính.
- [ ] Text không quá dài trên màn hình.
- [ ] Triết học xuất hiện sau khi người xem đã cảm được câu chuyện.
- [ ] Quote ngắn, dễ nhớ.
- [ ] Không biến website thành slide chữ.

## Visual

- [ ] Giữ cùng một nhân vật M ở mọi scene.
- [ ] Màu sắc thay đổi theo tâm lý.
- [ ] Online persona sáng hơn nhưng lạnh hơn.
- [ ] Đời thực tối hơn nhưng thật hơn.
- [ ] Kết thúc nên ấm và mở.

## Animation

- [ ] Không lạm dụng hiệu ứng.
- [ ] Chuyển động phải phục vụ cảm xúc.
- [ ] Scene áp lực có thể rung/blur nhẹ.
- [ ] Scene triết học dùng network/node.
- [ ] Scene cuối chuyển động chậm lại.

## Audio

- [ ] Có nút bật/tắt âm thanh.
- [ ] Không autoplay âm thanh nếu trình duyệt chặn.
- [ ] Âm thanh chỉ làm nền, không lấn át nội dung.
- [ ] Mỗi scene có một lớp âm thanh riêng.
- [ ] Cao trào dùng silence cũng hiệu quả.

## Accessibility

- [ ] Có chế độ giảm chuyển động nếu người dùng bật prefers-reduced-motion.
- [ ] Text đủ tương phản.
- [ ] Không để chữ quá nhỏ.
- [ ] Có thể đọc được nếu tắt âm thanh.
- [ ] Không phụ thuộc hoàn toàn vào animation để hiểu nội dung.

---

# 10. Kết luận định hướng

Website này nên được làm như một hành trình cảm xúc trước, rồi mới mở ra tầng lý luận triết học.

Nếu làm đúng, người xem sẽ không chỉ hiểu rằng “bản chất con người là tổng hòa các quan hệ xã hội”, mà còn cảm được điều đó qua hành trình của M.

M không đứng một mình.  
M được tạo nên bởi gia đình, trường học, bạn bè, mạng xã hội, thành phố và những kỳ vọng xung quanh.

Và khi M muốn tìm lại chính mình, M không cần trốn khỏi xã hội.  
M cần tìm lại những quan hệ xã hội chân thành hơn.
