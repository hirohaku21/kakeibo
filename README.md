# vue.jsを用いた家計簿アプリ

## hirohaku21/kakeibo

[動作はこちらから](https://hirohaku21.github.io/kakeibo/)  

※GoogleChromeからアクセスしてください  

リロードせず投稿時に即時反映される家計簿です。  


# DEMO

下記のgifを参照してください。
### 入力例
日付: 2020-02-26  
項目: 食費  
金額: 5000  
内容: 友達とディナー  
内訳: フレンチ料理  
![demo](https://raw.githubusercontent.com/wiki/hirohaku21/kakeibo/demo.gif)


### 新規作成  
日付、項目、金額、内容、内訳はすべて**必須入力**です。未記入から*追加*ボタンを押すとアラートが表示されます。  
### 入力条件  
日付: カーソル入力および肩式に沿ったキーボード入力  
項目: カーソル入力  
金額: 数字入力  
内容: テキスト入力  
内訳: テキスト入力  
### リスト
更新ボタンを押すと*内容*の上書きをして保存されます。  
支出ボタンを押すと*収入*へ変更され保存されます。デフォルトでは支出となっています。  
削除ボタンは**Shift**ボタンを押しながら押すと実行されます。  
### 条件検索
すべて: リストに投稿された内容をすべて表示します。  
支出: 状態が"支出"となっているのを表示します。  
収入: 状態が"収入"となっているのを表示します。  
日付選択: 指定した日付と合うリストを表示します。  
項目選択: 指定した項目に合うリストを表示します。  


# Features

- 新規投稿された内容に対して、即時反映されます。
- 作成された日付、項目、金額、内容、内訳は保存されます。

# Requirement

**Desktop版 GoogleChrome**　バージョン: 79.0.3945.130（Official Build） （64 ビット）

# Installation

下記よりDesktop版のGoogleChromeのダウンロードをしてください。  

https://www.google.com/chrome/


# Note

内容が更新されていきます。適時、コミット履歴よりご確認ください

# Author

作成情報を列挙する

- 作成者　hihrohaku21
- 連絡方法　
- 問題点や指摘　https://github.com/hirohaku21/kakeibo/issues  


# License
ライセンスを明示する

<p xmlns:dct="http://purl.org/dc/terms/">
  <a rel="license" href="http://creativecommons.org/publicdomain/mark/1.0/">
    <img src="https://licensebuttons.net/p/mark/1.0/88x31.png"
    style="border-style: none;" alt="Public Domain Mark" />
  </a>
  <br />
  この作品（
  <a href="https://github.com/hirohaku21" rel="dct:creator">
    <span property="dct:title">
      hirohaku21
    </span>
  </a>
  )による
  <span property="dct:title">
    家計簿アプリ
  </span>
  として 
  <a href="mailto:hirohaku0201-inquiry@yahoo.co.jp">
  <span resource="[_:publisher]" rel="dct:publisher">
    <span property="dct:title">
      Toshihiro Uetsuki
    </span>
  </span>
  </a>
  によって特定されています）は著作権法上の制約が知られている限り存在していません。
</p>
