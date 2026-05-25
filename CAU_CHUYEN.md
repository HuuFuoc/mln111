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

### Visual direction

- Cảnh đêm ở quê Việt Nam.
- M ngồi bên cửa sổ.
- Ngoài xa có ánh sáng thành phố.
- Không khí yên tĩnh, hy vọng, hơi buồn.
- Bầu trời rộng, nhân vật nhỏ.

### Animation direction with React Spring

- Background fade in chậm.
- Ánh đèn thành phố nhấp nháy rất nhẹ.
- Nhân vật M hiện ra từ opacity 0 -> 1.
- Text xuất hiện từng dòng khi scroll.

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

# 6. Prompt tạo ảnh cho từng scene (tách theo lớp)

Mỗi scene được tách thành nhiều prompt nhỏ để generate riêng từng layer (background, nhân vật, props, lighting). Mục đích:

- Dễ giữ nhân vật M nhất quán giữa các scene.
- Dễ ghép lớp parallax/animation bằng React Spring (background chậm, character vừa, props nhanh).
- Dễ chỉnh sửa từng phần mà không phải regenerate cả ảnh.

## 6.0 Common style tokens (đã inline sẵn ở mọi prompt bên dưới — chỉ tham khảo)

```
STYLE    = cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain
PALETTE  = color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation
NEGATIVE = text, letters, watermark, logo, signature, extra fingers, distorted face, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

Mỗi prompt bên dưới có 2 khối **Positive** (paste vào ô prompt chính) và **Negative** (paste vào ô negative prompt). Với prompt nhân vật M, **đính kèm Character reference sheet (mục 6.1)** làm reference image — Midjourney `--cref <url>`, Stable Diffusion IP-Adapter / Reference ControlNet, hoặc Gemini / Nano Banana với image input.

## 6.1 Character reference sheet – M (generate trước, dùng cho mọi scene)

**Positive:**

```
Character reference sheet of "M", a 19-year-old Vietnamese female university student. Slim build around 1m60, oval face, soft jawline, light tan skin, single-eyelid almond eyes, small nose, natural lips. Long straight black hair to shoulder, side-parted, occasionally tied in a low ponytail. Default outfit: oversized cream beige sweater, dark indigo straight jeans, white canvas sneakers, small black canvas backpack. Quiet, introspective expression, slightly tired eyes, gentle posture. Three views on the same canvas: front view, 3/4 view, side view. Neutral light gray background, even diffuse lighting, full body. Cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, subtle film grain, color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple characters merged, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

Outfit variants để swap khi prompt từng scene:

- **Quê**: áo sơ mi trắng cũ + quần vải xám, dép tổ ong.
- **Đi học**: sweater be + jeans indigo + balo canvas đen.
- **Phòng trọ buổi tối**: hoodie xám rộng, quần đùi, tóc búi lỏng.
- **Online persona**: sweater hồng pastel, son nhẹ, tóc chải gọn, ánh beauty light.
- **Kết**: áo len mỏng vàng nhạt, tóc xõa tự nhiên.

---

## Scene 01 – Ánh đèn đầu tiên

### 01a · Background

**Positive:**

```
A quiet rural Vietnamese countryside at night seen through a large old wooden window frame, distant horizon with tiny faint city lights as small glowing dots, vast deep navy sky with subtle stars, silhouettes of palm trees and tiled-roof houses far away, soft blue-purple moonlight, light mist drifting over rice fields, empty room with no character, wide cinematic composition, camera placed at window height. Cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 01b · Interior / props (foreground layer)

**Positive:**

```
Inside a humble Vietnamese rural bedroom at night: old wooden window with peeling paint, a small wooden study desk in front of the window, open notebook with handwritten Vietnamese as unreadable abstract strokes, worn canvas school bag, ceramic cup, paper lamp giving warm soft glow, wooden plank wall, faded family photo on the wall. No character. Lighting matches cool moonlight from outside the window mixed with warm lamp from inside, plain dark background for easy compositing. Cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, readable handwriting, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 01c · Character (M) — attach reference sheet 6.1

**Positive:**

```
A 19-year-old Vietnamese female university student named M (use the attached character reference sheet for face and body), wearing the rural "quê" outfit: old white button-up shirt and gray cloth pants. She sits sideways on a wooden chair beside a window, knees pulled up slightly, chin resting on her hand, looking out toward the far horizon with hopeful but uncertain eyes. Soft cool moonlight from camera left on her face, warm lamp rim light from camera right. Character isolated on a transparent or solid neutral background for compositing, full body shot. Cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 01d · Lighting / atmosphere overlay (optional)

**Positive:**

```
Volumetric moonlight rays angled through a window frame, faint cool blue atmospheric haze, dust particles floating in the air, soft cinematic vignette. Designed as a transparent overlay layer with no character and no objects. Color palette of midnight blue, deep violet, cool gray, low saturation. Subtle film grain.
```

**Negative:**

```
text, letters, watermark, logo, characters, objects, solid opaque background, low quality, blurry
```

---

## Scene 02 – Thành phố và những tiêu chuẩn mới

### 02a · Background

**Positive:**

```
Busy modern Vietnamese city street at early evening: tall buildings with glowing billboards in Vietnamese-looking signage that is abstract and unreadable, streams of motorbike headlights forming light trails, neon signs in blue-violet and pink, slight rain reflection on asphalt, crowd silhouettes blurred in the distance. Wide cinematic shot, no main character. Cinematic digital illustration, semi-realistic, emotional storytelling, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with electric blue and warm amber accents, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, readable signage, watermark, logo, signature, named brand, main character in focus, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 02b · Crowd layer (mid-ground)

**Positive:**

```
Anonymous out-of-focus crowd of Vietnamese university-age people walking past the camera, backs and side profiles, carrying backpacks and phones, slightly blurred with shallow depth of field. Transparent background, isolated mid-ground asset, no main character. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, recognizable faces, main character, sharp focus, low quality, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 02c · Character (M) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "đi học" outfit: oversized cream beige sweater, dark indigo straight jeans, white canvas sneakers, small black canvas backpack. Standing still on a sidewalk, slightly hunched shoulders, looking up at billboards, expression small and hopeful but overwhelmed. Cool blue-violet rim light from city neon behind her, soft front fill. Character isolated, transparent background, full body shot. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 02d · Floating social media cards (props)

**Positive:**

```
A set of 8 to 12 stylized floating UI cards in mid-air, each containing abstract placeholder content: profile avatar circles, heart icons, comment bubble shapes, achievement badge ribbons, dotted graph lines. Glowing soft edges, frosted glass material, slight random tilt angles. All cards contain NO real letters — use abstract glyphs, dots, or wavy lines instead. Transparent background, isolated PNG assets. Cinematic digital illustration, painterly, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber and pink accents, low saturation.
```

**Negative:**

```
text, letters, words, readable typography, watermark, logo, brand, characters, low quality, blurry, oversaturated, cartoon, 3d render plastic
```

---

## Scene 03 – Phiên bản online ra đời (split-screen)

### 03a · Background – LEFT (online world)

**Positive:**

```
A bright glowing studio-like background: pastel pink and warm magenta gradient, soft beauty ring-light bokeh, faint sparkle particles drifting, clean and curated look. No character, no readable text. Vertical half-frame composition. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Vibrant but soft palette: pastel pink, magenta, warm cream, light peach.
```

**Negative:**

```
text, letters, watermark, logo, signature, characters, dark heavy shadows, gritty, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 03b · Background – RIGHT (real world)

**Positive:**

```
A small dark Vietnamese rented room at night: messy bed with rumpled sheets, clothes piled on a chair, half-empty cup of instant noodles, charger cable on the floor, a single off-screen phone screen as the only light source casting cold blue glow on the wall. No character, quiet and lonely atmosphere. Vertical half-frame composition. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, heavy shadows, subtle film grain. Color palette of deep teal, cold blue, charcoal gray, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, bright warm light, clean tidy room, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 03c · Character – LEFT M (online persona) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "online persona" outfit: pastel pink sweater, soft natural-glam makeup, hair neatly styled. Posing confidently, gentle warm smile, hand near chin, slight head tilt. Warm beauty lighting from front, slight glow halo behind her hair. Character isolated on a transparent background, half-body shot. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Slightly warmer palette: pastel pink, warm cream, soft gold accents.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, harsh shadows, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 03d · Character – RIGHT M (real) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "phòng trọ" outfit: oversized gray hoodie, loose hair bun, no makeup. Sitting on the floor with back against the bed, knees up, phone in one hand, tired hollow eyes, mouth slightly open. Cold blue phone glow on her face from below, deep shadows elsewhere. Character isolated on a transparent background, half-body shot. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of deep teal, cold blue, cool gray, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, multiple people, background scenery, bright happy expression, warm sunny light, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 03e · Props

**Positive:**

```
Two isolated PNG asset sets on transparent background. Set A (warm): floating heart icons, like-thumb shapes, sparkle dust, soft pastel pink and warm gold glow. Set B (cold): minimal ghost-style notification bell icons, fading speech bubble outlines, cold cyan blue glow. Painterly, soft cinematic lighting, subtle film grain.
```

**Negative:**

```
text, letters, words, readable typography, watermark, logo, brand, characters, low quality, blurry, cartoon, 3d render plastic
```

---

## Scene 04 – "Ổn mà"

### 04a · Background

**Positive:**

```
Interior of a university cafeteria or study corner, blurred to heavy bokeh, warm sodium lights mixed with cool fluorescent ceiling lights, indistinct figures of students in the distance, shallow depth of field so background reads almost abstract. No main character, no readable signage. Wide cinematic composition. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of muted blue-gray with warm amber spots, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, readable signage, watermark, logo, signature, main character in focus, sharp foreground subjects, low quality, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 04b · Character (M) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "đi học" outfit. Standing center frame, polite tight-lipped smile that doesn't reach the eyes, eyes slightly downcast, shoulders subtly tense, hands holding a phone or coffee cup. Soft front light, slight desaturation on her face. Character isolated, transparent background, medium shot. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, wide bright smile, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 04c · Chat bubbles (props)

**Positive:**

```
A cluster of empty translucent chat bubbles floating in mid-air at various sizes and tilt angles, frosted glass material, soft inner glow. No readable letters — use abstract dot patterns or wavy line glyphs inside. Some bubbles slightly cracked, faded, or dissolving at the edges. Isolated transparent PNG assets. Painterly, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, words, readable typography, watermark, logo, brand, characters, low quality, blurry, cartoon, 3d render plastic
```

### 04d · Blurred friends silhouettes

**Positive:**

```
Three to four out-of-focus silhouettes of Vietnamese university students standing around an invisible center, only backs and shoulders visible, heavy gaussian blur, no faces clearly visible. Transparent background, isolated layer. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, sharp focus, recognizable faces, main character, low quality, oversaturated, cartoon, anime chibi, 3d render plastic
```

---

## Scene 05 – Mình là ai?

### 05a · Background

**Positive:**

```
A dark near-empty bedroom at midnight, only one strong cold blue light source coming from off-screen (a giant phone screen). Dark walls, faint outline of a desk and bed, deep heavy shadows, slight chromatic aberration at frame edges. No character. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, high contrast, subtle film grain. Color palette of cold cyan, deep navy, charcoal gray, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, warm light, bright room, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 05b · Giant phone screen (foreground frame)

**Positive:**

```
An oversized vertical smartphone shape filling the right side of the frame, glowing rectangular screen acting like a mirror with soft glow halo around the device, visible bezel and frame edges. The screen content area is intentionally empty (will composite a character into it). Transparent or solid black background outside the phone. Cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Color palette of cold cyan, deep navy, cool gray, low saturation.
```

**Negative:**

```
text, letters, words, UI elements, app icons, watermark, logo, brand, characters inside screen, low quality, blurry, oversaturated, cartoon, 3d render plastic
```

### 05c · Real M standing in front of phone — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "phòng trọ" outfit. Standing with her back partially to camera, looking up at a glowing phone screen, posture small and uncertain, silhouette rim-lit by cold blue light from the screen, face partially visible in 3/4 from behind. Character isolated, transparent background, full body. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of cold cyan, deep navy, cool gray, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, multiple people, background scenery, warm light, smiling, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 05d · Online M inside the screen — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), styled as the "online persona": pastel pink sweater, natural-glam makeup, neat hair. Smiling brightly with confident eyes, posed like a selfie portrait framed as if seen through a phone screen, slightly higher saturation, warm front beauty light. Character isolated on a transparent background — will be composited inside the phone screen layer from 05b. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Warmer pastel pink and cream palette.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, dark background, harsh shadows, tired sad expression, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 05e · Glitch overlay (optional)

**Positive:**

```
Subtle digital glitch artifacts: thin RGB color split lines, faint horizontal scanlines, light static noise. Transparent overlay layer, no character, no scenery. Color palette of cold cyan, magenta, and white at low opacity.
```

**Negative:**

```
text, letters, watermark, logo, characters, solid opaque background, heavy distortion, low quality
```

---

## Scene 06 – Relationship map

### 06a · Background

**Positive:**

```
Abstract dark cosmic background, deep navy fading to black gradient, faint constellation-like dots scattered, subtle nebula glow in violet, clean negative space in the center for compositing a character. No character, no readable text. Cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, bright daylight, cluttered foreground, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 06b · Character (M) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the default cream sweater outfit. Standing dead center, arms slightly out at sides as if held by invisible threads, looking straight at camera with a neutral contemplative expression. Soft warm rim light from above, the rest of the body cool-toned. Character isolated, transparent background, full body, slight low-angle shot. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, exaggerated pose, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 06c · Node icons (set of 7 separate PNGs)

**Positive:**

```
Set of seven symbolic glowing icons in a minimalist line-art style with soft halo glow, consistent stroke weight, each on a separate transparent background. The seven icons are: 1) Family — two adult silhouettes plus a small child figure; 2) School — a graduation cap; 3) Friends — three connected dots forming a triangle; 4) Social media — a stylized heart inside a rounded square; 5) City — minimal skyline of three buildings; 6) Expectations — an upward arrow with a small crown above; 7) Inner emotion — a small flickering flame. Soft cyan and violet glow, painterly digital illustration.
```

**Negative:**

```
text, letters, words, watermark, logo, brand, photorealistic complex detail, characters, solid background, low quality, blurry, oversaturated, cartoon mascot, 3d render plastic
```

### 06d · Connection lines / energy strands (overlay)

**Positive:**

```
Glowing thin curved energy strands radiating from a central invisible point outward to many directions, some strands taut and straight, others tangled or pulling at conflicting angles, soft bloom and small particle sparks along each line. Transparent overlay, no character. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, characters, opaque background, solid shapes, low quality, blurry, oversaturated, cartoon, 3d render plastic
```

---

## Scene 07 – Hai phiên bản hòa lại

### 07a · Background

**Positive:**

```
The same small Vietnamese rented room as scenes 03 and 05, but now with morning warm sunlight breaking through a half-open curtain, dust particles floating in the sunbeam, walls catching golden warm light mixed with residual cool blue from night. No character. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Transition palette: cool blue shifting into warm amber and honey gold, low to mid saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, heavy darkness, harsh contrast, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 07b · Merged M (character) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing a hybrid outfit: cream beige sweater with soft natural makeup. Standing near a window, soft genuine half-smile, eyes calm and present. Warm golden light on one side of her face, cool blue residual light on the other side, the two lights meeting softly at the centerline of her face. Character isolated on a transparent background, half-body, slight 3/4 angle. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Color palette of warm amber and gold mixing with cool blue and cool gray, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple separate people, background scenery, exaggerated expression, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 07c · Fading online persona (optional ghost layer) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet) styled as the "online persona": pastel pink sweater, glam makeup. Rendered at very low opacity like a translucent ghost, overlapping behind the merged M, edges dissolving into soft light particles. Transparent background, isolated layer. Painterly, soft cinematic lighting, subtle film grain. Soft pink-violet glow palette at low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, opaque solid render, harsh outline, multiple separate people, background scenery, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 07d · Fading social cards (props)

**Positive:**

```
The same floating UI cards from Scene 02d, but smaller, drifting outward away from the center, edges dissolving into warm light particles, overall opacity around 40 percent. Isolated transparent PNG assets. Painterly, soft cinematic lighting, subtle film grain. Color palette of midnight blue, deep violet, cool gray with warm amber accents, low saturation.
```

**Negative:**

```
text, letters, words, readable typography, watermark, logo, brand, sharp opaque cards, characters, low quality, blurry, cartoon, 3d render plastic
```

### 07e · Friend silhouette (optional)

**Positive:**

```
Soft silhouette of one supportive Vietnamese university-age friend standing slightly behind M, hand gently placed on her shoulder, warm backlight from a window, face not detailed. Isolated, transparent background. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Warm amber and gold accents with cool gray shadow side, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, sharp recognizable face, multiple friends, main character M, background scenery, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

---

## Scene 08 – Kết / Tìm lại mình

### 08a · Background

**Positive:**

```
View from a small balcony or dorm window at sunrise over a calm Vietnamese city skyline, soft pink-gold sky, low clouds catching warm light, distant buildings in cool blue silhouette, a few early birds in the sky. Wide cinematic composition, no character. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Warm gentle palette of pink, peach, gold with cool blue distance, low to mid saturation. 16:9 aspect ratio.
```

**Negative:**

```
text, letters, watermark, logo, signature, people, characters, harsh night darkness, heavy storm, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 08b · Foreground (balcony props)

**Positive:**

```
Balcony railing occupying the lower third of frame, a smartphone face-down on the railing, a ceramic cup of warm tea releasing thin steam, a small potted plant beside it. No character, transparent background. Cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Color palette of warm amber and honey gold with cool gray accents, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, brand on phone, signature, people, characters, harsh artificial light, low quality, blurry, oversaturated, cartoon, 3d render plastic
```

### 08c · Character (M) — attach reference sheet 6.1

**Positive:**

```
Vietnamese female university student M (use the attached character reference sheet), wearing the "kết" outfit: soft yellow knit sweater, hair down naturally. Standing at a balcony, hands resting on the railing, looking out toward the sunrise, shot from slightly behind in 3/4 view so we see her calm profile. Warm sunrise light on her face and hair, gentle wind softly moving her hair. Character isolated on a transparent background, half-body. Cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Warm gentle palette of pink, peach, gold, low saturation.
```

**Negative:**

```
text, letters, watermark, logo, signature, extra fingers, distorted face, asymmetrical eyes, multiple people, background scenery, tired sad expression, harsh night light, low quality, blurry, oversaturated, cartoon, anime chibi, 3d render plastic
```

### 08d · Atmosphere overlay

**Positive:**

```
Soft warm light leaks across the frame, faint lens flare from the sunrise direction, gentle warm bokeh particles, very subtle film grain. Transparent overlay layer, no character, no scenery. Warm amber, peach, soft gold palette at low opacity.
```

**Negative:**

```
text, letters, watermark, logo, characters, opaque background, cold blue tones, heavy darkness, low quality, blurry
```

---

## 6.x · Lưu ý khi generate

- Generate **character sheet (6.1)** trước. Sau đó mỗi scene dùng nó làm reference (Midjourney `--cref`, Stable Diffusion IP-Adapter / Reference ControlNet, hoặc Nano Banana / Gemini Image với image input).
- Generate **background** ở 16:9 đầy đủ, **character/props** ở nền trong suốt (PNG) hoặc nền solid để remove dễ.
- Giữ **cùng hướng ánh sáng** giữa các layer của cùng 1 scene (note đã ghi sẵn trong từng prompt).
- Ghép layer trong React Spring theo thứ tự (back → mid → character → front → overlay) để dùng được parallax như đã mô tả ở mục 4.

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
