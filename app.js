
/**
 * REST API
 */

// APIのパス
const apiPath = 'https://lmg1tnw1k3.execute-api.ap-northeast-1.amazonaws.com/v1/api/';

// APIキー
const apiKey = 'BGU1V3ZoCO7Lq5AT59XKh6nLYCKXm1mkk0kOyps1';

// 結果エリア
const resultStatusCodeArea = document.getElementById('result-status-code');
const resultHeadersArea = document.getElementById('result-headers');
const resultBodyArea = document.getElementById('result-body');

// 結果エリア初期テキスト
const resultStatusCodeAreaText = 'ここに、ステータスコードの結果が表示されます。';
const resultHeadersAreaText = 'ここに、レスポンスヘッダーの結果が表示されます。';
const resultBodyAreaText = 'ここに、レスポンスボディの結果が表示されます。';

// 結果エリアをリセット
const resultResetButton = document.getElementById('result-reset');
resultResetButton.addEventListener('click', () => {
  resultStatusCodeArea.innerHTML = resultStatusCodeAreaText;
  resultHeadersArea.innerHTML = resultHeadersAreaText;
  resultBodyArea.innerHTML = resultBodyAreaText;
});

// 結果エリアを初期化
resultResetButton.click();



// GETボタンを取得
const getButton = document.getElementById('get');

//　GETボタンをクリック時に、GETメソッドで「REST API」にアクセス。
getButton.addEventListener('click', async () => {

  // 結果エリアをリセット
  resultResetButton.click();

  // パラメータを取得
  const city = document.getElementById('get-param').value;

  // リクエストパスを作成
  const request_path = apiPath + 'weather?city=' + city;

  // APIにGETでアクセス
  const response = await fetch(request_path, {
    headers: {
      'x-api-key': apiKey, // リクエストヘッダーにAPIキーを設定
    }
  });

  // ステータスコード取得
  const statusCode = response.status;

  // レスポンスヘッダー取得しJSON形式に変換
  const headers = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // レスポンスボディをresponseオブジェクトをJSONデータとして取得
  const data = await response.json();

  // 結果エリアに表示：ステータスコード
  resultStatusCodeArea.innerHTML = statusCode;

  // 結果エリアに表示：レスポンスヘッダー
  resultHeadersArea.innerHTML = JSON.stringify(headers, null, 2);

  // 結果エリアに表示：レスポンスボディ
  resultBodyArea.innerHTML = JSON.stringify(data, null, 2);
});



// POSTボタンを取得
const postButton = document.getElementById('post');

//　POSTボタンクリック時に、POSTメソッドで「REST API」にアクセス。
postButton.addEventListener('click', async () => {

  // 結果エリアをリセット
  resultResetButton.click();

  // パラメータを取得
  const city = document.getElementById('post-param').value;

  // APIにPOSTでアクセス
  const response = await fetch(apiPath + 'rain', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey, // リクエストヘッダーにAPIキーを設定
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ // JSON形式をテキストに変換してリクエストボディを設定
      'city': city,
    }),
  });

  // ステータスコード取得
  const statusCode = response.status;

  // レスポンスヘッダー取得しJSON形式に変換
  const headers = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // レスポンスボディをresponseオブジェクトをJSONデータとして取得
  const data = await response.json();

  // 結果エリアに表示：ステータスコード
  resultStatusCodeArea.innerHTML = statusCode;

  // 結果エリアに表示：レスポンスヘッダー
  resultHeadersArea.innerHTML = JSON.stringify(headers, null, 2);

  // 結果エリアに表示：レスポンスボディ
  resultBodyArea.innerHTML = JSON.stringify(data, null, 2);
});