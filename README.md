# REST API 基本講座		
LinkedInラーニングの「REST API 基本講座」コース用のリポジトリです。このコースは [LinkedInラーニング][lil-course-url]で視聴できます。

![REST API 基本講座][lil-thumbnail-url] 
Webサイトの制作を行っている方なら一度は耳にしたことがあるであろうAPI。Webサイトやスマホアプリはもとより生活家電など私たちの生活のさまざまな場面で広く活用されており、今や必要不可欠な技術となっています。数あるAPIの中でも特によく用いられているREST APIを使えば、外部で提供されている高度な機能やサービスを自身のWebサイトやスマホアプリに簡単に組み込むことができ、スマートでインタラクティブなWebサイトを作ることができます。このコースではREST APIの基礎を学んだのち、実際にREST APIにアクセスしてリクエストやレスポンスを処理する方法を解説します。REST APIがもつ６つの制約や通信フローといったRESTfulやAPIの基本はもちろん、REST APIを利用するさいに必要なリクエストの組み立て方やレスポンスの中身などについて理解を深めながら、実際にJavaScriptを使ってREST APIにアクセスし、その結果を取得する手順を説明します。

## リポジトリの使い方
このリポジトリには必要に応じてブランチが設けられています。ブランチのポップアップメニューを使用して、使用するブランチに切り替えたあとにコースを視聴してください。またURLに`「/tree/ブランチ名」`を追加することで、アクセスしたいブランチに移動することも可能です。

## ブランチ
ブランチはレッスンごとに作成されている場合があります。その場合はブランチ名に`「章番号_レッスン番号」`が付けられています。例えば`「02_03」`という名前のブランチは、2章の上から3番目のレッスン用のブランチとなります。

レッスン前と後のコードを格納しているブランチもあります。該当ブランチには「開始時」（beginning）を表す`「b」`と、「終了時」（ending）を表す`「e」` がブランチ名についています。`「b」`のブランチにはレッスン開始時点のコードが、`「e」`のブランチにはレッスン終了時点のコードが格納されています。また「main」のブランチにはコードの最終形が格納されています。

ファイルに変更を加えた後に、エクササイズファイルのブランチを次のブランチに切り替えたさい、次のようなメッセージが表示されることがあります。

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

この問題を解決するには：
	
次のコマンドで変更を加えます：git add .
次のコマンドで変更をコミットします：git commit -m "some message"

## GitHub Codespacesについて
プログラミング言語を学ぶ最良の方法は、実際にそれを使用することです。それがこのコースがGitHub Codespacesと統合されている理由です。GitHub Codespacesは、あなたが普段使っているIDEのすべての機能を提供するクラウド上の手軽な開発環境です。ローカルマシンのセットアップも必要ありません。 GitHub Codespacesを使えば、あなたが職場で使っている他のツールを使用しながら、どのパソコンからでもいつでもプログラミングの実践的な練習ができます。「このコースでGitHub Codespacesを使うには」の動画をチェックして、その使い方を学びましょう。

### インストラクター

**渡辺 知規**

_Webデザイナー、Webプログラマー_

この講師の他のコースを視聴する：[LinkedInラーニング](https://www.linkedin.com/learning/instructors/8515378)

[lil-course-url]: https://www.linkedin.com/learning/rest-api-essential-training
[lil-thumbnail-url]: 