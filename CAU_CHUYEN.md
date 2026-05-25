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

# 6. Prompt tạo ảnh cho từng scene (cho ChatGPT / DALL·E)

Mỗi scene vẫn được tách thành nhiều prompt nhỏ để generate từng layer (background, nhân vật, props, overlay). Mục đích:

- Dễ giữ nhân vật M nhất quán giữa các scene (thông qua character reference sheet ở 6.1).
- Dễ ghép parallax/animation bằng React Spring (background chậm, character vừa, props nhanh).
- Dễ chỉnh sửa từng phần mà không phải regen cả ảnh.

## 6.0 Cách dùng prompt với ChatGPT

1. Generate **character reference sheet (mục 6.1)** trước nhất. Tải file PNG về.
2. Với mọi prompt có nhân vật M: **upload reference sheet vào cùng turn chat** rồi paste prompt — ChatGPT sẽ dùng ảnh đó để giữ khuôn mặt/dáng người nhất quán giữa các scene.
3. **QUAN TRỌNG — Scene Anchor pattern (giữ các layer trong cùng scene khớp với nhau):**
   - Mỗi scene 01–08 có một khối **Scene Anchor** ở đầu, mô tả cố định: layout đồ vật, vị trí + dáng nhân vật, hướng ánh sáng, góc máy.
   - Khi gửi bất kỳ layer prompt nào của scene (background / props / character / overlay) cho ChatGPT, **paste nguyên xi khối Scene Anchor vào TRƯỚC**, rồi mới paste prompt layer phía sau. Cấu trúc 1 turn chat:

     ```
     [SCENE ANCHOR của scene X — copy nguyên xi]

     [Prompt layer cụ thể — vd: 01a Background]
     ```

   - Như vậy mọi layer cùng scene đều dựa trên cùng một "thế giới vật lý" — background sẽ có đúng chiếc bàn, character sẽ ngồi đúng chiếc ghế bên cạnh bàn đó, props sẽ ở đúng vị trí. Khi compose trong React Spring các layer sẽ khớp nhau.
   - Mỗi prompt layer đã có ghi chú "trong ảnh này không có nhân vật" / "nền xám trung tính phẳng" — đó là chỉ dẫn để ChatGPT chỉ render PHẦN của scene anchor mà layer đó cần.
4. Với layer **background / props**: prompt đã yêu cầu "nền xám trung tính phẳng" hoặc "nền tối phẳng" — DALL·E không xuất PNG trong suốt thật, nhưng ảnh có nền solid sẽ dễ remove bằng `remove.bg`, Photoshop hoặc `rembg` sau khi tải về.
5. ChatGPT/DALL·E **không nhận negative prompt** kiểu Midjourney. Mọi yêu cầu "không có…" đã được viết lại thành chỉ dẫn dương trong cùng prompt (vd: "trong ảnh không có chữ").
6. Tỉ lệ khung hình ghi bằng lời ("ảnh ngang 16:9", "ảnh dọc 9:16") — ChatGPT tự chọn size phù hợp.
7. Nếu kết quả lệch quá nhiều so với reference sheet, gõ tiếp: *"Vẽ lại, giữ đúng khuôn mặt và kiểu tóc của nhân vật trong ảnh tham chiếu đầu tiên."*
8. Nếu layer character không khớp layout của background (vd: ghế khác, góc máy lệch), gõ tiếp: *"Vẽ lại theo đúng layout và góc máy trong Scene Anchor — M phải ngồi/đứng đúng vị trí đã mô tả."*

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

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 01a–01d)

```
[SCENE ANCHOR — Scene 01: Ánh đèn đầu tiên]

Setting: phòng ngủ miền quê Việt Nam vào ban đêm, nhìn ra qua một khung cửa sổ gỗ cũ lớn ở giữa khung hình.

Layout cố định (mọi layer phải khớp):
- Cửa sổ gỗ tróc sơn ở chính giữa phía sau khung.
- Bàn học gỗ nhỏ kê SÁT DƯỚI cửa sổ; trên bàn có vở mở (chữ tay tiếng Việt như nét trừu tượng không đọc được), cốc sứ, đèn giấy phát ánh ấm dịu.
- Ghế gỗ thấp đặt nghiêng BÊN CẠNH bàn, hướng mặt ra cửa sổ.
- Vách ván gỗ; ảnh gia đình bạc màu treo trên tường bên trái.
- Ngoài cửa sổ: đồng lúa, bóng cây dừa, mái ngói xa; đường chân trời có vài chấm sáng nhỏ là ánh đèn thành phố.

Nhân vật M: ngồi nghiêng trên CHÍNH chiếc ghế gỗ cạnh bàn (không phải ghế khác), gối hơi co lên, cằm tựa lên tay, nhìn ra cửa sổ. Mặc áo sơ mi trắng cũ + quần vải xám (outfit "quê").

Ánh sáng: ánh trăng xanh lạnh từ camera trái (qua cửa sổ); ánh đèn giấy ấm trong phòng từ camera phải. Mọi layer của scene phải giữ đúng 2 hướng sáng này.

Góc máy: wide cinematic 16:9, camera đặt ngang tầm cửa sổ.

Palette: midnight blue, deep violet, cool gray, accent amber ấm, low saturation.
```

### 01a · Background

```
Hãy vẽ một cảnh đêm tại miền quê Việt Nam yên tĩnh, nhìn qua khung cửa sổ gỗ cũ lớn. Đường chân trời xa xa hiện vài chấm sáng nhỏ — ánh đèn thành phố. Bầu trời navy sâu lấp ló sao mờ, bóng cây dừa và mái ngói xa xa, ánh trăng xanh tím dịu, sương nhẹ trôi trên đồng lúa. Phòng trống, không có người.

Bố cục: wide cinematic shot, camera đặt ngang tầm cửa sổ. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ, không logo, không watermark, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 01b · Interior / props (foreground layer)

```
Hãy vẽ nội thất một phòng ngủ miền quê Việt Nam khiêm tốn vào ban đêm: cửa sổ gỗ tróc sơn, bàn học gỗ nhỏ đặt trước cửa sổ, vở mở với nét chữ tay tiếng Việt như những nét trừu tượng không đọc được, balo canvas cũ, cốc sứ, đèn giấy phát ánh ấm dịu, vách ván gỗ, ảnh gia đình bạc màu trên tường. Không có người.

Ánh sáng: ánh trăng lạnh từ ngoài cửa sổ pha với ánh đèn ấm trong phòng. Nền tối phẳng để dễ tách lớp khi compose. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ đọc được, không logo, không watermark, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 01c · Character (M) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt, dáng người và độ tuổi.

M mặc outfit "quê": áo sơ mi trắng cũ, quần vải xám. M ngồi nghiêng trên ghế gỗ cạnh cửa sổ, gối hơi co lên, cằm tựa lên tay, nhìn ra đường chân trời xa với ánh mắt hy vọng pha lẫn bất an.

Ánh sáng: ánh trăng lạnh từ camera trái chiếu lên mặt, ánh đèn ấm làm rim light từ camera phải. Full body shot.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 01a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 01d · Lighting / atmosphere overlay (optional)

```
Hãy vẽ một lớp overlay ánh sáng: tia trăng volumetric chiếu xiên qua khung cửa sổ, sương mờ xanh lạnh, hạt bụi lơ lửng trong không khí, vignette mềm.

Bố cục để dùng làm overlay: nền tối phẳng (sẽ blend "screen" hoặc "lighten" trong React layer). Không có nhân vật hay vật thể. Ảnh ngang 16:9.

Palette: midnight blue, deep violet, cool gray, low saturation. Subtle film grain.

Trong ảnh không có chữ/logo/watermark.
```

---

## Scene 02 – Thành phố và những tiêu chuẩn mới

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 02a–02d)

```
[SCENE ANCHOR — Scene 02: Thành phố và những tiêu chuẩn mới]

Setting: vỉa hè một con phố hiện đại ở thành phố Việt Nam, đầu tối, vừa mưa nhẹ xong nên mặt nhựa loang loáng nước.

Layout cố định (mọi layer phải khớp):
- Cao ốc hai bên đường với bảng hiệu phát sáng kiểu Việt Nam (chữ chỉ là nét trừu tượng không đọc được).
- Vệt sáng đèn xe máy kéo dài chạy qua phía sau, biển neon xanh tím và hồng.
- Đám đông sinh viên ẩn danh đi ngang qua phía sau lưng M, chỉ thấy lưng/profile blur, đeo balo và cầm điện thoại.
- Quanh M lơ lửng 8–12 floating UI cards: avatar tròn, icon trái tim, bong bóng comment, ribbon huy hiệu, đường biểu đồ chấm — tất cả KHÔNG chứa chữ thật.

Nhân vật M: đứng yên trên vỉa hè ngay CHÍNH GIỮA khung, vai hơi rụt, ngẩng nhìn lên các biển quảng cáo, biểu cảm nhỏ bé hy vọng pha lẫn bị áp đảo. Mặc sweater oversized kem be + jeans chàm đậm + giày canvas trắng + balo canvas đen nhỏ (outfit "đi học").

Ánh sáng: rim light xanh tím lạnh từ neon thành phố phía SAU lưng M; front fill mềm từ phía trước.

Góc máy: wide cinematic 16:9, ngang tầm mắt M.

Palette: midnight blue, deep violet, cool gray với electric blue và warm amber accents, low saturation.
```

### 02a · Background

```
Hãy vẽ một con phố hiện đại ở thành phố Việt Nam vào đầu buổi tối: cao ốc với bảng hiệu phát sáng kiểu Việt Nam nhưng các chữ chỉ là nét trừu tượng không đọc được, dòng đèn xe máy kéo thành vệt sáng, biển neon xanh tím và hồng, mặt đường nhựa loang loáng nước mưa, bóng đám đông mờ ở xa. Không có nhân vật chính.

Bố cục: wide cinematic shot. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with electric blue and warm amber accents, low saturation.

Trong ảnh không có chữ đọc được, không tên thương hiệu cụ thể, không logo, không watermark, không có nhân vật chính nổi bật. Tránh phong cách anime chibi và 3D nhựa.
```

### 02b · Crowd layer (mid-ground)

```
Hãy vẽ một đám đông ẩn danh là sinh viên Việt Nam tuổi đại học đang đi ngang qua camera — chỉ thấy lưng và profile nghiêng, đeo balo và cầm điện thoại, hơi out-of-focus.

Bố cục: tất cả nhân vật phụ đặt trên nền xám trung tính phẳng để dễ tách lớp mid-ground khi compose. Không có nhân vật chính.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, không có khuôn mặt nhận diện rõ. Tránh phong cách anime chibi và 3D nhựa.
```

### 02c · Character (M) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit "đi học": áo len oversized màu kem be, jeans chàm đậm dáng suông, giày canvas trắng, balo canvas đen nhỏ. M đứng yên trên vỉa hè, vai hơi rụt, ngẩng nhìn các biển quảng cáo, biểu cảm nhỏ bé — hy vọng pha lẫn cảm giác bị áp đảo.

Ánh sáng: rim light xanh tím lạnh từ neon thành phố phía sau, front fill mềm. Full body shot.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 02a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ có một nhân vật M, không có background phức tạp. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 02d · Floating social media cards (props)

```
Hãy vẽ một bộ 8–12 floating UI cards phong cách hóa, lơ lửng trong không trung. Mỗi card chứa nội dung trừu tượng: vòng tròn avatar, icon trái tim, hình bong bóng bình luận, ribbon huy hiệu thành tích, đường biểu đồ chấm. Cạnh card phát sáng nhẹ, chất liệu frosted glass, mỗi card nghiêng nhẹ ngẫu nhiên.

Quan trọng: tất cả card KHÔNG chứa chữ thật — dùng glyph trừu tượng, các chấm, hoặc nét lượn sóng thay cho chữ.

Bố cục: các card đặt trên nền xám trung tính phẳng để dễ tách thành PNG riêng khi compose.

Style: cinematic digital illustration, painterly, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber and pink accents, low saturation.

Trong ảnh không có chữ đọc được, không typography thật, không logo, không tên thương hiệu, không có nhân vật. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 03 – Phiên bản online ra đời (split-screen)

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 03a–03e)

```
[SCENE ANCHOR — Scene 03: Phiên bản online ra đời (split-screen)]

Bố cục split-screen DỌC: ảnh ngang 16:9 chia đôi bằng một đường dọc ở chính giữa khung. Mọi layer phải tôn trọng đúng đường chia này.

NỬA TRÁI (thế giới online):
- Background: studio chụp hình ảo — gradient hồng pastel + magenta ấm, bokeh ring-light beauty, sparkle nhỏ.
- M (online persona): mặc sweater hồng pastel, makeup natural-glam, tóc chải gọn, mỉm cười dịu, tay đặt gần cằm, đầu nghiêng nhẹ. Half-body. Đứng ở chính giữa nửa trái.
- Props quanh M (Set A — warm): icon trái tim lơ lửng, ngón cái like, bụi sparkle. Glow hồng pastel và vàng ấm.
- Ánh sáng: beauty light ấm từ phía trước + halo glow phía sau tóc.
- Palette: pastel pink, magenta, cream, soft gold.

NỬA PHẢI (đời thật):
- Background: phòng trọ nhỏ tối ở Việt Nam — giường nhàu, đống quần áo trên ghế, cốc mì ăn liền dở, dây sạc trên sàn.
- M (đời thật): mặc hoodie xám oversized, tóc búi lỏng, không trang điểm. Ngồi bệt trên sàn dựa lưng vào giường, gối co lên, một tay cầm điện thoại, mắt mệt trống rỗng, miệng hơi hé. Half-body. Ở chính giữa nửa phải.
- Props quanh M (Set B — cold): chuông notification ghost tối giản, bong bóng chat đang mờ. Glow cyan xanh lạnh.
- Ánh sáng: ánh xanh lạnh từ màn hình điện thoại hắt TỪ DƯỚI LÊN mặt M; bóng đổ nặng các vùng còn lại.
- Palette: deep teal, cold blue, charcoal gray.

Lưu ý: M ở nửa trái và M ở nửa phải PHẢI là cùng một người (giữ đúng khuôn mặt theo reference sheet 6.1) — chỉ khác outfit, makeup, dáng và ánh sáng.
```

### 03a · Background – LEFT (online world)

```
Hãy vẽ một background sáng kiểu studio chụp hình: gradient hồng pastel pha magenta ấm, bokeh ring-light beauty mềm, hạt sparkle nhỏ trôi nhẹ, vibe sạch và được curate kỹ. Không có nhân vật.

Bố cục: nửa khung dọc (vertical half-frame) — phần này sẽ ghép cạnh background bên phải.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: pastel pink, magenta, warm cream, light peach — tươi nhưng vẫn dịu.

Trong ảnh không có chữ/logo/watermark, không có người, không có bóng đổ nặng. Tránh phong cách anime chibi và 3D nhựa.
```

### 03b · Background – RIGHT (real world)

```
Hãy vẽ một phòng trọ nhỏ tối ở Việt Nam vào ban đêm: giường bừa với chăn nhàu, đống quần áo trên ghế, cốc mì ăn liền dở, dây sạc nằm trên sàn. Nguồn sáng duy nhất là ánh xanh lạnh từ một màn hình điện thoại nằm ngoài khung, hắt lên tường. Không có nhân vật, không khí lặng và cô đơn.

Bố cục: nửa khung dọc (vertical half-frame) — sẽ ghép cạnh background bên trái.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, bóng đổ nặng, subtle film grain. Palette: deep teal, cold blue, charcoal gray, low saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có ánh sáng ấm sáng rực, không phải phòng sạch sẽ ngăn nắp. Tránh phong cách anime chibi và 3D nhựa.
```

### 03c · Character – LEFT M (online persona) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — phiên bản "online persona".

Outfit: sweater hồng pastel, makeup natural-glam dịu, tóc chải gọn. M tạo dáng tự tin, mỉm cười ấm dịu, tay đặt gần cằm, đầu nghiêng nhẹ.

Ánh sáng: beauty light ấm từ phía trước, có halo glow nhẹ phía sau tóc. Half-body shot.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 03a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: pastel pink, warm cream, soft gold accents — ấm hơn các scene khác.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có bóng đổ cứng. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 03d · Character – RIGHT M (real) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — phiên bản đời thật trong phòng trọ.

Outfit "phòng trọ": hoodie xám oversized, tóc búi lỏng, không trang điểm. M ngồi bệt trên sàn dựa lưng vào giường, gối co lên, một tay cầm điện thoại, ánh mắt mệt mỏi trống rỗng, miệng hơi hé.

Ánh sáng: ánh xanh lạnh từ màn hình điện thoại hắt từ dưới lên mặt, bóng đổ nặng ở các vùng còn lại. Half-body shot.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 03b.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: deep teal, cold blue, cool gray, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có biểu cảm vui tươi, không có nắng ấm. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 03e · Props

```
Hãy vẽ hai bộ asset riêng biệt trên cùng một canvas, nền xám trung tính phẳng để dễ tách thành PNG riêng.

Set A (warm — bên online): icon trái tim lơ lửng, hình ngón cái like, bụi sparkle, glow hồng pastel và vàng ấm dịu.

Set B (cold — bên đời thật): icon chuông notification kiểu ghost tối giản, đường viền bong bóng chat đang mờ dần, glow cyan xanh lạnh.

Style: painterly, soft cinematic lighting, subtle film grain.

Trong ảnh không có chữ thật, không typography đọc được, không logo, không tên thương hiệu, không có nhân vật. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 04 – "Ổn mà"

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 04a–04d)

```
[SCENE ANCHOR — Scene 04: "Ổn mà"]

Setting: góc canteen hoặc khu tự học ở trường đại học, blur thành heavy bokeh đến mức background gần như trừu tượng.

Layout cố định (mọi layer phải khớp):
- M đứng ở CHÍNH GIỮA khung, medium shot.
- 3–4 silhouette sinh viên Việt Nam tuổi đại học blur mạnh đứng vây xung quanh M (chỉ thấy lưng và vai, không có khuôn mặt rõ).
- Cụm chat bubble trong suốt RỖNG (không có chữ thật, chỉ chấm hoặc nét lượn sóng) lơ lửng quanh M ở các kích thước và góc nghiêng khác nhau; một vài bubble nứt nhẹ hoặc tan ở cạnh.

Nhân vật M: đứng giữa, nụ cười lịch sự MÍM MÔI không chạm tới mắt, mắt hơi nhìn xuống, vai hơi gồng, tay cầm điện thoại hoặc cốc cà phê. Mặc sweater oversized kem be + jeans chàm đậm (outfit "đi học").

Ánh sáng: front light mềm chiếu thẳng vào M; ánh đèn sodium ấm pha với đèn fluorescent trần lạnh ở background; mặt M hơi desaturated so với môi trường.

Góc máy: medium shot, wide cinematic 16:9, ngang tầm ngực M.

Palette: muted blue-gray với vài đốm warm amber, low saturation.
```

### 04a · Background

```
Hãy vẽ nội thất một góc canteen hoặc góc tự học của trường đại học, làm mờ thành heavy bokeh: ánh đèn sodium ấm pha với đèn fluorescent trần lạnh, bóng sinh viên mờ ở xa, shallow depth of field đến mức background gần như trừu tượng. Không có nhân vật chính, không có biển hiệu đọc được.

Bố cục: wide cinematic shot. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: muted blue-gray với vài đốm amber ấm, low saturation.

Trong ảnh không có chữ đọc được, không logo/watermark, không có nhân vật chính nổi rõ. Tránh phong cách anime chibi và 3D nhựa.
```

### 04b · Character (M) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit "đi học" (sweater be + jeans indigo). Đứng giữa khung, nụ cười lịch sự mím môi không chạm tới mắt, mắt hơi nhìn xuống, vai hơi gồng, tay cầm điện thoại hoặc cốc cà phê.

Ánh sáng: front light mềm, mặt hơi desaturated. Medium shot.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 04a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có nụ cười rộng tươi rói. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 04c · Chat bubbles (props)

```
Hãy vẽ một cụm chat bubble rỗng trong suốt lơ lửng giữa không trung, đủ kích cỡ và góc nghiêng, chất liệu frosted glass, glow trong dịu. Một số bubble nứt nhẹ, mờ dần hoặc tan ở các cạnh.

Quan trọng: trong bubble không có chữ đọc được — dùng pattern chấm trừu tượng hoặc nét lượn sóng thay cho text.

Bố cục: tất cả bubble đặt trên nền xám trung tính phẳng để dễ tách thành PNG riêng khi compose.

Style: painterly, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ thật, không typography, không logo, không thương hiệu, không có nhân vật. Tránh phong cách anime chibi và 3D nhựa.
```

### 04d · Blurred friends silhouettes

```
Hãy vẽ 3–4 bóng sinh viên đại học Việt Nam out-of-focus đứng vây quanh một điểm vô hình ở giữa, chỉ thấy lưng và vai, gaussian blur mạnh, không thấy mặt rõ.

Bố cục: tất cả đặt trên nền xám trung tính phẳng để dễ tách thành lớp riêng.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray, low saturation.

Trong ảnh không có chữ/logo/watermark, không có khuôn mặt nhận diện được, không có nhân vật chính sắc nét. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 05 – Mình là ai?

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 05a–05e)

```
[SCENE ANCHOR — Scene 05: Mình là ai?]

Setting: phòng ngủ tối gần như trống vào nửa đêm, ảnh ngang 16:9, high contrast.

Layout cố định (mọi layer phải khớp):
- Phía PHẢI khung: một chiếc smartphone DỌC khổng lồ chiếm trọn nửa phải khung, màn hình chữ nhật phát sáng như tấm gương, có halo glow dịu quanh máy, bezel và viền rõ ràng. Bên trong màn hình hiển thị phiên bản "online persona" của M.
- Phía TRÁI khung: phòng tối — bóng mờ của bàn và giường ở phía sau, tường tối, bóng đổ rất sâu, chromatic aberration nhẹ ở các cạnh khung.
- M (đời thật) đứng ở vùng giữa-trái khung, quay LƯNG MỘT PHẦN về camera, ngẩng lên nhìn lên màn hình điện thoại bên phải.

Nhân vật M (đời thật, đứng trước phone):
- Mặc hoodie xám oversized, tóc búi lỏng (outfit "phòng trọ").
- Dáng nhỏ bé, bất an, vai hơi rụt.
- Mặt thấy ở góc 3/4 từ phía sau.
- Silhouette được rim light xanh lạnh từ màn hình.

Nhân vật M (online persona, BÊN TRONG màn hình phone):
- Mặc sweater hồng pastel, makeup natural-glam, tóc chải gọn.
- Cười rạng rỡ, mắt tự tin, tạo dáng selfie portrait.
- Saturation cao hơn, beauty light ấm.
- Phải là cùng một khuôn mặt với M đời thật (theo reference sheet 6.1).

Ánh sáng: nguồn sáng DUY NHẤT là ánh xanh lạnh mạnh phát ra từ màn hình điện thoại bên phải; phần còn lại bóng đổ sâu nặng.

Góc máy: ảnh ngang 16:9, phone là foreground bên phải, M là mid-ground bên trái.

Palette: cold cyan, deep navy, charcoal gray cho không gian phòng + warmer pastel pink cho phần online persona bên trong màn hình.
```

### 05a · Background

```
Hãy vẽ một phòng ngủ tối gần như trống vào nửa đêm. Nguồn sáng duy nhất là ánh xanh lạnh mạnh từ ngoài khung (một màn hình điện thoại khổng lồ). Tường tối, bóng mờ của bàn và giường, bóng đổ sâu nặng, chromatic aberration nhẹ ở các cạnh khung. Không có nhân vật.

Bố cục: ảnh ngang 16:9, high contrast.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: cold cyan, deep navy, charcoal gray, low saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có ánh sáng ấm, không phải phòng sáng sủa. Tránh phong cách anime chibi và 3D nhựa.
```

### 05b · Giant phone screen (foreground frame)

```
Hãy vẽ hình dáng một chiếc smartphone dọc quá khổ chiếm trọn nửa phải khung hình, màn hình chữ nhật phát sáng như một tấm gương, có halo glow dịu quanh máy, viền và bezel rõ ràng. Vùng màn hình bên trong cố tình để trống (sẽ compose một nhân vật vào sau).

Bố cục: nền đen phẳng bên ngoài chiếc điện thoại, để dễ tách lớp foreground frame.

Style: cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Palette: cold cyan, deep navy, cool gray, low saturation.

Trong ảnh không có chữ/logo/watermark, không có UI element, không có app icon, không có nhân vật trong màn hình. Tránh phong cách anime chibi và 3D nhựa.
```

### 05c · Real M standing in front of phone — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit "phòng trọ" (hoodie xám oversized, tóc búi lỏng). Đứng quay lưng một phần về phía camera, ngẩng lên nhìn màn hình điện thoại đang phát sáng, dáng nhỏ bé và bất an, silhouette được rim light xanh lạnh từ màn hình, khuôn mặt thấy một phần ở góc 3/4 từ phía sau.

Bố cục: full body, nền xám trung tính phẳng để dễ tách nhân vật khi compose vào background 05a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: cold cyan, deep navy, cool gray, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có ánh sáng ấm, không có nụ cười. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 05d · Online M inside the screen — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — phiên bản "online persona".

Style nhân vật: sweater hồng pastel, makeup natural-glam, tóc chải gọn. Cười rạng rỡ với ánh mắt tự tin, tạo dáng như chân dung selfie nhìn qua màn hình điện thoại. Saturation cao hơn các scene khác một chút, beauty light ấm từ phía trước.

Bố cục: nền xám trung tính phẳng — ảnh này sẽ được compose vào bên trong phone screen ở 05b.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette ấm: pastel pink, cream, soft gold.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background tối, không có bóng đổ cứng, không có biểu cảm mệt mỏi buồn bã. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 05e · Glitch overlay (optional)

```
Hãy vẽ một lớp overlay glitch số tinh tế: đường RGB split mảnh, scanline ngang mờ, nhiễu tĩnh nhẹ.

Bố cục: nền đen phẳng để compose dùng blend mode "screen" trên React layer. Không có nhân vật, không có cảnh.

Palette: cold cyan, magenta, trắng — opacity thấp.

Trong ảnh không có chữ/logo/watermark, không có distortion quá nặng.
```

---

## Scene 06 – Relationship map

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 06a–06d)

```
[SCENE ANCHOR — Scene 06: Relationship map]

Setting: không gian trừu tượng kiểu vũ trụ tối — gradient navy sâu chuyển sang đen, các chấm nhỏ rải rác như chòm sao, glow nebula tím dịu. Có khoảng negative space sạch ở chính giữa khung.

Layout cố định (mọi layer phải khớp):
- M đứng ở CHÍNH GIỮA khung, full body, góc máy hơi thấp (slight low angle).
- 7 icon glow line-art phát sáng (Family, School, Friends, Social media, City, Expectations, Inner emotion) đặt xung quanh M theo VÒNG TRÒN, mỗi icon cách M khoảng đều nhau.
- Các sợi năng lượng cong mảnh phát sáng nối từ mỗi icon vào M; một số sợi căng thẳng và thẳng, một số sợi rối hoặc kéo lệch sang các góc đối nghịch nhau, có bloom dịu và các đốm sáng nhỏ dọc theo mỗi sợi.

Nhân vật M: đứng giữa, hai tay HƠI XOÈ SANG HAI BÊN như đang bị các sợi dây vô hình kéo, nhìn thẳng vào camera với biểu cảm trung tính trầm tư. Mặc sweater oversized kem be mặc định.

Ánh sáng: rim light ấm dịu từ phía TRÊN ĐỈNH ĐẦU M; phần còn lại của cơ thể tông lạnh; glow cyan/tím phát ra từ icon và các sợi năng lượng.

Góc máy: wide cinematic 16:9, hơi low angle.

Palette: midnight blue, deep violet, cool gray với warm amber accents (cho rim light trên đầu), low saturation.
```

### 06a · Background

```
Hãy vẽ một background trừu tượng kiểu vũ trụ tối: gradient navy sâu chuyển dần sang đen, các chấm nhỏ rải rác như chòm sao, glow nebula màu tím dịu, có khoảng negative space sạch ở giữa khung để compose nhân vật vào sau. Không có nhân vật, không có chữ.

Bố cục: ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có ánh nắng ngày, không có foreground rối. Tránh phong cách anime chibi và 3D nhựa.
```

### 06b · Character (M) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit mặc định: sweater kem be. Đứng chính giữa khung, hai tay hơi xoè sang hai bên như đang bị các sợi dây vô hình kéo, nhìn thẳng vào camera với biểu cảm trung tính, trầm tư.

Ánh sáng: rim light ấm dịu từ phía trên, phần còn lại tông lạnh. Full body, góc máy hơi thấp.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 06a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có dáng tạo cường điệu. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 06c · Node icons (7 PNG riêng)

```
Hãy vẽ một bộ 7 icon biểu tượng phát sáng theo style minimalist line-art, halo glow dịu, stroke weight đều nhau. Mỗi icon đặt trên một ô riêng trong cùng canvas, nền xám trung tính phẳng để dễ tách thành PNG riêng từng icon.

Danh sách 7 icon:
1) Family — hai bóng người lớn cùng một đứa trẻ nhỏ.
2) School — một chiếc mũ tốt nghiệp.
3) Friends — ba chấm nối thành hình tam giác.
4) Social media — trái tim cách điệu trong khung vuông bo góc.
5) City — skyline tối giản 3 toà nhà.
6) Expectations — mũi tên hướng lên với vương miện nhỏ phía trên.
7) Inner emotion — ngọn lửa nhỏ đang lập lòe.

Style: painterly digital illustration, glow cyan và tím dịu.

Trong ảnh không có chữ/logo/thương hiệu, không có chi tiết photorealistic phức tạp, không có nhân vật, không có background đặc. Tránh phong cách cartoon mascot và 3D nhựa.
```

### 06d · Connection lines / energy strands (overlay)

```
Hãy vẽ các sợi năng lượng cong mảnh phát sáng tỏa từ một điểm trung tâm vô hình ra nhiều hướng. Một số sợi căng thẳng, một số rối hoặc kéo theo các góc đối nghịch nhau, có bloom dịu và các đốm sáng nhỏ dọc theo mỗi sợi.

Bố cục: nền đen phẳng để compose dùng blend mode "screen" trên React layer. Không có nhân vật.

Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ/logo/watermark, không có hình khối đặc. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 07 – Hai phiên bản hòa lại

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 07a–07e)

```
[SCENE ANCHOR — Scene 07: Hai phiên bản hòa lại]

Setting: VẪN căn phòng trọ nhỏ ở Việt Nam trong Scene 03 và 05 (cùng một phòng — giữ đúng layout: giường, bàn, vị trí cửa sổ), nhưng giờ là BÌNH MINH.

Layout cố định (mọi layer phải khớp):
- Cửa sổ với tấm rèm mở hé phía sau lưng M, ánh nắng ấm xuyên qua, hạt bụi bay trong tia nắng.
- Tường phòng bắt ánh vàng ấm pha với ánh xanh lạnh còn sót lại từ đêm.
- M đứng ngay cạnh cửa sổ, half-body, góc 3/4 nhẹ.
- Phía sau lưng M, BÊN CẠNH M là ghost layer của "online persona M" (sweater hồng pastel, opacity rất thấp, các cạnh đang tan dần thành hạt sáng).
- Các floating UI cards từ Scene 02/04 giờ NHỎ HƠN, trôi RA XA khỏi M ra các góc khung, opacity ~40%, tan vào hạt sáng ấm.
- (Tùy chọn) Một silhouette người bạn sinh viên Việt Nam đứng hơi sau lưng M, một tay đặt nhẹ lên vai M (mặt không chi tiết).

Nhân vật M (merged — phiên bản hòa lại):
- Mặc sweater oversized kem be với makeup natural dịu (outfit hybrid).
- Nửa nụ cười THẬT, ánh mắt bình tĩnh và present.
- Đứng cạnh cửa sổ, một tay có thể đặt nhẹ lên khung cửa.

Ánh sáng: ánh vàng ấm bình minh từ cửa sổ (camera trái) chiếu lên một nửa mặt M; ánh xanh lạnh đêm sót lại chiếu nửa mặt kia; HAI NGUỒN gặp nhau dịu dàng ở đường giữa mặt M.

Góc máy: ảnh ngang 16:9, half-body M, view 3/4 nhẹ.

Palette: warm amber và honey gold pha với cool blue và cool gray, low–mid saturation. Palette chuyển tiếp từ Scene 03/05 sang Scene 08.
```

### 07a · Background

```
Hãy vẽ vẫn chính căn phòng trọ nhỏ ở Việt Nam như scene 03 và 05, nhưng lần này có ánh nắng sớm ấm xuyên qua tấm rèm mở hé, hạt bụi lơ lửng trong tia nắng, tường bắt ánh vàng ấm pha với ánh xanh lạnh còn sót lại từ đêm. Không có nhân vật.

Bố cục: ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette chuyển tiếp: xanh lạnh dần thành amber ấm và vàng mật ong, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có tối nặng, không có tương phản gắt. Tránh phong cách anime chibi và 3D nhựa.
```

### 07b · Merged M (character) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit hybrid: sweater kem be với makeup natural dịu. Đứng cạnh cửa sổ, nửa nụ cười thật dịu, ánh mắt bình tĩnh và present.

Ánh sáng: ánh vàng ấm bên một nửa mặt, ánh xanh lạnh còn sót bên nửa còn lại — hai nguồn sáng gặp nhau dịu dàng ở đường giữa mặt. Half-body, góc 3/4 nhẹ.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 07a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: warm amber và gold pha với cool blue và cool gray, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M (không nhân đôi), không có background phức tạp, không có biểu cảm cường điệu. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 07c · Fading online persona (optional ghost layer) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — phiên bản "online persona": sweater hồng pastel, makeup glam.

Render ở opacity rất thấp như một bóng ma trong suốt, sẽ đặt chồng phía sau merged M, các cạnh tan dần thành hạt sáng dịu.

Bố cục: nền đen phẳng để compose dùng blend mode "screen" trên React layer.

Style: painterly, soft cinematic lighting, subtle film grain. Palette: pink-violet glow dịu, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có render đặc cứng, không có viền nét gắt, không có background. Khuôn mặt cân đối, đủ ngón tay. Tránh phong cách anime chibi và 3D nhựa.
```

### 07d · Fading social cards (props)

```
Hãy vẽ vẫn các floating UI card như Scene 02d, nhưng giờ nhỏ hơn, trôi ra xa khỏi trung tâm, các cạnh tan dần thành hạt sáng ấm, opacity tổng khoảng 40%.

Bố cục: nền xám trung tính phẳng để dễ tách thành PNG riêng từng card khi compose.

Style: painterly, soft cinematic lighting, subtle film grain. Palette: midnight blue, deep violet, cool gray with warm amber accents, low saturation.

Trong ảnh không có chữ thật, không typography đọc được, không logo, không tên thương hiệu, không có card nét sắc đặc, không có nhân vật. Tránh phong cách anime chibi và 3D nhựa.
```

### 07e · Friend silhouette (optional)

```
Hãy vẽ một silhouette dịu của một người bạn sinh viên Việt Nam tuổi đại học đứng hơi phía sau M, một tay đặt nhẹ lên vai M, backlight ấm từ cửa sổ, khuôn mặt không có chi tiết rõ.

Bố cục: chỉ vẽ riêng nhân vật bạn (không vẽ M ở đây), trên nền xám trung tính phẳng để dễ tách lớp khi compose.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette: warm amber và gold với cool gray bên vùng bóng, low saturation.

Trong ảnh không có chữ/logo/watermark, không có khuôn mặt nhận diện rõ, không có nhân vật M, không có background phức tạp. Tránh phong cách anime chibi và 3D nhựa.
```

---

## Scene 08 – Kết / Tìm lại mình

### Scene Anchor (paste nguyên xi vào ĐẦU mỗi prompt layer 08a–08d)

```
[SCENE ANCHOR — Scene 08: Kết / Tìm lại mình]

Setting: ban công nhỏ hoặc cửa sổ ký túc xá vào lúc BÌNH MINH, view nhìn ra skyline thành phố Việt Nam tĩnh lặng.

Layout cố định (mọi layer phải khớp):
- Thanh chắn ban công chiếm 1/3 DƯỚI khung hình.
- Trên thanh chắn: một chiếc smartphone ÚP MẶT, một cốc sứ trà ấm bốc khói mảnh, một chậu cây nhỏ bên cạnh.
- M đứng phía trong ban công, hai tay đặt nhẹ trên thanh chắn, half-body, view 3/4 nhẹ từ phía sau-bên hông để thấy profile bình tĩnh của M.
- Phía trước M (xa, qua ban công): skyline thành phố các toà nhà silhouette xanh lạnh, bầu trời hồng-vàng dịu, mây thấp bắt ánh ấm, vài con chim sớm trên trời.

Nhân vật M: mặc áo len mỏng VÀNG NHẠT mềm, tóc xõa tự nhiên, gió nhẹ thổi tóc bay nhẹ (outfit "kết").

Ánh sáng: ánh bình minh ấm chiếu từ phía bên ngoài (trước mặt M, từ phía skyline) lên mặt và tóc M; phần lưng M có cool blue dịu sót lại.

Góc máy: wide cinematic 16:9, từ phía sau-bên hông M, half-body. M không quay mặt vào camera.

Palette: pink, peach, gold dịu ấm với phần xa xanh lạnh, low–mid saturation.
```

### 08a · Background

```
Hãy vẽ view nhìn từ ban công nhỏ hoặc cửa sổ ký túc xá lúc bình minh, hướng ra skyline thành phố Việt Nam tĩnh lặng: bầu trời hồng-vàng dịu, mây thấp bắt ánh ấm, các toà nhà xa silhouette xanh lạnh, vài con chim sớm trên trời. Không có nhân vật.

Bố cục: wide cinematic shot. Ảnh ngang 16:9.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, shallow depth of field, subtle film grain. Palette dịu ấm: pink, peach, gold với phần xa xanh lạnh, low–mid saturation.

Trong ảnh không có chữ/logo/watermark, không có người, không có đêm tối gắt, không có bão. Tránh phong cách anime chibi và 3D nhựa.
```

### 08b · Foreground (balcony props)

```
Hãy vẽ thanh chắn ban công chiếm 1/3 dưới khung hình: một chiếc smartphone úp mặt trên thanh chắn, một cốc sứ trà ấm bốc khói mảnh, một chậu cây nhỏ bên cạnh. Không có nhân vật.

Bố cục: nền xám trung tính phẳng để dễ tách lớp foreground khi compose vào background 08a.

Style: cinematic digital illustration, semi-realistic, painterly, soft cinematic lighting, subtle film grain. Palette: warm amber và honey gold với cool gray accents, low saturation.

Trong ảnh không có chữ/logo trên điện thoại, không có watermark, không có ánh sáng nhân tạo gắt, không có người. Tránh phong cách anime chibi và 3D nhựa.
```

### 08c · Character (M) — đính kèm reference sheet 6.1

> Upload **reference sheet 6.1** vào turn chat này trước khi paste prompt.

```
Hãy vẽ nhân vật M — nữ sinh viên Việt Nam 19 tuổi trong ảnh tham chiếu đính kèm — giữ đúng khuôn mặt và dáng người.

M mặc outfit "kết": áo len vàng nhạt mềm, tóc xõa tự nhiên. Đứng ở ban công, hai tay đặt nhẹ trên thanh chắn, nhìn ra phía bình minh, góc máy hơi từ phía sau ở view 3/4 để thấy profile bình tĩnh của M.

Ánh sáng: ánh bình minh ấm chiếu lên mặt và tóc, gió nhẹ thổi tóc bay nhẹ. Half-body.

Nền: xám trung tính phẳng để dễ tách nhân vật khi compose vào background 08a.

Style: cinematic digital illustration, semi-realistic, painterly brush strokes, soft cinematic lighting, subtle film grain. Palette dịu ấm: pink, peach, gold, low saturation.

Trong ảnh không có chữ/logo/watermark, chỉ một nhân vật M, không có background phức tạp, không có biểu cảm mệt buồn, không có ánh đêm gắt. Khuôn mặt cân đối, đủ ngón tay, đôi mắt đối xứng. Tránh phong cách anime chibi và 3D nhựa.
```

### 08d · Atmosphere overlay

```
Hãy vẽ một lớp overlay light leak ấm dịu xuyên qua khung hình, lens flare nhẹ từ phía bình minh, các hạt bokeh ấm bay nhẹ, subtle film grain.

Bố cục: nền đen phẳng để compose dùng blend mode "screen" trên React layer. Không có nhân vật, không có cảnh.

Palette: warm amber, peach, soft gold — opacity thấp.

Trong ảnh không có chữ/logo/watermark, không có tông xanh lạnh, không có tối nặng.
```

---

## 6.x · Lưu ý khi generate với ChatGPT

- Generate **character sheet (6.1)** trước. Sau đó với mỗi scene có nhân vật M: **upload reference sheet vào cùng turn chat** trước khi paste prompt — ChatGPT sẽ tự giữ khuôn mặt nhất quán.
- Generate **background** ở tỉ lệ 16:9 đầy đủ. Với **character/props/overlay**: prompt đã yêu cầu nền xám trung tính phẳng (cho character/props) hoặc nền đen phẳng (cho overlay sẽ blend "screen"). Sau khi tải về, dùng `remove.bg`, Photoshop hoặc `rembg` để tách nền nếu cần PNG trong suốt.
- Giữ **cùng hướng ánh sáng** giữa các layer của cùng 1 scene (đã note sẵn trong từng prompt) để khi compose không bị lệch.
- Nếu kết quả lệch reference quá nhiều, gõ follow-up: *"Vẽ lại, giữ đúng khuôn mặt và kiểu tóc của nhân vật trong ảnh tham chiếu đầu tiên. Đừng thay đổi nét mặt."*
- Nếu DALL·E thêm chữ ngoài ý muốn lên ảnh, gõ follow-up: *"Vẽ lại nhưng tuyệt đối không có chữ hay ký tự nào trong ảnh."*
- Ghép layer trong React Spring theo thứ tự (back → mid → character → front → overlay) để dùng parallax như đã mô tả ở mục 4.

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
