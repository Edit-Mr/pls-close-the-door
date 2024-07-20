忍我弟很久了，每次出房間都不關門。開冷氣開個幾秒整個房間就熱起來了，真的是受不了，因此做了這個專案。

## 使用方式

把閒在箱子裡的 micro:bit 拿出來玩玩，會以開機時的距離當作是關門時的距離。只要距離超過五公分，也就是當門被打開時超過五秒就會開始逼逼叫，直到關門為止。

### 重設距離

點擊 A 或是 reset 鍵即可重新綁定關門距離。



## 材料

* micro:bit (一二代皆可)
* HC-SR04 超聲波測距模組
* 一顆蜂鳴器 (可以吵到讓人不得不回來關門，永生難忘那種)。
## 接線

* HC-SR04
  * `ECHO` - `P1`
  * `TRI`G - `P2`
  * `VCC` - `3V`
  * `GND` - `GND`
* 蜂鳴器
  * `+` - P0
  * `-` - GND



## 編輯此專案

編輯 MakeCode 中的儲存庫。

* 開啟 [https://makecode.microbit.org/](https://makecode.microbit.org/)
* 按一下**匯入**，然後按一下**匯入 URL**
* 貼上 **https://github.com/edit-mr/pls-close-the-door** 並按一下匯入

#### 中繼資料 (用於搜索、渲染)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
