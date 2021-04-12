'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** Do not edit! This file is auto-generated. */
const categories = ['transport', 'ui', 'device', 'sound', 'leisure', 'text', 'location', 'time', 'food-drinks', 'shape', 'item', 'nature', 'social'];
const pepiconCategoryDic = {
    'airplane': 'transport',
    'angle-down': 'ui',
    'angle-left': 'ui',
    'angle-right': 'ui',
    'angle-up': 'ui',
    'battery': 'device',
    'bell': 'sound',
    'bell-off': 'sound',
    'bicycle': 'transport',
    'bluetooth': 'ui',
    'book': 'leisure',
    'bookmark': 'text',
    'bookmark-filled': 'text',
    'building': 'location',
    'calculator': 'device',
    'calendar': 'time',
    'camera': 'device',
    'can': 'food-drinks',
    'car': 'transport',
    'cart': 'leisure',
    'checkmark': 'ui',
    'circle': 'shape',
    'circle-filled': 'shape',
    'clipboard': 'text',
    'clock': 'time',
    'cloud': 'ui',
    'cloud-down': 'ui',
    'cloud-down-filled': 'ui',
    'cloud-filled': 'ui',
    'cloud-up': 'ui',
    'cloud-up-filled': 'ui',
    'coctail': 'food-drinks',
    'color-picker': 'ui',
    'contract': 'ui',
    'controller': 'leisure',
    'credit-card': 'item',
    'cup': 'food-drinks',
    'division': 'shape',
    'dots-x': 'ui',
    'dots-y': 'ui',
    'dress': 'item',
    'duplicate': 'ui',
    'electricity': 'nature',
    'exclamation': 'text',
    'exclamation-filled': 'text',
    'expand': 'ui',
    'eye': 'ui',
    'eye-closed': 'ui',
    'eye-off': 'ui',
    'file': 'ui',
    'film-frame': 'leisure',
    'flag': 'location',
    'flower': 'nature',
    'flower-bud': 'nature',
    'folder': 'ui',
    'gear': 'ui',
    'gift': 'social',
    'grab': 'ui',
    'hamburger': 'food-drinks',
    'headphone': 'sound',
    'heart': 'social',
    'house': 'location',
    'info': 'text',
    'info-filled': 'text',
    'internet': 'location',
    'key': 'item',
    'knive-fork': 'food-drinks',
    'letter': 'social',
    'lock-closed': 'item',
    'lock-open': 'item',
    'loop': 'ui',
    'loop-minus': 'ui',
    'loop-plus': 'ui',
    'magnet': 'item',
    'map': 'transport',
    'microphone': 'sound',
    'minus': 'shape',
    'monitor': 'device',
    'monitor2': 'device',
    'moon': 'nature',
    'moon-filled': 'nature',
    'motorcycle': 'transport',
    'music-note-double': 'sound',
    'music-note-single': 'sound',
    'open': 'ui',
    'paint-pallet': 'leisure',
    'pen': 'text',
    'person': 'social',
    'person-filled': 'social',
    'phone': 'social',
    'photo-camera': 'device',
    'pill': 'item',
    'pinpoint': 'location',
    'pinpoint-filled': 'location',
    'pinpoint-off': 'location',
    'pinpoint-off-filled': 'location',
    'plus': 'shape',
    'power': 'ui',
    'printer': 'device',
    'refresh': 'ui',
    'reload': 'ui',
    'scissors': 'item',
    'send': 'social',
    'share-android': 'social',
    'share-ios': 'social',
    'smartphone': 'device',
    'smartphone-notch': 'device',
    'smartphone2': 'device',
    'soft-drink': 'food-drinks',
    'speaker-high': 'sound',
    'speaker-low': 'sound',
    'speaker-off': 'sound',
    'square': 'shape',
    'square-filled': 'shape',
    'star': 'nature',
    'star-filled': 'nature',
    'sun': 'nature',
    'sun-filled': 'nature',
    'syringe': 'item',
    't-shirt': 'item',
    'taxi': 'transport',
    'television': 'device',
    'text-bubble': 'social',
    'times': 'shape',
    'tool': 'ui',
    'train': 'transport',
    'trash': 'ui',
    'triangle-down': 'shape',
    'triangle-down-filled': 'shape',
    'triangle-left': 'shape',
    'triangle-left-filled': 'shape',
    'triangle-right': 'shape',
    'triangle-right-filled': 'shape',
    'triangle-up': 'shape',
    'triangle-up-filled': 'shape',
    'truck': 'transport',
    'umbrella': 'item',
    'wifi': 'ui',
};

/** Do not edit! This file is auto-generated. */
const synonyms$1 = {
    'airplane': ['aeroplane', 'fly', 'travel', 'vacation', 'trip', 'flight', 'airport'],
    'angle-down': ['arrow-down', 'chevron-down', 'bracket-down', 'to-bottom', 'go-down'],
    'angle-left': ['arrow-left', 'chevron-left', 'bracket-left', 'bracket-open', 'opening-bracket', 'less-than', 'back'],
    'angle-right': ['arrow-right', 'chevron-right', 'bracket-right', 'bracket-close', 'closing-bracket', 'greater-than', 'more-than', 'forward'],
    'angle-up': ['arrow-up', 'chevron-up', 'bracket-up', 'to-top', 'go-up'],
    'battery': ['charge'],
    'bell': ['notification', 'attention', 'alert'],
    'bell-off': ['no-notification', 'no-attention', 'quiet', 'silent', 'no-alert'],
    'bicycle': ['bike'],
    'bluetooth': [],
    'book': ['read', 'bookmark'],
    'bookmark': ['flag', 'clip'],
    'bookmark-filled': ['flag', 'clip'],
    'building': ['office', 'sky-scraper', 'business', 'work', 'workplace', 'headquarters', 'enterprise', 'company', 'firm', 'bureau', 'agency', 'corporation'],
    'calculator': ['calculate'],
    'calendar': ['date', 'when'],
    'camera': ['record', 'video'],
    'can': ['pepsi', 'soft-drink', 'fizzy', 'cola', 'cold-drink', 'refresher', 'juice'],
    'car': ['automobile', 'drive'],
    'cart': ['shopping', 'payout', 'commerce', 'transaction', 'buy', 'purchase'],
    'checkmark': ['check', 'toggle', 'tick', 'ok', 'confirmed'],
    'circle': ['bullet', 'ball'],
    'circle-filled': ['bullet', 'ball'],
    'clipboard': ['copy'],
    'clock': ['time', 'timer', 'countdown'],
    'cloud': ['upload', 'online', 'storage', 'save'],
    'cloud-down': ['download', 'storage', 'retrieve', 'fetch', 'local', 'load'],
    'cloud-down-filled': ['download', 'storage', 'retrieve', 'fetch', 'local', 'load'],
    'cloud-filled': ['upload', 'online', 'storage', 'save'],
    'cloud-up': ['upload', 'storage', 'save'],
    'cloud-up-filled': ['upload', 'storage', 'save'],
    'coctail': ['alcohol', 'tropical'],
    'color-picker': [],
    'contract': ['shrink', 'close', 'zoom-out', 'minimize'],
    'controller': ['video-game', 'console'],
    'credit-card': ['master-card', 'visa', 'cashless', 'payment', 'checkout'],
    'cup': ['coffee', 'hot-drink'],
    'division': ['divide'],
    'dots-x': ['dots-horizontal', 'more', 'details', 'menu'],
    'dots-y': ['dots-vertical', 'more', 'details', 'menu'],
    'dress': ['one-piece', 'clothing', 'gown', 'frock', 'garment'],
    'duplicate': ['copy'],
    'electricity': ['thunder', 'lightning'],
    'exclamation': ['bang', 'exclamation-mark', 'exclamation-point', 'shriek', 'pling', 'note-of-admiration', 'warning', 'danger', 'error'],
    'exclamation-filled': ['bang', 'exclamation-mark', 'exclamation-point', 'shriek', 'pling', 'note-of-admiration', 'warning', 'danger', 'error'],
    'expand': ['fullscreen', 'open', 'zoom-in', 'maximize'],
    'eye': ['password-visible', 'see', 'watch', 'awake'],
    'eye-closed': ['password-hidden', 'invisible', 'hide', 'secret', 'asleep'],
    'eye-off': ['password-hidden', 'invisible', 'hide', 'secret', 'not-allowed', 'no-access'],
    'file': ['document', 'record', 'note', 'data', 'archive'],
    'film-frame': ['picture', 'movie', 'roll', 'feature', 'tv', 'television', 'programme', 'motion-picture', 'animation', 'flick', 'cinema'],
    'flag': ['banner', 'country', 'important', 'pin'],
    'flower': ['tulip'],
    'flower-bud': ['daisy'],
    'folder': ['container', 'binder', 'files', 'archive', 'save', 'record', 'keep'],
    'gear': ['settings', 'cogwheel', 'configuration', 'mechanical', 'machinery'],
    'gift': ['present', 'surprise', 'give'],
    'grab': ['handle', 'move', 'drag'],
    'hamburger': ['fast-food'],
    'headphone': ['headset', 'earphone', 'music', 'listen', 'anc'],
    'heart': ['love', 'like'],
    'house': ['home', 'residence'],
    'info': ['information', 'help', 'hint', 'guide'],
    'info-filled': ['information', 'help', 'hint', 'guide'],
    'internet': ['web', 'cyber', 'remote'],
    'key': ['lock', 'unlock', 'encrypt', 'decrypt', 'safe', 'secret', 'solution', 'answer'],
    'knive-fork': ['eat', 'cutlery'],
    'letter': ['email', 'post', 'inbox'],
    'lock-closed': ['lock', 'encrypt'],
    'lock-open': ['unlock', 'decrypt'],
    'loop': ['zoom', 'magnify', 'detective'],
    'loop-minus': ['zoom-out', 'magnify-out', 'farther', 'further'],
    'loop-plus': ['zoom-in', 'magnify-in', 'closer'],
    'magnet': ['attraction', 'repel', 'repulsion'],
    'map': ['location', 'directions'],
    'microphone': ['record', 'voice', 'radio'],
    'minus': ['dash', 'hyphen', 'line'],
    'monitor': ['computer', 'desktop', 'screen'],
    'monitor2': ['computer', 'desktop', 'screen'],
    'moon': ['dark-mode', 'night', 'lights-out'],
    'moon-filled': ['dark-mode', 'lights-out'],
    'motorcycle': ['bike'],
    'music-note-double': ['score', 'solfege', 'song'],
    'music-note-single': ['score', 'solfege', 'song'],
    'open': ['link', 'new-tab', 'external', 'go'],
    'paint-pallet': ['painter', 'art'],
    'pen': ['edit', 'write', 'pencil', 'draw'],
    'person': ['human', 'man', 'someone', 'unknown', 'identity', 'profile', 'you'],
    'person-filled': ['human', 'man', 'someone', 'unknown', 'identity', 'profile', 'you'],
    'phone': ['call', 'talk', 'telephone'],
    'photo-camera': ['photography', 'shutter', 'picture'],
    'pill': ['medicine', 'capsule', 'pellet', 'doctor', 'sick', 'disease', 'cure', 'drugs'],
    'pinpoint': ['location-marker', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-filled': ['location-marker', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-off': ['location-marker-off', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-off-filled': ['location-marker-off', 'pin', 'position', 'map', 'here', 'where'],
    'plus': ['cross', 'add', 'new'],
    'power': ['turn-off', 'shut-down'],
    'printer': ['pdf'],
    'refresh': ['reload', 'fetch', 'twist'],
    'reload': ['refresh', 'turn', 'start-over', 'back'],
    'scissors': ['cut', 'hair', 'clippers', 'shears', 'trimmer', 'barber', 'stylist', 'beauty-parlor', 'coiffeuse', 'coiffeur'],
    'send': ['email', 'paper-plane'],
    'share-android': ['forward', 'connect'],
    'share-ios': ['forward', 'connect'],
    'smartphone': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'smartphone-notch': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'smartphone2': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'soft-drink': ['cold-drink', 'refresher', 'juice'],
    'speaker-high': ['high-volume', 'loud'],
    'speaker-low': ['low-volume', 'quiet'],
    'speaker-off': ['no-volume', 'silent'],
    'square': [],
    'square-filled': [],
    'star': ['favourite', 'favorite', 'rate', 'rating', 'score', 'flag'],
    'star-filled': ['favourite', 'favorite', 'rate', 'rating', 'score', 'flag'],
    'sun': ['light-mode', 'day', 'lights-on', 'brightness'],
    'sun-filled': ['light-mode', 'lights-on', 'brightness'],
    'syringe': ['hypodermic', 'injection', 'vaccine', 'vaccination', 'doctor', 'sick', 'disease', 'cure', 'drugs'],
    't-shirt': ['clothing'],
    'taxi': ['cab'],
    'television': ['tv', 'telly'],
    'text-bubble': ['message', 'chat', 'say', 'typing'],
    'times': ['cross', 'x', 'wrong', 'close', 'stop'],
    'tool': ['wrench', 'hardware', 'fix', 'repair', 'bolt'],
    'train': ['tube', 'metro'],
    'trash': ['delete', 'remove', 'dispense', 'trashcan', 'can', 'garbage'],
    'triangle-down': ['arrow-down'],
    'triangle-down-filled': ['arrow-down'],
    'triangle-left': ['arrow-left'],
    'triangle-left-filled': ['arrow-left'],
    'triangle-right': ['arrow-right'],
    'triangle-right-filled': ['arrow-right'],
    'triangle-up': ['arrow-up'],
    'triangle-up-filled': ['arrow-up'],
    'truck': ['heavy-goods-vehicle', 'juggernaut', 'van', 'pickup', 'lorry', 'move', 'wares', 'deliver', 'haul', 'distribution', 'delivery'],
    'umbrella': ['parasol', 'rain'],
    'wifi': ['internet', 'reception', 'connection', 'sonic', 'waves'],
};

/** This file is to be manually edited. */
const synonyms = {
    'airplane': ['飛行機', '飛ぶ', '飛行', '旅行', '休暇', '旅'],
    'angle-down': ['下矢印', '下', 'やじるし', '矢印', '下がる'],
    'angle-left': ['左矢印', '左', '矢印', 'やじるし', '戻る', '小なり', '山かっこ', '山括弧'],
    'angle-right': ['右矢印', '右', '矢印', 'やじるし', '大なり', '進む', '山かっこ', '山括弧'],
    'angle-up': ['上矢印', '上', '矢印', 'やじるし'],
    'battery': ['充電', 'バッテリー', '電池'],
    'bell': ['ベル', '通知', '警告', '注意', '鐘', '鈴'],
    'bell-off': ['ベル', '消音', '静か', 'サイレント', '鐘', '鈴'],
    'bicycle': ['自転車', '乗り物', 'サイクリング'],
    'bluetooth': ['ブルートゥース'],
    'book': ['本', '読書', 'ブックマーク', '読む'],
    'bookmark': ['ブックマーク', 'クリップ', 'お気に入り'],
    'bookmark-filled': ['ブックマーク', 'クリップ', 'お気に入り'],
    'building': [
        'ビル',
        'オフィス',
        'ビジネス',
        '仕事',
        '会社',
        '企業',
        '職場',
        '法人',
        '事務所',
        '建物',
    ],
    'calculator': ['電卓', '計算', '会計'],
    'calendar': ['カレンダー', '予定', 'スケジュール', 'いつ'],
    'camera': ['ビデオカメラ', '記録', 'ビデオ', '動画', 'ムービー', '映画'],
    'can': [
        'カン',
        '缶',
        'ペプシ',
        'ソフトドリンク',
        '炭酸',
        'コーラ',
        'コールドドリンク',
        'リフレッシュ',
        '缶ジュース',
        '飲み物',
    ],
    'car': ['車', '乗り物', '自動車', '運転'],
    'cart': ['カート', 'ショッピングカート', '買い物', '支払い', '通販', '買う', '購入'],
    'checkmark': ['チェック', 'チェックマーク', 'しるし', 'ok', '確認済み'],
    'circle': ['丸', '円', 'ボール'],
    'circle-filled': ['丸', '円', 'ボール'],
    'clipboard': ['クリップボード', 'コピー'],
    'clock': ['時計', '時間', 'アラーム', 'タイマー', 'カウントダウン'],
    'cloud': [
        '雲',
        'アップロード',
        'オンライン',
        '容量',
        'ストレージ',
        '保存',
        'クラウド',
        '天気',
        'くもり',
    ],
    'cloud-down': ['ダウンロード', '容量', 'ストレージ', '保存', 'クラウド', '天気', 'くもり'],
    'cloud-down-filled': ['ダウンロード', 'ストレージ', '保存', 'クラウド'],
    'cloud-filled': [
        '雲',
        'アップロード',
        'オンライン',
        'ストレージ',
        '保存',
        'クラウド',
        '天気',
        'くもり',
    ],
    'cloud-up': ['アップロード', 'ストレージ', '保存', 'クラウド'],
    'cloud-up-filled': ['アップロード', 'ストレージ', '保存', 'クラウド'],
    'coctail': [
        'カクテル',
        'お酒',
        'トロピカル',
        'アルコール',
        'バー',
        '飲み物',
        'ドリンク',
        'グラス',
    ],
    'color-picker': ['スポイト', 'カラーピッカー'],
    'contract': ['縮小', '閉じる', 'ズームアウト'],
    'controller': ['コントローラー', 'ゲーム', '遊び'],
    'credit-card': [
        'クレジットカード',
        'マスターカード',
        'visa',
        'キャッシュレス',
        '支払い',
        'チェックアウト',
        'カード',
    ],
    'cup': ['カップ', 'コーヒー', 'ホットドリンク', '飲み物', 'カフェ', 'ティーカップ'],
    'division': ['割る', '計算'],
    'dots-x': ['三点リーダー', '点', '詳細', 'メニュー'],
    'dots-y': ['三点リーダー', '点', '詳細', 'メニュー'],
    'dress': ['ワンピース', '服', 'ドレス'],
    'duplicate': ['コピー', '複製'],
    'electricity': ['カミナリ', '雷', '稲妻', '天気'],
    'exclamation': ['ビックリマーク', 'エクスクラメーションマーク', '注意', '警告', '危険', '注目'],
    'exclamation-filled': [
        'ビックリマーク',
        'エクスクラメーションマーク',
        '注意',
        '警告',
        '危険',
        '注目',
    ],
    'expand': ['拡大', 'フルスクリーン', '開く', 'ズームイン', '最大化'],
    'eye': ['目', 'パスワードを見る', '見る', '気づく', '起きる'],
    'eye-closed': ['目', 'パスワードを隠す', '見える', '隠す', '秘密', '寝る'],
    'eye-off': ['非表示', '目', '隠す', '秘密', '見えない'],
    'file': ['ファイル', '記録', 'ノート', 'データ', 'アーカイブ', 'ドキュメント', '文書'],
    'film-frame': ['映画', '動画', 'ムービー', '再生', 'プログラム', 'ドラマ', 'シネマ'],
    'flag': ['旗', '国', '重要', 'ピン'],
    'flower': ['花', 'チューリップ'],
    'flower-bud': ['花', 'つぼみ'],
    'folder': ['ファイル', 'フォルダー', 'アーカイブ', '保存', '記録'],
    'gear': ['歯車', '設定', 'コンフィグ', 'ギア', 'セッティング'],
    'gift': [
        'ギフト',
        'プレゼント',
        'サプライズ',
        '贈る',
        '贈り物',
        '誕生日',
        'バースデープレゼント',
    ],
    'grab': ['メニュー', 'インターフェース', 'ナビゲーション'],
    'hamburger': ['ハンバーガー', 'ファストフード', '食事'],
    'headphone': ['ヘッドホン', 'ヘッドセット', 'イヤホン', 'ミュージック', '音楽', '聴く', '視聴'],
    'heart': ['ハート', 'ラブ', '好き'],
    'house': ['家', '住宅', '家庭', 'ホーム'],
    'info': ['インフォメーション', 'ヘルプ', 'ヒント', 'ガイド'],
    'info-filled': ['インフォメーション', 'ヘルプ', 'ヒント', 'ガイド'],
    'internet': ['地球', 'インターネット', 'サイバー', 'ネット'],
    'key': ['鍵', 'カギ', 'ロック', 'アンロック', '暗号化', '複合化', '安全', '秘密', '解決', '答え'],
    'knive-fork': ['カトラリー', 'ナイフ', 'フォーク', '食事'],
    'letter': ['手紙', 'メール', '送信', '受信', 'コンタクト', '封筒'],
    'lock-closed': ['ロック', '暗号化', 'セキュリティ', '南京錠', 'パスワード'],
    'lock-open': ['アンロック', '複合化', '南京錠', 'セキュリティ', 'パスワード'],
    'loop': ['虫眼鏡', 'ズーム', '拡大', '検索', '調査'],
    'loop-minus': ['ズームアウト', '縮小'],
    'loop-plus': ['ズームイン', '拡大'],
    'map': ['地図', '現在地', '目的地', '位置', '場所'],
    'microphone': ['マイク', '録音', '音声', 'ラジオ'],
    'minus': ['マイナス', '引く', 'ハイフン', '線', '計算'],
    'monitor': ['モニター', 'パソコン', 'コンピューター', 'デスクトップ', 'スクリーン'],
    'monitor2': ['モニター', 'パソコン', 'コンピューター', 'デスクトップ', 'スクリーン'],
    'moon': ['月', 'ダークモード', '夜', '消灯', 'おやすみ', '天気'],
    'moon-filled': ['月', 'ダークモード', '夜', '消灯', 'おやすみ'],
    'motorcycle': ['バイク', '乗り物', '運転'],
    'music-note-double': ['８分音符', '音符', '曲', '歌', '音楽', 'ミュージック'],
    'music-note-single': ['８分音符', '音符', '曲', '歌', '音楽', 'ミュージック'],
    'open': ['開く', '新しいウィンドウ'],
    'paint-pallet': ['パレット', 'ペイント', 'アート'],
    'pen': ['ペン', '編集', '書く', '鉛筆', '描く'],
    'person': ['人', '人間', '人物', '誰か', '個性', 'プロフィール', '君'],
    'person-filled': ['人', '人間', '人物', '誰か', '個性', 'プロフィール', '君'],
    'phone': ['受話器', '電話', '通話'],
    'photo-camera': ['カメラ', 'シャッター', '写真'],
    'pill': ['薬', 'カプセル', '錠剤', 'ドクター', '病気', '治す', 'ドラッグ', '治療'],
    'pinpoint': ['ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-filled': ['ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-off': ['現在地オフ', 'ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-off-filled': [
        '現在地オフ',
        'ピン',
        '現在地',
        ' 位置',
        '地図',
        'ここ',
        '場所',
        'マップ',
    ],
    'plus': ['プラス', '足す', '加える', '新しい', '計算'],
    'power': ['電源', 'オフ', 'シャットダウン', 'ボタン'],
    'printer': ['プリンター', '印刷'],
    'refresh': ['更新', 'リロード', 'アップデート'],
    'reload': ['更新', 'やり直し', '再読み込み', '戻る'],
    'scissors': [
        'ハサミ',
        'はさみ',
        'カット',
        '切る',
        '髪',
        '切り取り',
        'トリミング',
        '理容室',
        'ヘアサロン',
        '美容室',
        'スタイリスト',
        '美容師',
    ],
    'send': ['紙飛行機', 'メール', '送信', '送る'],
    'share-android': ['シェア', '共有'],
    'share-ios': ['シェア', '共有'],
    'smartphone': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'smartphone2': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'smartphone-notch': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'soft-drink': ['ソフトドリンク', 'コールドドリンク', 'リフレッシュ', 'ジュース', '飲み物'],
    'speaker-high': ['音量', 'スピーカー', '大きく', 'ボリューム', '音声', 'サウンド'],
    'speaker-low': ['音量', 'スピーカー', '小さく', 'ボリューム', '音声', 'サウンド'],
    'speaker-off': [
        '音量オフ',
        'サイレント',
        'スピーカー',
        '小さく',
        'ボリューム',
        '音声',
        'サウンド',
    ],
    'square': ['四角'],
    'square-filled': ['四角'],
    'magnet': ['マグネット', '磁石'],
    'star': ['星', 'お気に入り', 'スター', 'ブックマーク'],
    'star-filled': ['星', 'お気に入り', 'スター', 'ブックマーク'],
    'sun': ['太陽', 'ライトモード', '日', 'おはよう', '明るい', '天気'],
    'sun-filled': ['太陽', 'ライトモード', '日', 'おはよう', '明るい', '天気'],
    'syringe': ['注射器', 'ワクチン', '予防接種', '医者', '病気', '治療', '薬'],
    't-shirt': ['Tシャツ', '服', '着る'],
    'taxi': ['タクシー', '乗り物'],
    'television': ['テレビ', 'モニター'],
    'text-bubble': ['吹き出し', 'メッセージ', 'チャット', '言う', 'タイピング'],
    'times': ['クロス', 'エックス', '不正解', '間違い', 'クローズ', '止める', '計算', '掛ける'],
    'tool': ['レンチ', '工具', '修理', '直す', 'ボルト'],
    'train': ['電車', 'メトロ', '地下鉄', '乗り物'],
    'trash': ['ゴミ箱', '消去', '捨てる', '分別', '廃棄物'],
    'triangle-down': ['三角', '下矢印'],
    'triangle-down-filled': ['三角', '下矢印'],
    'triangle-left': ['三角', '左矢印'],
    'triangle-left-filled': ['三角', '左矢印'],
    'triangle-right': ['三角', '右矢印'],
    'triangle-right-filled': ['三角', '右矢印'],
    'triangle-up': ['三角', '上矢印'],
    'triangle-up-filled': ['三角', '上矢印'],
    'truck': ['トラック', 'バン', 'ピックアップ', '運送', '荷物', '配送', '運搬', '流通', '乗り物'],
    'umbrella': ['傘', 'パラソル', '雨', '天気'],
    'wifi': ['ワイファイ', 'インターネット', '通信', '電波'],
};

const Airplane$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7549 12.9963L12.6137 11.2918L14.0858 16.5607C14.2873 17.2817 15.1804 17.5338 15.7291 17.0246C17.3078 15.5597 18.1699 14.2058 18.2479 12.8948C18.3038 11.9539 17.8659 10.1553 16.9294 7.33446L17.1593 7.12366C19.4079 4.87645 20.0577 2.91564 18.5923 1.45023C17.1271 -0.0150314 15.1661 0.634362 12.9482 2.85086L12.7079 3.11245C9.88669 2.17579 8.08782 1.73782 7.14683 1.79379C5.83588 1.87176 4.48194 2.73388 3.01704 4.31253C2.50783 4.86128 2.75997 5.75441 3.48097 5.95585L8.75056 7.42815L7.0465 9.28692C5.32628 9.0514 4.24908 8.94907 3.72656 8.98019C2.78982 9.03596 1.86795 9.623 0.89294 10.6737C0.38371 11.2225 0.635886 12.1156 1.35692 12.317L6.01025 13.6169L6.42478 14.0314L7.72462 18.6847C7.92603 19.4058 8.81919 19.658 9.36796 19.1487C10.4187 18.1737 11.0057 17.2518 11.0615 16.3151C11.0926 15.7927 10.9903 14.7159 10.7549 12.9963ZM9.01615 11.8772C8.77322 12.0999 8.65566 12.4281 8.70187 12.7544C8.94065 14.4405 9.06247 15.5704 9.06757 16.0585L8.28047 13.2407C8.23421 13.0751 8.14603 12.9242 8.02445 12.8027L7.239 12.0172C7.11742 11.8956 6.96654 11.8075 6.80093 11.7612L3.98319 10.9741C4.47143 10.9792 5.60166 11.1011 7.28845 11.34C7.61484 11.3862 7.94304 11.2686 8.16579 11.0256L11.3255 7.57908C11.8296 7.02922 11.5759 6.14093 10.8574 5.9402L5.73365 4.50864C6.33268 4.04943 6.84845 3.81507 7.26558 3.79026C7.90809 3.75204 9.78145 4.2286 12.6835 5.21408C13.059 5.34156 13.4743 5.2352 13.7422 4.94295L14.3922 4.23396C15.8992 2.7292 16.7584 2.44469 17.1781 2.86445C17.5977 3.28405 17.3131 4.14277 15.7764 5.67951L15.0987 6.29966C14.8065 6.5676 14.7002 6.98285 14.8276 7.35825C15.8131 10.2603 16.2896 12.1336 16.2514 12.7761C16.2266 13.1932 15.9922 13.709 15.533 14.308L14.1016 9.18478C13.9009 8.46628 13.0125 8.21263 12.4627 8.71682L9.01615 11.8772Z" fill="currentColor"/>
</svg>
`;

const AngleDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6402 8.26824L10.6402 13.2682C9.61589 14.1218 8.33552 12.5854 9.35982 11.7318L15.3598 6.7318C16.3841 5.87822 17.6645 7.41466 16.6402 8.26824Z" fill="currentColor"/>
<path d="M4.64018 6.7318L10.6402 11.7318C11.6645 12.5854 10.3841 14.1218 9.35982 13.2682L3.35982 8.26824C2.33552 7.41466 3.61589 5.87822 4.64018 6.7318Z" fill="currentColor"/>
</svg>
`;

const AngleLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.73178 10.6402C6.37821 10.2159 6.43554 9.58537 6.85981 9.2318C7.28409 8.87824 7.91466 8.93556 8.26822 9.35984L13.2682 15.3598C13.6218 15.7841 13.5645 16.4147 13.1402 16.7682C12.7159 17.1218 12.0853 17.0645 11.7318 16.6402L6.73178 10.6402Z" fill="currentColor"/>
<path d="M8.26822 10.6402C7.91466 11.0645 7.28409 11.1218 6.85981 10.7682C6.43554 10.4147 6.37821 9.78412 6.73178 9.35984L11.7318 3.35984C12.0853 2.93556 12.7159 2.87824 13.1402 3.2318C13.5645 3.58537 13.6218 4.21593 13.2682 4.64021L8.26822 10.6402Z" fill="currentColor"/>
</svg>
`;

const AngleRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7318 9.35984C12.0853 8.93556 12.7159 8.87824 13.1402 9.2318C13.5645 9.58537 13.6218 10.2159 13.2682 10.6402L8.26822 16.6402C7.91466 17.0645 7.28409 17.1218 6.85982 16.7682C6.43554 16.4147 6.37822 15.7841 6.73178 15.3598L11.7318 9.35984Z" fill="currentColor"/>
<path d="M6.73178 4.64021C6.37822 4.21593 6.43554 3.58537 6.85982 3.2318C7.28409 2.87824 7.91466 2.93556 8.26822 3.35984L13.2682 9.35984C13.6218 9.78412 13.5645 10.4147 13.1402 10.7682C12.7159 11.1218 12.0853 11.0645 11.7318 10.6402L6.73178 4.64021Z" fill="currentColor"/>
</svg>
`;

const AngleUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3598 13.2682L9.35982 8.26824C8.33552 7.41466 9.61589 5.87822 10.6402 6.7318L16.6402 11.7318C17.6645 12.5854 16.3841 14.1218 15.3598 13.2682Z" fill="currentColor"/>
<path d="M3.35982 11.7318L9.35982 6.7318C10.3841 5.87822 11.6645 7.41466 10.6402 8.26824L4.64019 13.2682C3.61589 14.1218 2.33552 12.5854 3.35982 11.7318Z" fill="currentColor"/>
</svg>
`;

const Battery$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="17" y="7.5" width="2" height="5" rx="0.5" fill="currentColor"/>
<path d="M4 7.5H7V12.5H4V7.5Z" fill="currentColor"/>
<path d="M7.5 7.5H10.5V12.5H7.5V7.5Z" fill="currentColor"/>
<path d="M11 7.5H14V12.5H11V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5H4C2.34315 4.5 1 5.84315 1 7.5V12.5C1 14.1569 2.34315 15.5 4 15.5H14C15.6569 15.5 17 14.1569 17 12.5V7.5C17 5.84315 15.6569 4.5 14 4.5ZM3 7.5C3 6.94772 3.44772 6.5 4 6.5H14C14.5523 6.5 15 6.94772 15 7.5V12.5C15 13.0523 14.5523 13.5 14 13.5H4C3.44772 13.5 3 13.0523 3 12.5V7.5Z" fill="currentColor"/>
</svg>
`;

const Bell$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 17C7.5 16.4477 7.94772 16 8.5 16C9.05228 16 9.5 16.4477 9.5 17C9.5 17.2761 9.72386 17.5 10 17.5C10.2761 17.5 10.5 17.2761 10.5 17C10.5 16.4477 10.9477 16 11.5 16C12.0523 16 12.5 16.4477 12.5 17C12.5 18.3807 11.3807 19.5 10 19.5C8.61929 19.5 7.5 18.3807 7.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14.5C18 13.3482 17.4284 12.2866 16.5 11.6488V9C16.5 5.68629 13.8137 3 10.5 3H9.5C6.18629 3 3.5 5.68629 3.5 9V11.6488C2.57159 12.2867 2 13.3482 2 14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5ZM14.5 12.8819L15.0904 13.147L15.1434 13.1709C15.665 13.4075 16 13.9273 16 14.5C16 14.7761 15.7761 15 15.5 15H4.5C4.22386 15 4 14.7761 4 14.5C4 13.9273 4.335 13.4075 4.85658 13.1709L4.90959 13.147L5.5 12.8819V9C5.5 6.79086 7.29086 5 9.5 5H10.5C12.7091 5 14.5 6.79086 14.5 9V12.8819Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947716 11 1.5L11 4C11 4.55229 10.5523 5 10 5C9.44771 5 9 4.55228 9 4L9 1.5Z" fill="currentColor"/>
</svg>
`;

const BellOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 17C7.5 16.4477 7.94772 16 8.5 16C9.05229 16 9.5 16.4477 9.5 17C9.5 17.2761 9.72386 17.5 10 17.5C10.2761 17.5 10.5 17.2761 10.5 17C10.5 16.4477 10.9477 16 11.5 16C12.0523 16 12.5 16.4477 12.5 17C12.5 18.3807 11.3807 19.5 10 19.5C8.61929 19.5 7.5 18.3807 7.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14.5C18 13.3482 17.4284 12.2866 16.5 11.6488V9C16.5 5.68629 13.8137 3 10.5 3H9.5C6.18629 3 3.5 5.68629 3.5 9V11.6488C2.57159 12.2867 2 13.3482 2 14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5ZM14.5 12.8819L15.0904 13.147L15.1434 13.1709C15.665 13.4075 16 13.9273 16 14.5C16 14.7761 15.7761 15 15.5 15H4.5C4.22386 15 4 14.7761 4 14.5C4 13.9273 4.335 13.4075 4.85658 13.1709L4.90959 13.147L5.5 12.8819V9C5.5 6.79086 7.29086 5 9.5 5H10.5C12.7091 5 14.5 6.79086 14.5 9V12.8819Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947716 11 1.5L11 4C11 4.55229 10.5523 5 10 5C9.44771 5 9 4.55228 9 4L9 1.5Z" fill="currentColor"/>
<path d="M0.81933 4.52526C0.415414 4.14861 0.393317 3.51583 0.769974 3.11191C1.14663 2.708 1.77941 2.6859 2.18333 3.06256L18.2232 18.0199C18.6271 18.3966 18.6492 19.0294 18.2725 19.4333C17.8959 19.8372 17.2631 19.8593 16.8592 19.4827L0.81933 4.52526Z" fill="currentColor"/>
</svg>
`;

const Bicycle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0616 3.93632C12.5103 3.97032 12.0359 3.55102 12.0019 2.99978C11.9679 2.44854 12.3872 1.97411 12.9384 1.94011C16.8273 1.70025 19 2.46051 19 4.44073C19 6.01406 18.0221 6.71355 16.1454 6.9894C15.599 7.06971 15.0909 6.69187 15.0106 6.14545C14.9303 5.59904 15.3082 5.09098 15.8546 5.01066C16.8709 4.86127 17 4.76892 17 4.44073C17 4.14373 15.9059 3.76088 13.0616 3.93632Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5C11 17.9853 13.0147 20 15.5 20ZM15.5 13C16.8807 13 18 14.1193 18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5C13 14.1193 14.1193 13 15.5 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 20C6.98528 20 9 17.9853 9 15.5C9 13.0147 6.98528 11 4.5 11C2.01472 11 0 13.0147 0 15.5C0 17.9853 2.01472 20 4.5 20ZM4.5 13C5.88071 13 7 14.1193 7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13Z" fill="currentColor"/>
<path d="M5 6.5C4.44772 6.5 4 6.05228 4 5.5C4 4.94772 4.44772 4.5 5 4.5H9C9.55228 4.5 10 4.94772 10 5.5C10 6.05228 9.55228 6.5 9 6.5H5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49999 16.5004H9.99999C10.6363 16.5004 11.0986 15.9191 10.983 15.3153L14.8473 9.14984C15.2647 8.48384 14.786 7.61876 14 7.61876H8.45062L7.64761 5.18682C7.47444 4.66239 6.90893 4.37763 6.38449 4.55079C5.86006 4.72396 5.5753 5.28948 5.74846 5.81391L6.75471 8.86133L3.60865 15.047C3.27029 15.7123 3.75361 16.5004 4.49999 16.5004ZM7.63799 11.5364L6.1305 14.5004H8.61669L7.63799 11.5364ZM10.1744 12.8394L12.193 9.61876H9.11102L10.1744 12.8394Z" fill="currentColor"/>
<path d="M13.9808 2.74302L16.4808 15.3048C16.741 16.6125 14.7795 17.0029 14.5192 15.6952L12.0192 3.13339C11.759 1.8257 13.7205 1.43533 13.9808 2.74302Z" fill="currentColor"/>
</svg>
`;

const Bluetooth$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5351 10.7951L17.1065 6.54508C17.6312 6.14486 17.6312 5.35514 17.1065 4.95492L11.5351 0.704921C10.8769 0.202853 9.92857 0.672195 9.92857 1.5L9.92857 10C9.92857 10.8278 10.8769 11.2971 11.5351 10.7951ZM11.9286 3.52056L14.8512 5.75L11.9286 7.97945L11.9286 3.52056Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5351 19.2951L17.1065 15.0451C17.6312 14.6449 17.6312 13.8551 17.1065 13.4549L11.5351 9.20492C10.8769 8.70285 9.92857 9.1722 9.92857 10L9.92857 18.5C9.92857 19.3278 10.8769 19.7971 11.5351 19.2951ZM11.9286 12.0206L14.8512 14.25L11.9286 16.4794L11.9286 12.0206Z" fill="currentColor"/>
<path d="M11.5264 9.19846C11.9691 9.52866 12.0604 10.1552 11.7302 10.5979C11.4 11.0406 10.7734 11.1318 10.3307 10.8016L3.3664 5.60719C2.9237 5.27699 2.83249 4.65043 3.16269 4.20772C3.49289 3.76502 4.11945 3.67382 4.56216 4.00402L11.5264 9.19846Z" fill="currentColor"/>
<path d="M11.5264 10.8015C11.9691 10.4713 12.0604 9.84478 11.7302 9.40207C11.4 8.95937 10.7734 8.86817 10.3307 9.19837L3.3664 14.3928C2.9237 14.723 2.83249 15.3496 3.16269 15.7923C3.49289 16.235 4.11945 16.3262 4.56216 15.996L11.5264 10.8015Z" fill="currentColor"/>
</svg>
`;

const Book$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.29733C11 4.80746 10.6451 4.38971 10.1617 4.31049L2.32344 3.02599C2.21652 3.00847 2.10835 2.99966 2 2.99966C0.89543 2.99966 0 3.89509 0 4.99966V14.7366C0 15.7218 0.717527 16.5603 1.69094 16.7125L9.84547 17.988C10.452 18.0829 11 17.6139 11 17V5.29733ZM2 14.7366V4.99966L9 6.14679V15.8314L2 14.7366Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4.99966C20 3.89509 19.1046 2.99966 18 2.99966C17.8917 2.99966 17.7835 3.00847 17.6766 3.02599L9.83828 4.31049C9.35486 4.38971 9 4.80746 9 5.29733V17C9 17.6139 9.54801 18.0829 10.1545 17.988L18.3091 16.7125C19.2825 16.5603 20 15.7218 20 14.7366V4.99966ZM18 14.7366L11 15.8314V6.14679L18 4.99966V14.7366Z" fill="currentColor"/>
</svg>
`;

const Bookmark$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.24548 17.6665L10 13.4673L13.7545 17.6665C14.3665 18.3509 15.5 17.9181 15.5 17V3C15.5 2.44772 15.0523 2 14.5 2H5.5C4.94772 2 4.5 2.44772 4.5 3V17C4.5 17.9181 5.63355 18.3509 6.24548 17.6665ZM6.5 14.3812V4H13.5V14.3812L10.7455 11.3004C10.3479 10.8558 9.65206 10.8558 9.25452 11.3004L6.5 14.3812Z" fill="currentColor"/>
</svg>
`;

const BookmarkFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13.4673L6.24548 17.6665C5.63355 18.3509 4.5 17.9181 4.5 17V3C4.5 2.44772 4.94772 2 5.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V17C15.5 17.9181 14.3665 18.3509 13.7545 17.6665L10 13.4673Z" fill="currentColor"/>
</svg>
`;

const Building$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18.5C1.44772 18.5 1 18.0523 1 17.5C1 16.9477 1.44772 16.5 2 16.5H18C18.5523 16.5 19 16.9477 19 17.5C19 18.0523 18.5523 18.5 18 18.5H2Z" fill="currentColor"/>
<path d="M6.5 17C6.5 17.5523 6.05228 18 5.5 18C4.94772 18 4.5 17.5523 4.5 17V4.30769C4.5 2.51017 5.80881 1 7.5 1H12.5C14.1912 1 15.5 2.51017 15.5 4.30769V17C15.5 17.5523 15.0523 18 14.5 18C13.9477 18 13.5 17.5523 13.5 17V4.30769C13.5 3.55621 13.018 3 12.5 3H7.5C6.98205 3 6.5 3.55621 6.5 4.30769V17Z" fill="currentColor"/>
<path d="M8 4H9C9.27614 4 9.5 4.22386 9.5 4.5V5.5C9.5 5.77614 9.27614 6 9 6H8C7.72386 6 7.5 5.77614 7.5 5.5V4.5C7.5 4.22386 7.72386 4 8 4Z" fill="currentColor"/>
<path d="M11 4H12C12.2761 4 12.5 4.22386 12.5 4.5V5.5C12.5 5.77614 12.2761 6 12 6H11C10.7239 6 10.5 5.77614 10.5 5.5V4.5C10.5 4.22386 10.7239 4 11 4Z" fill="currentColor"/>
<path d="M11 7H12C12.2761 7 12.5 7.22386 12.5 7.5V8.5C12.5 8.77614 12.2761 9 12 9H11C10.7239 9 10.5 8.77614 10.5 8.5V7.5C10.5 7.22386 10.7239 7 11 7Z" fill="currentColor"/>
<path d="M11 10H12C12.2761 10 12.5 10.2239 12.5 10.5V11.5C12.5 11.7761 12.2761 12 12 12H11C10.7239 12 10.5 11.7761 10.5 11.5V10.5C10.5 10.2239 10.7239 10 11 10Z" fill="currentColor"/>
<path d="M11 13H12C12.2761 13 12.5 13.2239 12.5 13.5V14.5C12.5 14.7761 12.2761 15 12 15H11C10.7239 15 10.5 14.7761 10.5 14.5V13.5C10.5 13.2239 10.7239 13 11 13Z" fill="currentColor"/>
<path d="M8 7H9C9.27614 7 9.5 7.22386 9.5 7.5V8.5C9.5 8.77614 9.27614 9 9 9H8C7.72386 9 7.5 8.77614 7.5 8.5V7.5C7.5 7.22386 7.72386 7 8 7Z" fill="currentColor"/>
<path d="M8 13H9C9.27614 13 9.5 13.2239 9.5 13.5V14.5C9.5 14.7761 9.27614 15 9 15H8C7.72386 15 7.5 14.7761 7.5 14.5V13.5C7.5 13.2239 7.72386 13 8 13Z" fill="currentColor"/>
<path d="M8 10H9C9.27614 10 9.5 10.2239 9.5 10.5V11.5C9.5 11.7761 9.27614 12 9 12H8C7.72386 12 7.5 11.7761 7.5 11.5V10.5C7.5 10.2239 7.72386 10 8 10Z" fill="currentColor"/>
</svg>
`;

const Calculator$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3L2 17C2 18.6569 3.34315 20 5 20H15C16.6569 20 18 18.6569 18 17V3C18 1.34315 16.6569 0 15 0H5C3.34315 0 2 1.34315 2 3ZM5 18C4.44772 18 4 17.5523 4 17L4 3C4 2.44772 4.44772 2 5 2H15C15.5523 2 16 2.44772 16 3V17C16 17.5523 15.5523 18 15 18H5Z" fill="currentColor"/>
<path d="M5 7.5V3.5C5 3.22386 5.22386 3 5.5 3L14.5 3C14.7761 3 15 3.22386 15 3.5V7.5C15 7.77614 14.7761 8 14.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z" fill="currentColor"/>
<path d="M12 15.7V10.8C12 10.3582 12.3582 10 12.8 10H14.2C14.6418 10 15 10.3582 15 10.8V15.7C15 16.1418 14.6418 16.5 14.2 16.5H12.8C12.3582 16.5 12 16.1418 12 15.7Z" fill="currentColor"/>
<path d="M5 12V10.5C5 10.2239 5.22386 10 5.5 10H7C7.27614 10 7.5 10.2239 7.5 10.5V12C7.5 12.2761 7.27614 12.5 7 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z" fill="currentColor"/>
<path d="M8.5 12V10.5C8.5 10.2239 8.72386 10 9 10H10.5C10.7761 10 11 10.2239 11 10.5V12C11 12.2761 10.7761 12.5 10.5 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z" fill="currentColor"/>
<path d="M5 16V14.5C5 14.2239 5.22386 14 5.5 14H7C7.27614 14 7.5 14.2239 7.5 14.5V16C7.5 16.2761 7.27614 16.5 7 16.5H5.5C5.22386 16.5 5 16.2761 5 16Z" fill="currentColor"/>
<path d="M8.5 16V14.5C8.5 14.2239 8.72386 14 9 14H10.5C10.7761 14 11 14.2239 11 14.5V16C11 16.2761 10.7761 16.5 10.5 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16Z" fill="currentColor"/>
</svg>
`;

const Calendar$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17C17.5523 4 18 4.44772 18 5V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V5C2 4.44772 2.44772 4 3 4ZM4 8V16H16V8H4Z" fill="currentColor"/>
<circle cx="6.5" cy="10.5" r="1.5" fill="currentColor"/>
<circle cx="5.5" cy="4.5" r="1.5" fill="currentColor"/>
<circle cx="14.5" cy="4.5" r="1.5" fill="currentColor"/>
</svg>
`;

const Camera$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4H4.5C2.84315 4 1.5 5.34315 1.5 7V13C1.5 14.6569 2.84315 16 4.5 16H11.5C13.1569 16 14.5 14.6569 14.5 13V7C14.5 5.34315 13.1569 4 11.5 4ZM3.5 7C3.5 6.44772 3.94772 6 4.5 6H11.5C12.0523 6 12.5 6.44772 12.5 7V13C12.5 13.5523 12.0523 14 11.5 14H4.5C3.94772 14 3.5 13.5523 3.5 13V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9339 5.17564L13.4659 7.55708C13.1971 7.74161 13.0352 8.04554 13.032 8.37151L13 11.5867C12.9967 11.9197 13.1594 12.2325 13.4339 12.421L16.9339 14.8244C17.5975 15.28 18.5 14.8049 18.5 14V6C18.5 5.19508 17.5975 4.72 16.9339 5.17564ZM16.5 12.1003L15.0052 11.0739L15.0267 8.91141L16.5 7.89974V12.1003Z" fill="currentColor"/>
</svg>
`;

const Can$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2H7.5C5.83333 2.66667 4.83333 3.66667 4.5 5V15C4.5 16.6569 5.84315 18 7.5 18H12.5C14.1569 18 15.5 16.6569 15.5 15V5C15.1667 3.66667 14.1667 2.66667 12.5 2ZM6.5 15V5.29379C6.68962 4.79195 7.1237 4.36779 7.91138 4H12.0886C12.8763 4.36779 13.3104 4.79195 13.5 5.29379V15C13.5 15.5523 13.0523 16 12.5 16H7.5C6.94772 16 6.5 15.5523 6.5 15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7 11.7091 8.79086 13.5 11 13.5C13.2091 13.5 15 11.7091 15 9.5C15 7.29086 13.2091 5.5 11 5.5C8.79086 5.5 7 7.29086 7 9.5ZM9.80484 10.9055C9.55673 10.9664 9.15223 11.09 8.58357 11.2782C8.56278 11.25 8.54246 11.2214 8.52264 11.1925C9.78121 10.8145 10.7946 10.2379 11.5554 9.45908C12.2367 8.7617 12.6995 8.01039 12.9365 7.20862C13.0856 7.33479 13.2223 7.47526 13.3443 7.62791C13.4677 8.46285 13.3733 9.08532 13.0855 9.51186C12.7303 10.0384 12.1353 10.3668 11.5805 10.5122C11.5089 10.5309 11.3794 10.5603 11.1777 10.6038C11.1136 10.6176 10.9312 10.6565 10.7798 10.6887C10.683 10.7093 10.5989 10.7273 10.5665 10.7342L10.4542 10.7584C10.1799 10.8176 9.9714 10.8646 9.80484 10.9055Z" fill="currentColor"/>
</svg>
`;

const Car$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65265 2.78967C4.74897 3.00861 4.04146 3.71098 3.81595 4.61304L2.68528 9.1357C1.70458 9.47358 1 10.4045 1 11.4999V14.4999C1 15.8807 2.11929 16.9999 3.5 16.9999H16.5C17.8807 16.9999 19 15.8807 19 14.4999V11.4999C19 10.4045 18.2954 9.47358 17.3147 9.1357L16.184 4.61293C15.9585 3.71099 15.2512 3.00867 14.3476 2.78962C12.9007 2.43894 11.4512 2.26331 10.0007 2.26331C8.55011 2.26331 7.10023 2.43896 5.65265 2.78967ZM3.5 10.9999C3.95887 10.9999 4.35885 10.6876 4.47014 10.2425L5.75623 5.09811C5.80133 4.9177 5.94284 4.77722 6.12357 4.73344C7.41806 4.41982 8.70992 4.26331 10.0007 4.26331C11.2914 4.26331 12.5828 4.41978 13.8765 4.73333C14.0572 4.77714 14.1986 4.91761 14.2437 5.09801L15.5299 10.2425C15.6411 10.6876 16.0411 10.9999 16.5 10.9999C16.7761 10.9999 17 11.2238 17 11.4999V14.4999C17 14.7761 16.7761 14.9999 16.5 14.9999H3.5C3.22386 14.9999 3 14.7761 3 14.4999V11.4999C3 11.2238 3.22386 10.9999 3.5 10.9999Z" fill="currentColor"/>
<path d="M16.5 13C16.5 13.8284 15.8284 14.5 15 14.5C14.1716 14.5 13.5 13.8284 13.5 13C13.5 12.1716 14.1716 11.5 15 11.5C15.8284 11.5 16.5 12.1716 16.5 13Z" fill="currentColor"/>
<path d="M6.5 13C6.5 13.8284 5.82843 14.5 5 14.5C4.17157 14.5 3.5 13.8284 3.5 13C3.5 12.1716 4.17157 11.5 5 11.5C5.82843 11.5 6.5 12.1716 6.5 13Z" fill="currentColor"/>
<path d="M4 15.5C4.82843 15.5 5.5 16.1716 5.5 17V18C5.5 18.8284 4.82843 19.5 4 19.5C3.17157 19.5 2.5 18.8284 2.5 18V17C2.5 16.1716 3.17157 15.5 4 15.5Z" fill="currentColor"/>
<path d="M16 15.5C16.8284 15.5 17.5 16.1716 17.5 17V18C17.5 18.8284 16.8284 19.5 16 19.5C15.1716 19.5 14.5 18.8284 14.5 18V17C14.5 16.1716 15.1716 15.5 16 15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1948 5H7.80491C6.862 5 6.04716 5.65858 5.8494 6.58052L5.42037 8.58052C5.3908 8.71839 5.37589 8.859 5.37589 9C5.37589 10.1046 6.27132 11 7.37589 11H12.6238C12.7648 11 12.9054 10.9851 13.0433 10.9555C14.1233 10.7238 14.811 9.66052 14.5793 8.58052L14.1503 6.58052C13.9525 5.65858 13.1377 5 12.1948 5ZM7.37589 9L7.80491 7H12.1948L12.6238 9H7.37589Z" fill="currentColor"/>
</svg>
`;

const Cart$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5131 6L7.48727 6C7.29999 6 7.11329 6.02105 6.9307 6.06274C5.58464 6.37013 4.74263 7.71051 5.05002 9.05657L5.96345 13.0566C6.2231 14.1936 7.23443 15 8.40071 15L15.5996 15C16.7659 15 17.7772 14.1936 18.0369 13.0566L18.9503 9.05657C18.992 8.87398 19.0131 8.68729 19.0131 8.5C19.0131 7.11929 17.8938 6 16.5131 6ZM7.37596 8.01255C7.41248 8.00421 7.44982 8 7.48727 8L16.5131 8C16.7892 8 17.0131 8.22386 17.0131 8.5C17.0131 8.53746 17.0089 8.5748 17.0005 8.61131L16.0871 12.6113C16.0352 12.8387 15.8329 13 15.5996 13L8.40071 13C8.16745 13 7.96519 12.8387 7.91326 12.6113L6.99982 8.61131C6.93835 8.3421 7.10675 8.07403 7.37596 8.01255Z" fill="currentColor"/>
<path d="M3.49044 2L2 2C1.44772 2 1 1.55228 1 1C1 0.447715 1.44772 0 2 0L4.28977 0C4.75718 0 5.16223 0.323776 5.2652 0.779696L7.97543 12.7797C8.0971 13.3184 7.75902 13.8538 7.2203 13.9754C6.68159 14.0971 6.14624 13.759 6.02457 13.2203L3.49044 2Z" fill="currentColor"/>
<path d="M10 17.25C10 18.2165 9.2165 19 8.25 19C7.2835 19 6.5 18.2165 6.5 17.25C6.5 16.2835 7.2835 15.5 8.25 15.5C9.2165 15.5 10 16.2835 10 17.25Z" fill="currentColor"/>
<path d="M17 17.25C17 18.2165 16.2165 19 15.25 19C14.2835 19 13.5 18.2165 13.5 17.25C13.5 16.2835 14.2835 15.5 15.25 15.5C16.2165 15.5 17 16.2835 17 17.25Z" fill="currentColor"/>
</svg>
`;

const Checkmark$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3742 5.98559L10.3742 14.9856C9.72664 16.1511 7.97833 15.1798 8.62585 14.0143L13.6258 5.01431C14.2734 3.84876 16.0217 4.82005 15.3742 5.98559Z" fill="currentColor"/>
<path d="M5.1247 9.71907L10.1247 13.7191C11.1659 14.552 9.91646 16.1137 8.87531 15.2808L3.87531 11.2808C2.83415 10.4479 4.08354 8.88615 5.1247 9.71907Z" fill="currentColor"/>
</svg>
`;

const Circle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10ZM13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
</svg>
`;

const CircleFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="6" fill="currentColor"/>
</svg>
`;

const Clipboard$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.5H7C6.44772 2.5 6 2.94772 6 3.5V7C6 7.55228 6.44772 8 7 8H13C13.5523 8 14 7.55228 14 7V3.5C14 2.94772 13.5523 2.5 13 2.5ZM8 6V4.5H12V6H8Z" fill="currentColor"/>
<path d="M15.5 17.5H4.5C3.94772 17.5 3.5 17.0523 3.5 16.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H7.5V5.5H5.5V15.5H14.5V5.5H12.5V3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5V16.5C16.5 17.0523 16.0523 17.5 15.5 17.5Z" fill="currentColor"/>
</svg>
`;

const Clock$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4608 12.7593C10.0415 13.1187 9.41017 13.0701 9.05074 12.6508C8.69132 12.2315 8.73988 11.6002 9.15921 11.2408L12.6592 8.24076C13.0785 7.88134 13.7098 7.9299 14.0693 8.34923C14.4287 8.76855 14.3801 9.39985 13.9608 9.75927L10.4608 12.7593Z" fill="currentColor"/>
<path d="M8.81 6C8.81 5.44772 9.25772 5 9.81 5C10.3623 5 10.81 5.44772 10.81 6V12C10.81 12.5523 10.3623 13 9.81 13C9.25772 13 8.81 12.5523 8.81 12V6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor"/>
</svg>
`;

const Cloud$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
</svg>
`;

const CloudDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
<path d="M9.5 10C9.5 9.44771 9.94772 9 10.5 9C11.0523 9 11.5 9.44771 11.5 10L11.5 17.5C11.5 18.0523 11.0523 18.5 10.5 18.5C9.94772 18.5 9.5 18.0523 9.5 17.5V10Z" fill="currentColor"/>
<path d="M12.3753 14.7191C12.8066 14.3741 13.4359 14.444 13.7809 14.8753C14.1259 15.3065 14.056 15.9358 13.6247 16.2808L11.1247 18.2808C10.6934 18.6258 10.0641 18.5559 9.71912 18.1247C9.37412 17.6934 9.44404 17.0641 9.8753 16.7191L12.3753 14.7191Z" fill="currentColor"/>
<path d="M7.3753 16.2808C6.94404 15.9358 6.87412 15.3065 7.21912 14.8753C7.56413 14.444 8.19343 14.3741 8.62469 14.7191L11.1247 16.7191C11.556 17.0641 11.6259 17.6934 11.2809 18.1247C10.9359 18.5559 10.3066 18.6258 9.8753 18.2808L7.3753 16.2808Z" fill="currentColor"/>
</svg>
`;

const CloudDownFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14V9.25C12 8.42157 11.3284 7.75 10.5 7.75C9.67157 7.75 9 8.42157 9 9.25V14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H6.12602C6.57006 4.27477 8.13616 3 10 3H11C12.9002 3 14.4909 4.32493 14.8987 6.10135C16.6751 6.50915 18 8.09985 18 10C18 12.2091 16.2091 14 14 14H12Z" fill="currentColor"/>
<path d="M9.5 9.5C9.5 8.94771 9.94772 8.5 10.5 8.5C11.0523 8.5 11.5 8.94771 11.5 9.5L11.5 17C11.5 17.5523 11.0523 18 10.5 18C9.94772 18 9.5 17.5523 9.5 17V9.5Z" fill="currentColor"/>
<path d="M12.3753 14.7191C12.8066 14.3741 13.4359 14.444 13.7809 14.8753C14.1259 15.3065 14.056 15.9358 13.6247 16.2808L11.1247 18.2808C10.6934 18.6258 10.0641 18.5559 9.71912 18.1247C9.37412 17.6934 9.44404 17.0641 9.8753 16.7191L12.3753 14.7191Z" fill="currentColor"/>
<path d="M7.3753 16.2808C6.94404 15.9358 6.87412 15.3065 7.21912 14.8753C7.56413 14.444 8.19343 14.3741 8.62469 14.7191L11.1247 16.7191C11.556 17.0641 11.6259 17.6934 11.2809 18.1247C10.9359 18.5559 10.3066 18.6258 9.8753 18.2808L7.3753 16.2808Z" fill="currentColor"/>
</svg>
`;

const CloudFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="6" width="16" height="8" rx="4" fill="currentColor"/>
<rect x="6" y="3" width="9" height="8" rx="4" fill="currentColor"/>
</svg>
`;

const CloudUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
<path d="M11.5 16C11.5 16.5523 11.0523 17 10.5 17C9.94772 17 9.5 16.5523 9.5 16V8.5C9.5 7.94772 9.94772 7.5 10.5 7.5C11.0523 7.5 11.5 7.94772 11.5 8.5V16Z" fill="currentColor"/>
<path d="M8.6247 11.2809C8.19344 11.6259 7.56415 11.556 7.21914 11.1247C6.87413 10.6935 6.94405 10.0642 7.37531 9.71917L9.87531 7.71917C10.3066 7.37416 10.9359 7.44408 11.2809 7.87534C11.6259 8.3066 11.556 8.9359 11.1247 9.28091L8.6247 11.2809Z" fill="currentColor"/>
<path d="M13.6247 9.71917C14.056 10.0642 14.1259 10.6935 13.7809 11.1247C13.4359 11.556 12.8066 11.6259 12.3753 11.2809L9.87531 9.28091C9.44405 8.9359 9.37413 8.3066 9.71914 7.87534C10.0641 7.44408 10.6934 7.37416 11.1247 7.71917L13.6247 9.71917Z" fill="currentColor"/>
</svg>
`;

const CloudUpFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14V10.6777L12.252 11.2653C12.6872 11.6053 13.3157 11.5281 13.6557 11.0929C13.9957 10.6577 13.9186 10.0293 13.4834 9.68924L11.1791 7.88897C10.9911 7.71827 10.7494 7.6299 10.5057 7.63022C10.262 7.6299 10.0203 7.71827 9.83225 7.88897L7.52801 9.68924C7.0928 10.0293 7.01564 10.6577 7.35566 11.0929C7.69568 11.5281 8.32413 11.6053 8.75933 11.2653L9.5 10.6866V14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H6.12602C6.57006 4.27477 8.13616 3 10 3H11C12.9002 3 14.4909 4.32493 14.8987 6.10135C16.6751 6.50915 18 8.09985 18 10C18 12.2091 16.2091 14 14 14H11.5Z" fill="currentColor"/>
</svg>
`;

const Coctail$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H14C14.2761 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.2761 8 14 8H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7672 5.68045L9.2672 12.6805C9.66284 13.1065 10.3372 13.1065 10.7328 12.6805L17.2328 5.68045C17.8269 5.0406 17.3732 4 16.5 4L3.5 4C2.62683 4 2.17306 5.0406 2.7672 5.68045ZM14.2068 6L10 10.5304L5.79321 6L14.2068 6Z" fill="currentColor"/>
<path d="M11 11.5V18.5H9V11.5H11Z" fill="currentColor"/>
<path d="M14.5 20H5.5C5.5 18.5251 7.55015 17.5 10 17.5C12.4499 17.5 14.5 18.5251 14.5 20Z" fill="currentColor"/>
<path d="M12.8181 1.7276C12.4163 1.62714 12.1719 1.21994 12.2724 0.818093C12.3729 0.416246 12.7801 0.171926 13.1819 0.272387L17.1819 1.27239C17.5837 1.37285 17.8281 1.78005 17.7276 2.1819C17.6271 2.58374 17.2199 2.82806 16.8181 2.7276L12.8181 1.7276Z" fill="currentColor"/>
<path d="M11.2115 8.73717C11.0805 9.13013 10.6558 9.3425 10.2628 9.21151C9.86987 9.08052 9.6575 8.65578 9.78849 8.26283L12.2885 0.762827C12.4195 0.369869 12.8442 0.157499 13.2372 0.288485C13.6301 0.419471 13.8425 0.844211 13.7115 1.23717L11.2115 8.73717Z" fill="currentColor"/>
</svg>
`;

const ColorPicker$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.53559 15.2365C5.97633 15.853 3.27901 17.6075 2.80761 17.1361C2.50214 16.8306 3.13132 15.5905 3.77986 14.331L8.44112 14.331C8.23989 14.5322 7.93805 14.8341 7.53559 15.2365Z" fill="currentColor"/>
<path d="M15.8033 5.55458C16.1938 5.16405 16.827 5.16405 17.2175 5.55458C17.608 5.9451 17.608 6.57827 17.2175 6.96879L8.24269 15.9436C8.14598 16.0403 8.03045 16.1162 7.90325 16.1665C7.50692 16.3231 7.10374 16.5206 6.15046 17.0117C5.67928 17.2544 5.47122 17.3604 5.21667 17.4858C3.46857 18.3471 2.81156 18.5542 2.1005 17.8432C1.39079 17.1334 1.59726 16.4757 2.45234 14.7382C2.57904 14.4807 2.68633 14.2702 2.93201 13.7932C3.42302 12.8399 3.62051 12.4367 3.7772 12.0404C3.82749 11.9132 3.90334 11.7977 4.00005 11.701L12.9749 2.72615C13.3654 2.33563 13.9986 2.33563 14.3891 2.72615C14.7796 3.11667 14.7796 3.74984 14.3891 4.14036L5.55694 12.9725C5.38269 13.3873 5.16355 13.8285 4.71 14.709C4.47005 15.1749 4.36624 15.3786 4.24681 15.6213C4.22194 15.6718 4.19797 15.721 4.17491 15.7688C4.22594 15.7441 4.27854 15.7184 4.33275 15.6917C4.57289 15.5734 4.77428 15.4708 5.23465 15.2337C6.11518 14.7801 6.55634 14.561 6.97115 14.3867L15.8033 5.55458Z" fill="currentColor"/>
<path d="M14.3891 4.14039C13.9986 4.53092 13.3654 4.53092 12.9749 4.14039C12.5843 3.74987 12.5843 3.1167 12.9749 2.72618C14.1464 1.55461 16.0459 1.55461 17.2175 2.72618C18.3891 3.89775 18.3891 5.79725 17.2175 6.96882C16.827 7.35934 16.1938 7.35934 15.8033 6.96882C15.4128 6.5783 15.4128 5.94513 15.8033 5.55461C16.1938 5.16408 16.1938 4.53092 15.8033 4.14039C15.4128 3.74987 14.7796 3.74987 14.3891 4.14039Z" fill="currentColor"/>
<path d="M9.4373 4.84541C9.04678 4.45489 9.04678 3.82172 9.4373 3.4312C9.82783 3.04067 10.461 3.04067 10.8515 3.4312L16.5084 9.08805C16.8989 9.47858 16.8989 10.1117 16.5084 10.5023C16.1178 10.8928 15.4847 10.8928 15.0942 10.5023L9.4373 4.84541Z" fill="currentColor"/>
</svg>
`;

const Contract$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711Z" fill="currentColor"/>
<path d="M11 10C10.4477 10 10 9.55228 10 9C10 8.44772 10.4477 8 11 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H11Z" fill="currentColor"/>
<path d="M12 9C12 9.55228 11.5523 10 11 10C10.4477 10 10 9.55228 10 9V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V9Z" fill="currentColor"/>
<path d="M5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929C10.0976 10.6834 10.0976 11.3166 9.70711 11.7071L5.70711 15.7071Z" fill="currentColor"/>
<path d="M10 15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15V11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11V15Z" fill="currentColor"/>
<path d="M5 12C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H5Z" fill="currentColor"/>
</svg>
`;

const Controller$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.25 10C11.5596 10 11 9.44036 11 8.75C11 8.05964 11.5596 7.5 12.25 7.5C12.9404 7.5 13.5 8.05964 13.5 8.75C13.5 9.44036 12.9404 10 12.25 10Z" fill="currentColor"/>
<path d="M14.25 12.5C13.5596 12.5 13 11.9404 13 11.25C13 10.5596 13.5596 10 14.25 10C14.9404 10 15.5 10.5596 15.5 11.25C15.5 11.9404 14.9404 12.5 14.25 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 4H5.5C2.73858 4 0.5 6.23858 0.5 9V11C0.5 13.7614 2.73858 16 5.5 16H14.5C17.2614 16 19.5 13.7614 19.5 11V9C19.5 6.23858 17.2614 4 14.5 4ZM2.5 9C2.5 7.34315 3.84315 6 5.5 6H14.5C16.1569 6 17.5 7.34315 17.5 9V11C17.5 12.6569 16.1569 14 14.5 14H5.5C3.84315 14 2.5 12.6569 2.5 11V9Z" fill="currentColor"/>
<path d="M4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H4Z" fill="currentColor"/>
<path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V12Z" fill="currentColor"/>
</svg>
`;

const CreditCard$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H4C2.34315 4 1 5.34315 1 7V14C1 15.6569 2.34315 17 4 17H16C17.6569 17 19 15.6569 19 14V7C19 5.34315 17.6569 4 16 4ZM3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7V14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14V7Z" fill="currentColor"/>
<path d="M2.5 7H17.5C17.7761 7 18 7.22386 18 7.5V8.5C18 8.77614 17.7761 9 17.5 9H2.5C2.22386 9 2 8.77614 2 8.5V7.5C2 7.22386 2.22386 7 2.5 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10H5C4.44772 10 4 10.4477 4 11V12C4 12.5523 4.44772 13 5 13H6C6.55228 13 7 12.5523 7 12V11C7 10.4477 6.55228 10 6 10ZM5 12V11H6V12H5Z" fill="currentColor"/>
</svg>
`;

const Cup$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5C2.5 9.91828 5.56129 14 9.5 14C13.4387 14 16.5 9.91828 16.5 5C16.5 4.44772 16.0523 4 15.5 4ZM9.5 12C7.04469 12 4.90411 9.43007 4.55098 6H14.449C14.0959 9.43007 11.9553 12 9.5 12Z" fill="currentColor"/>
<path d="M4 14.5H15C15.5523 14.5 16 14.9477 16 15.5C16 16.0523 15.5523 16.5 15 16.5H4C3.44772 16.5 3 16.0523 3 15.5C3 14.9477 3.44772 14.5 4 14.5Z" fill="currentColor"/>
<path d="M14.0244 10.8095L14.5756 8.88698C14.8334 8.96088 15.115 9 15.4073 9C16.5144 9 17.3 8.45687 17.3 8C17.3 7.54313 16.5144 7 15.4073 7V5C17.4953 5 19.3 6.24773 19.3 8C19.3 9.75227 17.4953 11 15.4073 11C14.9297 11 14.4625 10.9351 14.0244 10.8095Z" fill="currentColor"/>
</svg>
`;

const Division$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
<circle cx="10" cy="5.5" r="1.5" fill="currentColor"/>
<circle cx="10" cy="14.5" r="1.5" fill="currentColor"/>
</svg>
`;

const DotsX$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="10" r="2" fill="currentColor"/>
<circle cx="10" cy="10" r="2" fill="currentColor"/>
<circle cx="15" cy="10" r="2" fill="currentColor"/>
</svg>
`;

const DotsY$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="15" r="2" fill="currentColor"/>
<circle cx="10" cy="10" r="2" fill="currentColor"/>
<circle cx="10" cy="5" r="2" fill="currentColor"/>
</svg>
`;

const Dress$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99927 2.70211L9.64627 2.5941C9.28672 2.48409 8.90774 2.45252 8.53495 2.50153C7.09604 2.69069 6.08292 4.01049 6.27208 5.4494L6.46159 6.89101C6.65785 8.38388 7.93029 9.5 9.436 9.5H10.563C12.0687 9.5 13.3412 8.38388 13.5374 6.89101L13.7269 5.4494C13.7759 5.07661 13.7444 4.69765 13.6344 4.33811C13.2098 2.95027 11.7405 2.1694 10.3527 2.59398L9.99927 2.70211ZM8.79562 4.48447C8.88468 4.47276 8.97522 4.48031 9.06112 4.50659L9.99924 4.79362L10.9378 4.50648C11.2694 4.40504 11.6204 4.59161 11.7219 4.9232C11.7482 5.00911 11.7557 5.09965 11.744 5.18872L11.5545 6.63033C11.4891 7.12796 11.0649 7.5 10.563 7.5H9.436C8.9341 7.5 8.50995 7.12796 8.44453 6.63033L8.25502 5.18872C8.20983 4.84496 8.45187 4.52966 8.79562 4.48447Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9944 8L7.76658 8C7.22684 8 6.69709 8.14562 6.23318 8.42149C4.53499 9.43138 3.28005 10.5679 2.46835 11.8311C2.20882 12.235 1.94566 12.6035 1.69984 12.9477C0.629095 14.4468 -0.112873 15.4856 1.20518 16.9893C2.82583 18.8381 6.25948 20 9.62895 20C12.9984 20 16.355 19.3152 18.5339 16.9893C20.1469 15.2674 19.4765 14.4997 18.4337 13.3053C18.0679 12.8863 17.6561 12.4148 17.2811 11.8311C16.4381 10.5193 15.1772 9.37695 13.4983 8.40423C13.0413 8.13944 12.5225 8 11.9944 8ZM15.5985 12.9123C15.791 13.2119 15.9976 13.4982 16.2256 13.7871C16.2732 13.8474 16.4181 14.0186 16.5949 14.2274C16.8774 14.5611 17.2411 14.9907 17.4184 15.2167C17.3498 15.31 17.2393 15.4458 17.0743 15.622C15.557 17.2417 13.041 18 9.62895 18C6.72121 18 3.87183 16.9973 2.70916 15.6709C2.51428 15.4486 2.49949 15.4439 2.49975 15.4404C2.49978 15.44 2.50002 15.4396 2.50019 15.4389C2.52953 15.3206 2.64581 15.0964 2.89442 14.7271C2.92791 14.6773 3.04237 14.5151 3.18785 14.309C3.45827 13.9257 3.83589 13.3906 3.99994 13.1434C4.05145 13.0658 4.10169 12.9889 4.15093 12.9123C4.78162 11.9308 5.8079 11.0013 7.25545 10.1405C7.41007 10.0485 7.58667 10 7.76658 10L11.9944 10C12.1704 10 12.3434 10.0465 12.4957 10.1347C13.9132 10.9561 14.9381 11.8845 15.5985 12.9123Z" fill="currentColor"/>
<path d="M5.80364 1.27854C5.64981 0.893957 5.83687 0.457479 6.22146 0.303644C6.60605 0.149809 7.04252 0.33687 7.19636 0.721458L8.19636 3.22146C8.35019 3.60605 8.16313 4.04252 7.77854 4.19636C7.39396 4.35019 6.95748 4.16313 6.80364 3.77854L5.80364 1.27854Z" fill="currentColor"/>
<path d="M12.8036 0.721458C12.9575 0.33687 13.394 0.149809 13.7785 0.303644C14.1631 0.457479 14.3502 0.893957 14.1964 1.27854L13.1964 3.77854C13.0425 4.16313 12.606 4.35019 12.2215 4.19636C11.8369 4.04252 11.6498 3.60605 11.8036 3.22146L12.8036 0.721458Z" fill="currentColor"/>
<path d="M9.5 12.5C9.5 12.2239 9.72386 12 10 12C10.2761 12 10.5 12.2239 10.5 12.5V16.5C10.5 16.7761 10.2761 17 10 17C9.72386 17 9.5 16.7761 9.5 16.5V12.5Z" fill="currentColor"/>
<path d="M7.05257 12.2768C7.17582 12.0297 7.47606 11.9293 7.72317 12.0526C7.97028 12.1758 8.07069 12.4761 7.94744 12.7232L6.44744 15.7306C6.32418 15.9777 6.02395 16.0781 5.77684 15.9549C5.52973 15.8316 5.42932 15.5314 5.55257 15.2843L7.05257 12.2768Z" fill="currentColor"/>
<path d="M12.9472 12.2764C12.8237 12.0294 12.5234 11.9293 12.2764 12.0528C12.0294 12.1763 11.9293 12.4766 12.0528 12.7236L13.5528 15.7236C13.6763 15.9706 13.9766 16.0707 14.2236 15.9472C14.4706 15.8237 14.5707 15.5234 14.4472 15.2764L12.9472 12.2764Z" fill="currentColor"/>
</svg>
`;

const Duplicate$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6.5H7.5C6.94772 6.5 6.5 6.94772 6.5 7.5V15.5C6.5 16.0523 6.94772 16.5 7.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V7.5C16.5 6.94772 16.0523 6.5 15.5 6.5ZM8.5 14.5V8.5H14.5V14.5H8.5Z" fill="currentColor"/>
<path d="M6.5 13.5H4.5C3.94772 13.5 3.5 13.0523 3.5 12.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H12.5C13.0523 3.5 13.5 3.94772 13.5 4.5V6.5H11.5V5.5H5.5V11.5H6.5V13.5Z" fill="currentColor"/>
</svg>
`;

const Electricity$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8H11.9451L13.9191 3.39392C14.2019 2.73405 13.7179 2 13 2H8C7.59997 2 7.23843 2.2384 7.08086 2.60608L4.08086 9.60608C3.79805 10.2659 4.28208 11 5 11H6.73423L4.07207 17.6273C3.67234 18.6223 4.90667 19.4633 5.68646 18.7272L10.7099 13.9849L15.6501 9.75985C16.3559 9.156 15.9289 8 15 8ZM9.50943 8.60608C9.22663 9.26595 9.71066 10 10.4286 10H12.2929L9.37334 12.4979L7.62514 14.1477L9.14152 10.3727C9.40546 9.71569 8.92168 9 8.21359 9H6.51654L8.6594 4H11.4835L9.50943 8.60608Z" fill="currentColor"/>
</svg>
`;

const Exclamation$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7C9 6.44772 9.44772 6 10 6C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V7Z" fill="currentColor"/>
<circle cx="10" cy="14" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor"/>
</svg>
`;

const ExclamationFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 6C9.44772 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 6.44772 10.5523 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor"/>
</svg>
`;

const Expand$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929C10.0976 10.6834 10.0976 11.3166 9.70711 11.7071L5.70711 15.7071Z" fill="currentColor"/>
<path d="M5 16C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5Z" fill="currentColor"/>
<path d="M6 15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15V11C4 10.4477 4.44772 10 5 10C5.55228 10 6 10.4477 6 11V15Z" fill="currentColor"/>
<path d="M11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711Z" fill="currentColor"/>
<path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V9Z" fill="currentColor"/>
<path d="M11 6C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H11Z" fill="currentColor"/>
</svg>
`;

const Eye$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C14.8972 16.5 19 14.1922 19 11C19 7.80784 14.8972 5.5 10 5.5C5.10282 5.5 1 7.80784 1 11C1 14.1922 5.10282 16.5 10 16.5ZM10 7.5C13.9394 7.5 17 9.2216 17 11C17 12.7784 13.9394 14.5 10 14.5C6.06062 14.5 3 12.7784 3 11C3 9.2216 6.06062 7.5 10 7.5Z" fill="currentColor"/>
<path d="M9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5L11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5L9 3.5Z" fill="currentColor"/>
<path d="M13.0194 3.80383C13.1277 3.26227 13.6546 2.91106 14.1961 3.01937C14.7377 3.12768 15.0889 3.65451 14.9806 4.19606L14.4806 6.69606C14.3723 7.23762 13.8455 7.58884 13.3039 7.48053C12.7623 7.37222 12.4111 6.84539 12.5194 6.30383L13.0194 3.80383Z" fill="currentColor"/>
<path d="M6.98063 3.80383C6.87232 3.26227 6.34549 2.91106 5.80394 3.01937C5.26238 3.12768 4.91116 3.65451 5.01947 4.19606L5.51947 6.69606C5.62778 7.23762 6.15461 7.58884 6.69617 7.48053C7.23773 7.37222 7.58894 6.84539 7.48063 6.30383L6.98063 3.80383Z" fill="currentColor"/>
<path d="M2.85752 4.98553C2.57338 4.51195 1.95912 4.35839 1.48554 4.64254C1.01196 4.92668 0.858391 5.54094 1.14254 6.01452L2.64254 8.51452C2.92669 8.98811 3.54095 9.14167 4.01453 8.85752C4.48811 8.57337 4.64167 7.95911 4.35752 7.48553L2.85752 4.98553Z" fill="currentColor"/>
<path d="M17.1425 4.98553C17.4267 4.51195 18.0409 4.35839 18.5145 4.64254C18.9881 4.92668 19.1417 5.54094 18.8575 6.01452L17.3575 8.51452C17.0734 8.98811 16.4591 9.14167 15.9855 8.85752C15.512 8.57337 15.3584 7.95911 15.6425 7.48553L17.1425 4.98553Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5C6.5 12.433 8.067 14 10 14ZM10 9C10.8284 9 11.5 9.67157 11.5 10.5C11.5 11.3284 10.8284 12 10 12C9.17157 12 8.5 11.3284 8.5 10.5C8.5 9.67157 9.17157 9 10 9Z" fill="currentColor"/>
</svg>
`;

const EyeClosed$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.68785 8.3059C1.36563 7.85735 1.46804 7.23252 1.91659 6.9103C2.36514 6.58809 2.98996 6.6905 3.31218 7.13905C3.61604 7.56204 4.08475 7.96552 4.69177 8.31591C5.98515 9.0625 7.77707 9.5 9.70427 9.5C11.6315 9.5 13.4234 9.0625 14.7168 8.31591C15.3238 7.96552 15.7925 7.56204 16.0964 7.13905C16.4186 6.6905 17.0434 6.58809 17.4919 6.9103C17.9405 7.23252 18.0429 7.85735 17.7207 8.3059C17.2402 8.97475 16.5568 9.56308 15.7166 10.048C14.1049 10.9784 11.9685 11.5 9.70427 11.5C7.44004 11.5 5.30364 10.9784 3.69192 10.048C2.85176 9.56308 2.16833 8.97475 1.68785 8.3059Z" fill="currentColor"/>
<path d="M11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11L9 13.5C9 14.0523 9.44772 14.5 10 14.5C10.5523 14.5 11 14.0523 11 13.5L11 11Z" fill="currentColor"/>
<path d="M5.52985 10.7575C5.6638 10.2217 6.20673 9.8959 6.74253 10.0298C7.27832 10.1638 7.60408 10.7067 7.47013 11.2425L6.97013 13.2425C6.83619 13.7783 6.29325 14.1041 5.75746 13.9701C5.22166 13.8362 4.8959 13.2933 5.02985 12.7575L5.52985 10.7575Z" fill="currentColor"/>
<path d="M13.9702 10.7575C13.8362 10.2217 13.2933 9.8959 12.7575 10.0298C12.2217 10.1638 11.8959 10.7067 12.0299 11.2425L12.5299 13.2425C12.6638 13.7783 13.2067 14.1041 13.7425 13.9701C14.2783 13.8362 14.6041 13.2933 14.4702 12.7575L13.9702 10.7575Z" fill="currentColor"/>
<path d="M16.5249 8.29289C16.1343 7.90237 15.5012 7.90237 15.1106 8.29289C14.7201 8.68342 14.7201 9.31658 15.1106 9.70711L17.1106 11.7071C17.5012 12.0976 18.1343 12.0976 18.5249 11.7071C18.9154 11.3166 18.9154 10.6834 18.5249 10.2929L16.5249 8.29289Z" fill="currentColor"/>
<path d="M3.07775 8.32742C3.44921 7.91872 4.08165 7.88853 4.49036 8.25999C4.89906 8.63145 4.92924 9.26389 4.55779 9.67259L2.74002 11.6726C2.36857 12.0813 1.73612 12.1115 1.32742 11.74C0.918719 11.3686 0.88853 10.7361 1.25999 10.3274L3.07775 8.32742Z" fill="currentColor"/>
</svg>
`;

const EyeOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C14.8972 16.5 19 14.1922 19 11C19 7.80784 14.8972 5.5 10 5.5C5.10282 5.5 1 7.80784 1 11C1 14.1922 5.10282 16.5 10 16.5ZM10 7.5C13.9394 7.5 17 9.2216 17 11C17 12.7784 13.9394 14.5 10 14.5C6.06062 14.5 3 12.7784 3 11C3 9.2216 6.06062 7.5 10 7.5Z" fill="currentColor"/>
<path d="M9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5L11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5L9 3.5Z" fill="currentColor"/>
<path d="M13.0194 3.80383C13.1277 3.26227 13.6546 2.91106 14.1961 3.01937C14.7377 3.12768 15.0889 3.65451 14.9806 4.19606L14.4806 6.69606C14.3723 7.23762 13.8455 7.58884 13.3039 7.48053C12.7623 7.37222 12.4111 6.84539 12.5194 6.30383L13.0194 3.80383Z" fill="currentColor"/>
<path d="M6.98063 3.80383C6.87232 3.26227 6.34549 2.91106 5.80394 3.01937C5.26238 3.12768 4.91116 3.65451 5.01947 4.19606L5.51947 6.69606C5.62778 7.23762 6.15461 7.58884 6.69617 7.48053C7.23773 7.37222 7.58894 6.84539 7.48063 6.30383L6.98063 3.80383Z" fill="currentColor"/>
<path d="M2.85752 4.98553C2.57338 4.51195 1.95912 4.35839 1.48554 4.64254C1.01196 4.92668 0.858391 5.54094 1.14254 6.01452L2.64254 8.51452C2.92669 8.98811 3.54095 9.14167 4.01453 8.85752C4.48811 8.57337 4.64167 7.95911 4.35752 7.48553L2.85752 4.98553Z" fill="currentColor"/>
<path d="M17.1425 4.98553C17.4267 4.51195 18.0409 4.35839 18.5145 4.64254C18.9881 4.92668 19.1417 5.54094 18.8575 6.01452L17.3575 8.51452C17.0734 8.98811 16.4591 9.14167 15.9855 8.85752C15.512 8.57337 15.3584 7.95911 15.6425 7.48553L17.1425 4.98553Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5C6.5 12.433 8.067 14 10 14ZM10 9C10.8284 9 11.5 9.67157 11.5 10.5C11.5 11.3284 10.8284 12 10 12C9.17157 12 8.5 11.3284 8.5 10.5C8.5 9.67157 9.17157 9 10 9Z" fill="currentColor"/>
<path d="M17.9739 17.3101C18.3549 17.7098 18.3397 18.3428 17.9399 18.7239C17.5402 19.1049 16.9072 19.0897 16.5261 18.6899L1.27613 2.68994C0.895091 2.29016 0.910282 1.65717 1.31006 1.27613C1.70985 0.895091 2.34283 0.910282 2.72387 1.31006L17.9739 17.3101Z" fill="currentColor"/>
</svg>
`;

const File$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 11.25C6.08579 11.25 5.75 10.9142 5.75 10.5C5.75 10.0858 6.08579 9.75 6.5 9.75H13.5C13.9142 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 13.9142 11.25 13.5 11.25H6.5Z" fill="currentColor"/>
<path d="M6.5 14.25C6.08579 14.25 5.75 13.9142 5.75 13.5C5.75 13.0858 6.08579 12.75 6.5 12.75H13.5C13.9142 12.75 14.25 13.0858 14.25 13.5C14.25 13.9142 13.9142 14.25 13.5 14.25H6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1854 0.5H4.5C3.39543 0.5 2.5 1.39543 2.5 2.5V17.5C2.5 18.6046 3.39543 19.5 4.5 19.5H15.5C16.6046 19.5 17.5 18.6046 17.5 17.5V7.20179C17.5 6.70104 17.3122 6.21851 16.9736 5.84956L12.659 1.14777C12.2802 0.734983 11.7457 0.5 11.1854 0.5ZM4.5 17.5V2.5H11.1854L15.5 7.20179V17.5H4.5Z" fill="currentColor"/>
<path d="M11.5 6.5H16.5C17.0523 6.5 17.5 6.94772 17.5 7.5C17.5 8.05228 17.0523 8.5 16.5 8.5H10.5C9.94772 8.5 9.5 8.05228 9.5 7.5V1.5C9.5 0.947715 9.94772 0.5 10.5 0.5C11.0523 0.5 11.5 0.947715 11.5 1.5V6.5Z" fill="currentColor"/>
</svg>
`;

const FilmFrame$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5C0.947715 2.5 0.5 2.94772 0.5 3.5V16.5C0.5 17.0523 0.947715 17.5 1.5 17.5H18.5C19.0523 17.5 19.5 17.0523 19.5 16.5V3.5C19.5 2.94772 19.0523 2.5 18.5 2.5H1.5ZM15.5 4.5H16.5C16.7761 4.5 17 4.72386 17 5V6C17 6.27614 16.7761 6.5 16.5 6.5H15.5C15.2239 6.5 15 6.27614 15 6V5C15 4.72386 15.2239 4.5 15.5 4.5ZM16.5 7.5H15.5C15.2239 7.5 15 7.72386 15 8V9C15 9.27614 15.2239 9.5 15.5 9.5H16.5C16.7761 9.5 17 9.27614 17 9V8C17 7.72386 16.7761 7.5 16.5 7.5ZM15.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11V12C17 12.2761 16.7761 12.5 16.5 12.5H15.5C15.2239 12.5 15 12.2761 15 12V11C15 10.7239 15.2239 10.5 15.5 10.5ZM16.5 13.5H15.5C15.2239 13.5 15 13.7239 15 14V15C15 15.2761 15.2239 15.5 15.5 15.5H16.5C16.7761 15.5 17 15.2761 17 15V14C17 13.7239 16.7761 13.5 16.5 13.5ZM3.5 4.5H4.5C4.77614 4.5 5 4.72386 5 5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V5C3 4.72386 3.22386 4.5 3.5 4.5ZM4.5 7.5H3.5C3.22386 7.5 3 7.72386 3 8V9C3 9.27614 3.22386 9.5 3.5 9.5H4.5C4.77614 9.5 5 9.27614 5 9V8C5 7.72386 4.77614 7.5 4.5 7.5ZM3.5 10.5H4.5C4.77614 10.5 5 10.7239 5 11V12C5 12.2761 4.77614 12.5 4.5 12.5H3.5C3.22386 12.5 3 12.2761 3 12V11C3 10.7239 3.22386 10.5 3.5 10.5ZM4.5 13.5H3.5C3.22386 13.5 3 13.7239 3 14V15C3 15.2761 3.22386 15.5 3.5 15.5H4.5C4.77614 15.5 5 15.2761 5 15V14C5 13.7239 4.77614 13.5 4.5 13.5ZM6.5 15.5V4.5H13.5V15.5H6.5Z" fill="currentColor"/>
</svg>
`;

const Flag$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80448 2.63235L6.16667 2.89616C4.85526 3.43858 4 4.71786 4 6.13702V10.5225C4 10.7701 4.06299 11.0136 4.18304 11.2301C4.57382 11.9348 5.46192 12.1894 6.16667 11.7986L6.39359 11.6727C7.60021 11.0037 9.06646 11.0037 10.2731 11.6727L10.7269 11.9244C11.9335 12.5935 13.3998 12.5935 14.6064 11.9244L15.3405 11.5173C16.3646 10.9495 17 9.87065 17 8.69964V4.63805C17 4.47989 16.9766 4.3226 16.9306 4.17129C16.6728 3.32398 15.7769 2.84607 14.9296 3.10386L14.0366 3.37555C13.1508 3.64503 12.199 3.5989 11.3435 3.24503L9.86219 2.63235C8.88317 2.22741 7.78349 2.22741 6.80448 2.63235ZM11.6968 10.1753L11.243 9.92365C9.6212 9.02438 7.68677 8.93089 6 9.64316V6.13702C6 5.52716 6.36754 4.9774 6.93109 4.74431L7.56891 4.4805C8.05841 4.27803 8.60825 4.27803 9.09776 4.4805L10.579 5.09318C11.8624 5.62399 13.2901 5.69318 14.6187 5.28896L15 5.17296V8.69964C15 9.14374 14.759 9.55287 14.3707 9.76823L13.6365 10.1753C13.0332 10.5098 12.3001 10.5098 11.6968 10.1753Z" fill="currentColor"/>
<rect x="4" y="2" width="2" height="16" rx="1" fill="currentColor"/>
</svg>
`;

const Flower$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5883 2.36575L12.5166 2.44429C12.4102 2.5604 12.3177 2.65963 12.2363 2.7445C12.1783 2.6674 12.131 2.60442 12.1069 2.57222C12.0962 2.55804 12.0901 2.54982 12.0895 2.54901C11.781 2.14919 11.521 1.85543 11.2421 1.61995C10.8599 1.29718 10.4625 1.10176 10 1.10176C9.75073 1.10176 9.51343 1.16296 9.29033 1.27123C8.80211 1.50815 8.44017 1.90299 7.95721 2.57792C7.93063 2.61506 7.88552 2.67912 7.83669 2.74871C7.74548 2.6579 7.64046 2.55003 7.51765 2.42149L7.44953 2.35008C6.89581 1.76866 6.74857 1.6202 6.50141 1.4188C6.26666 1.22751 6.05621 1.09922 5.79569 1.03537C5.22149 0.894639 4.64828 1.18504 4.43938 1.76057C4.1503 2.55696 4 3.41174 4 4.28812C4 8.2285 6.21172 11 10 11C13.7883 11 16 8.2285 16 4.28812C16 3.41174 15.8497 2.55696 15.5606 1.76057C15.3529 1.18826 14.7801 0.89035 14.2009 1.03736C13.938 1.10408 13.7302 1.23584 13.4994 1.43184C13.2609 1.63445 13.1249 1.77767 12.5883 2.36575ZM10 9.00002C7.42805 9.00002 6 7.21053 6 4.28812C6 4.10858 6.00853 3.93059 6.02539 3.75471L6.07157 3.80311C6.48039 4.23101 6.73147 4.4747 6.99228 4.67463C7.63975 5.17099 8.29621 5.36404 8.89641 4.67838C9.00414 4.55531 9.10967 4.4156 9.25158 4.21495C9.26057 4.20223 9.28945 4.16095 9.32704 4.10719C9.41015 3.98837 9.53586 3.80861 9.58368 3.74178C9.75942 3.4962 9.90624 3.31505 10.0126 3.20218C10.1467 3.32743 10.3081 3.51428 10.5059 3.77068C10.4612 3.71264 11.0562 4.50836 11.2051 4.67838C11.8078 5.36697 12.4722 5.16831 13.1048 4.66706C13.3559 4.46807 13.5972 4.22516 13.9795 3.80818C13.9931 3.96663 14 4.12675 14 4.28812C14 7.21053 12.572 9.00002 10 9.00002Z" fill="currentColor"/>
<path d="M9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V17.5C11 18.0523 10.5523 18.5 10 18.5C9.44772 18.5 9 18.0523 9 17.5V11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7672 13.015C9.58159 14.8489 8.14539 17.1796 9.32942 18.5906C10.4954 19.9802 13.7081 19.2188 15.6239 17.6112C17.4921 16.0436 18.344 13.7765 17.18 12.3893C16.016 11.0021 13.6354 11.4474 11.7672 13.015ZM10.9199 17.3432C10.9062 17.3379 10.8943 17.3318 10.8841 17.325L10.9024 17.3544C10.9103 17.3611 10.915 17.3586 10.9199 17.3432ZM14.3383 16.0792C13.2305 17.0087 11.3237 17.5007 10.9199 17.3432C10.9221 17.3361 10.9244 17.3262 10.927 17.3132C10.9648 17.1241 11.0828 16.8557 11.2748 16.5442C11.6794 15.8876 12.3519 15.1352 13.0528 14.5471C14.1872 13.5951 15.3919 13.3698 15.6479 13.6749C15.9039 13.98 15.4728 15.1272 14.3383 16.0792Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.93234 13.015C10.1179 14.8489 11.5541 17.1796 10.3701 18.5906C9.20411 19.9802 5.99142 19.2188 4.07561 17.6112C2.20741 16.0436 1.35552 13.7765 2.51954 12.3893C3.68355 11.0021 6.06414 11.4474 7.93234 13.015ZM8.77963 17.3432C8.79329 17.3379 8.80524 17.3318 8.81537 17.325L8.79712 17.3544C8.78924 17.3611 8.78449 17.3586 8.77963 17.3432ZM5.36119 16.0792C6.46901 17.0087 8.37582 17.5007 8.77963 17.3432C8.77738 17.3361 8.77511 17.3262 8.7725 17.3132C8.73467 17.1241 8.61671 16.8557 8.42471 16.5442C8.02015 15.8876 7.34762 15.1352 6.64676 14.5471C5.5123 13.5951 4.30762 13.3698 4.05162 13.6749C3.79563 13.98 4.22673 15.1272 5.36119 16.0792Z" fill="currentColor"/>
</svg>
`;

const FlowerBud$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4899 13.7135C17.9689 13.1201 19 11.6725 19 10C19 8.32751 17.9689 6.87985 16.4899 6.28652C16.4966 6.19151 16.5 6.09596 16.5 6C16.5 3.79086 14.7091 2 12.5 2C11.5711 2 10.6958 2.31953 10 2.87701C9.30417 2.31953 8.42887 2 7.5 2C5.29086 2 3.5 3.79086 3.5 6C3.5 6.09596 3.5034 6.19151 3.51015 6.28652C2.03108 6.87985 1 8.32751 1 10C1 11.6725 2.03108 13.1201 3.51015 13.7135C3.5034 13.8085 3.5 13.904 3.5 14C3.5 16.2091 5.29086 18 7.5 18C8.42887 18 9.30417 17.6805 10 17.123C10.6958 17.6805 11.5711 18 12.5 18C14.7091 18 16.5 16.2091 16.5 14C16.5 13.904 16.4966 13.8085 16.4899 13.7135ZM14.3824 6.67818C14.1626 7.28797 14.5722 7.94249 15.2167 8.01152C16.2258 8.1196 17 8.97583 17 10C17 11.0242 16.2258 11.8804 15.2167 11.9885C14.5722 12.0575 14.1626 12.712 14.3824 13.3218C14.4599 13.5369 14.5 13.765 14.5 14C14.5 15.1046 13.6046 16 12.5 16C11.8214 16 11.2019 15.6605 10.8327 15.1052C10.4371 14.5101 9.56294 14.5101 9.16727 15.1052C8.79807 15.6605 8.17862 16 7.5 16C6.39543 16 5.5 15.1046 5.5 14C5.5 13.765 5.54013 13.5369 5.61762 13.3218C5.83737 12.712 5.42783 12.0575 4.78334 11.9885C3.77418 11.8804 3 11.0242 3 10C3 8.97583 3.77418 8.1196 4.78334 8.01152C5.42783 7.94249 5.83737 7.28797 5.61762 6.67818C5.54013 6.46315 5.5 6.23504 5.5 6C5.5 4.89543 6.39543 4 7.5 4C8.17862 4 8.79807 4.3395 9.16727 4.89478C9.56294 5.48988 10.4371 5.48988 10.8327 4.89478C11.2019 4.3395 11.8214 4 12.5 4C13.6046 4 14.5 4.89543 14.5 6C14.5 6.23504 14.4599 6.46315 14.3824 6.67818Z" fill="currentColor"/>
<path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
</svg>
`;

const Folder$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H10.5089L9.94408 4.01158C9.40996 3.07686 8.41593 2.5 7.33935 2.5H4.5C2.84315 2.5 1.5 3.84315 1.5 5.5V15C1.5 16.6569 2.84315 18 4.5 18H15.5C17.1569 18 18.5 16.6569 18.5 15V8C18.5 6.34315 17.1569 5 15.5 5ZM4.5 16C3.94772 16 3.5 15.5523 3.5 15V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H7.33935C7.69821 4.5 8.02956 4.69229 8.2076 5.00386L9.06033 6.49614C9.23837 6.80771 9.56971 7 9.92857 7H15.5C16.0523 7 16.5 7.44772 16.5 8V15C16.5 15.5523 16.0523 16 15.5 16H4.5Z" fill="currentColor"/>
</svg>
`;

const Gear$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5576 2.25C10.8544 2.25 11.1234 2.42509 11.2435 2.69656L11.6859 3.69656C11.9052 4.1924 11.5422 4.75 11 4.75L9 4.75C8.47694 4.75 8.11452 4.22806 8.29727 3.73796L8.67016 2.73796C8.77957 2.44455 9.05975 2.25 9.37289 2.25H10.5576Z" fill="currentColor"/>
<path d="M9.44253 17.75C9.14568 17.75 8.87676 17.5749 8.75666 17.3034L8.31424 16.3034C8.09488 15.8076 8.45793 15.25 9.00012 15.25H11.0001C11.5232 15.25 11.8856 15.7719 11.7029 16.262L11.33 17.262C11.2206 17.5554 10.9404 17.75 10.6272 17.75H9.44253Z" fill="currentColor"/>
<path d="M17.7501 10.5575C17.7501 10.8544 17.575 11.1233 17.3035 11.2434L16.3035 11.6858C15.8077 11.9052 15.2501 11.5421 15.2501 10.9999V8.99994C15.2501 8.47688 15.772 8.11445 16.2621 8.29721L17.2621 8.6701C17.5555 8.77951 17.7501 9.05969 17.7501 9.37283V10.5575Z" fill="currentColor"/>
<path d="M2.25006 9.44247C2.25006 9.14562 2.42515 8.8767 2.69662 8.7566L3.69662 8.31418C4.19246 8.09482 4.75006 8.45786 4.75006 9.00006V11.0001C4.75006 11.5231 4.22812 11.8855 3.73802 11.7028L2.73802 11.3299C2.44461 11.2205 2.25006 10.9403 2.25006 10.6272V9.44247Z" fill="currentColor"/>
<path d="M15.8744 4.91417C16.0843 5.12408 16.1506 5.43804 16.0436 5.71492L15.6493 6.73486C15.4538 7.24059 14.8028 7.37816 14.4194 6.99477L13.0052 5.58056C12.6354 5.21069 12.7482 4.58535 13.2239 4.36803L14.1947 3.92459C14.4796 3.79449 14.8152 3.85504 15.0367 4.07646L15.8744 4.91417Z" fill="currentColor"/>
<path d="M4.12575 15.0858C3.91584 14.8759 3.84949 14.562 3.95653 14.2851L4.3508 13.2651C4.5463 12.7594 5.19729 12.6218 5.58068 13.0052L6.9949 14.4194C7.36476 14.7893 7.25196 15.4146 6.77618 15.632L5.8054 16.0754C5.52057 16.2055 5.18488 16.145 4.96346 15.9235L4.12575 15.0858Z" fill="currentColor"/>
<path d="M15.086 15.8743C14.876 16.0842 14.5621 16.1505 14.2852 16.0435L13.2653 15.6492C12.7595 15.4537 12.622 14.8027 13.0054 14.4193L14.4196 13.0051C14.7894 12.6352 15.4148 12.748 15.6321 13.2238L16.0755 14.1946C16.2056 14.4794 16.1451 14.8151 15.9237 15.0365L15.086 15.8743Z" fill="currentColor"/>
<path d="M4.91417 4.12575C5.12408 3.91584 5.43804 3.84949 5.71492 3.95653L6.73486 4.3508C7.24059 4.5463 7.37816 5.19729 6.99477 5.58068L5.58056 6.9949C5.21069 7.36476 4.58535 7.25196 4.36803 6.77618L3.92459 5.8054C3.79449 5.52057 3.85504 5.18488 4.07646 4.96346L4.91417 4.12575Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.58058 14.4194C6.74366 15.5825 8.32182 16.25 10 16.25C11.6782 16.25 13.2563 15.5825 14.4194 14.4194C15.5825 13.2563 16.25 11.6782 16.25 10C16.25 8.32182 15.5825 6.74366 14.4194 5.58058C13.2563 4.4175 11.6782 3.75 10 3.75C8.32182 3.75 6.74366 4.4175 5.58058 5.58058C4.4175 6.74366 3.75 8.32182 3.75 10C3.75 11.6782 4.4175 13.2563 5.58058 14.4194ZM11.2374 11.2374C10.9099 11.565 10.4724 11.75 10 11.75C9.52756 11.75 9.09009 11.565 8.76256 11.2374C8.43503 10.9099 8.25 10.4724 8.25 10C8.25 9.52756 8.43503 9.09009 8.76256 8.76256C9.09009 8.43503 9.52756 8.25 10 8.25C10.4724 8.25 10.9099 8.43503 11.2374 8.76256C11.565 9.09009 11.75 9.52756 11.75 10C11.75 10.4724 11.565 10.9099 11.2374 11.2374Z" fill="currentColor"/>
</svg>
`;

const Gift$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="7" width="2" height="11" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3558 6.99849C11.3338 5.87341 10.5775 3.56252 9.27135 2.4271C7.99198 1.31497 6.1989 1.1107 5.22938 2.22601C4.25986 3.34132 4.71168 5.08851 5.99105 6.20065C7.4709 7.48706 9.33813 8.1692 10.3558 6.99849ZM8.8514 5.68071C8.90578 5.62028 8.96325 5.5902 8.99267 5.58096C8.96386 5.57852 8.91045 5.57208 8.8458 5.55793C8.85778 5.62324 8.85887 5.66785 8.84798 5.68427L8.8514 5.68071ZM7.30317 4.69123C7.69096 5.02833 8.19021 5.33453 8.60456 5.4859C8.69553 5.51913 8.77703 5.54289 8.8458 5.55793C8.78479 5.22531 8.44136 4.35563 7.95923 3.93652C7.41925 3.46713 6.85627 3.40299 6.7388 3.53813C6.62133 3.67326 6.76319 4.22184 7.30317 4.69123Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.88591 6.99849C8.90789 5.87341 9.66423 3.56252 10.9704 2.4271C12.2497 1.31497 14.0428 1.1107 15.0123 2.22601C15.9819 3.34132 15.53 5.08851 14.2507 6.20065C12.7708 7.48706 10.9036 8.1692 9.88591 6.99849ZM11.3903 5.68071C11.3359 5.62028 11.2785 5.5902 11.2491 5.58096C11.2779 5.57852 11.3313 5.57208 11.3959 5.55793C11.3839 5.62324 11.3829 5.66785 11.3937 5.68427L11.3903 5.68071ZM12.9386 4.69123C12.5508 5.02833 12.0515 5.33453 11.6372 5.4859C11.5462 5.51913 11.4647 5.54289 11.3959 5.55793C11.4569 5.22531 11.8004 4.35563 12.2825 3.93652C12.8225 3.46713 13.3855 3.40299 13.5029 3.53813C13.6204 3.67326 13.4785 4.22184 12.9386 4.69123Z" fill="currentColor"/>
<rect x="17" y="11" width="2" height="14" transform="rotate(90 17 11)" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6H17C17.5523 6 18 6.44772 18 7V18C18 18.5523 17.5523 19 17 19H3C2.44771 19 2 18.5523 2 18V7C2 6.44772 2.44771 6 3 6ZM16 17V8H4V17H16Z" fill="currentColor"/>
</svg>
`;

const Grab$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8C1.94772 8 1.5 7.55228 1.5 7C1.5 6.44772 1.94772 6 2.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7C18.5 7.55228 18.0523 8 17.5 8H2.5Z" fill="currentColor"/>
<path d="M2.5 11.25C1.94772 11.25 1.5 10.8023 1.5 10.25C1.5 9.69772 1.94772 9.25 2.5 9.25H17.5C18.0523 9.25 18.5 9.69772 18.5 10.25C18.5 10.8023 18.0523 11.25 17.5 11.25H2.5Z" fill="currentColor"/>
<path d="M2.5 14.5C1.94772 14.5 1.5 14.0523 1.5 13.5C1.5 12.9477 1.94772 12.5 2.5 12.5H17.5C18.0523 12.5 18.5 12.9477 18.5 13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5Z" fill="currentColor"/>
</svg>
`;

const Hamburger$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3926 13.8047C17.6807 13.977 18.496 14.6978 18.496 15.9707C18.496 17.4603 17.3825 18.2975 15.5789 18.6781C14.3977 18.9273 13.0457 18.9984 10.7025 19.0035C10.5147 19.0039 10.3642 19.004 10.0282 19.004H9.99603H9.96381C9.62786 19.004 9.47739 19.0039 9.28951 19.0035C6.94638 18.9984 5.59438 18.9273 4.4132 18.6781C2.60956 18.2975 1.49603 17.4603 1.49603 15.9707C1.49603 14.6978 2.31131 13.977 3.5994 13.8047C4.34932 13.7043 4.77922 13.7271 7.01146 13.9165C8.28024 14.0242 9.10265 14.0719 9.99603 14.0719C10.8894 14.0719 11.7118 14.0242 12.9806 13.9165C15.2128 13.7271 15.6427 13.7043 16.3926 13.8047ZM10.6982 17.0035C14.762 16.9948 16.496 16.6289 16.496 15.9707C16.496 15.92 16.4979 15.8886 16.4842 15.867C16.4585 15.8264 16.378 15.8205 16.1274 15.787C15.594 15.7157 15.1646 15.7384 13.1497 15.9094C11.829 16.0214 10.9591 16.0719 9.99603 16.0719C9.03294 16.0719 8.16309 16.0214 6.84237 15.9094C4.82745 15.7384 4.39803 15.7157 3.86462 15.787C3.61407 15.8205 3.53356 15.8264 3.50786 15.867C3.49418 15.8886 3.49603 15.92 3.49603 15.9707C3.49603 16.6289 5.23006 16.9948 9.29381 17.0035C9.47977 17.0039 9.62857 17.004 9.9638 17.004L9.99603 17.004L10.0283 17.004C10.3635 17.004 10.5123 17.0039 10.6982 17.0035Z" fill="currentColor"/>
<path d="M2.887 10.6424C2.53219 10.8562 2.07129 10.7418 1.85756 10.387C1.64382 10.0322 1.75819 9.57129 2.113 9.35756C2.78226 8.9544 3.50608 8.75 4.27059 8.75C4.79146 8.75 5.10019 8.84247 5.56693 9.0701L5.57882 9.0759C5.86725 9.21658 5.97953 9.25 6.25 9.25C6.51337 9.25 6.60676 9.22083 6.85951 9.08709L6.87097 9.08102C7.31358 8.84682 7.62078 8.75 8.14729 8.75C8.68251 8.75 8.99072 8.84947 9.43542 9.09084C9.68104 9.22415 9.7609 9.25 10 9.25C10.2388 9.25 10.3183 9.22426 10.5589 9.09345C11.0075 8.84961 11.3161 8.75 11.852 8.75C12.3817 8.75 12.6885 8.8467 13.139 9.08311L13.1443 9.08587C13.4023 9.22123 13.4939 9.25 13.75 9.25C14.0073 9.25 14.1022 9.22045 14.3653 9.08409C14.8249 8.84597 15.1316 8.75 15.6591 8.75C16.4138 8.75 17.1516 8.95039 17.8629 9.34364C18.2254 9.54405 18.3568 10.0004 18.1564 10.3629C17.9559 10.7254 17.4996 10.8568 17.1371 10.6564C16.6426 10.3829 16.1531 10.25 15.6591 10.25C15.4117 10.25 15.3206 10.2785 15.0615 10.4128L15.0554 10.4159C14.5978 10.653 14.2866 10.75 13.75 10.75C13.2122 10.75 12.9015 10.6524 12.4474 10.4141L12.4421 10.4114C12.1876 10.2778 12.0993 10.25 11.852 10.25C11.6055 10.25 11.5232 10.2766 11.2797 10.4089C10.8341 10.6512 10.5289 10.75 10 10.75C9.47095 10.75 9.16586 10.6512 8.72379 10.4113C8.47563 10.2766 8.39322 10.25 8.14729 10.25C7.90366 10.25 7.81782 10.2771 7.57252 10.4069L7.56106 10.4129C7.11071 10.6512 6.79449 10.75 6.25 10.75C5.71275 10.75 5.39638 10.6558 4.92128 10.4241L4.9094 10.4183C4.62925 10.2817 4.5235 10.25 4.27059 10.25C3.78102 10.25 3.32443 10.3789 2.887 10.6424Z" fill="currentColor"/>
<path d="M3 11.25H17C18.3333 11.25 18.3333 13.25 17 13.25H3C1.66667 13.25 1.66667 11.25 3 11.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1732 8.20945C17.6372 7.87771 18.4999 6.98233 18.4999 5.51412C18.4999 2.40364 14.7363 0.401175 9.99988 0.401175C5.26346 0.401175 1.49988 2.40364 1.49988 5.51412C1.49988 6.98233 2.3626 7.87771 3.82652 8.20945C4.75693 8.4203 5.55609 8.43314 7.98584 8.36359C8.90621 8.33724 9.41604 8.32682 9.99988 8.32682C10.5837 8.32682 11.0935 8.33724 12.0139 8.36359C14.4437 8.43314 15.2428 8.4203 16.1732 8.20945ZM9.99988 2.40118C13.7779 2.40118 16.4999 3.84946 16.4999 5.51412C16.4999 5.96226 16.3489 6.11893 15.7312 6.25891C15.0385 6.41589 14.2899 6.42792 12.0711 6.36441C11.1327 6.33755 10.6081 6.32682 9.99988 6.32682C9.39164 6.32682 8.86703 6.33755 7.92861 6.36441C5.7099 6.42792 4.96125 6.41589 4.26854 6.25891C3.65083 6.11893 3.49988 5.96226 3.49988 5.51412C3.49988 3.84946 6.22188 2.40118 9.99988 2.40118Z" fill="currentColor"/>
<path d="M6.1 5C6.1 5.33137 5.83137 5.6 5.5 5.6C5.16863 5.6 4.9 5.33137 4.9 5C4.9 4.66863 5.16863 4.4 5.5 4.4C5.83137 4.4 6.1 4.66863 6.1 5Z" fill="currentColor"/>
<path d="M8.6 4C8.6 4.33137 8.33137 4.6 8 4.6C7.66863 4.6 7.4 4.33137 7.4 4C7.4 3.66863 7.66863 3.4 8 3.4C8.33137 3.4 8.6 3.66863 8.6 4Z" fill="currentColor"/>
<path d="M10.6 5.5C10.6 5.83137 10.3314 6.1 9.99999 6.1C9.66862 6.1 9.39999 5.83137 9.39999 5.5C9.39999 5.16863 9.66862 4.9 9.99999 4.9C10.3314 4.9 10.6 5.16863 10.6 5.5Z" fill="currentColor"/>
<path d="M12.6 4C12.6 4.33137 12.3314 4.6 12 4.6C11.6686 4.6 11.4 4.33137 11.4 4C11.4 3.66863 11.6686 3.4 12 3.4C12.3314 3.4 12.6 3.66863 12.6 4Z" fill="currentColor"/>
<path d="M15.1 5C15.1 5.33137 14.8314 5.6 14.5 5.6C14.1686 5.6 13.9 5.33137 13.9 5C13.9 4.66863 14.1686 4.4 14.5 4.4C14.8314 4.4 15.1 4.66863 15.1 5Z" fill="currentColor"/>
</svg>
`;

const Headphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8801 15.0685C17.7061 15.5927 17.1402 15.8766 16.616 15.7027C16.0918 15.5287 15.8079 14.9628 15.9818 14.4386C16.3221 13.4132 16.5 12.3064 16.5 11.166C16.5 6.71008 13.7442 3.75354 10 3.75354C6.25581 3.75354 3.5 6.71008 3.5 11.166C3.5 12.3064 3.67791 13.4132 4.01817 14.4386C4.1921 14.9628 3.90817 15.5287 3.38399 15.7027C2.85981 15.8766 2.29387 15.5927 2.11994 15.0685C1.71209 13.8394 1.5 12.5199 1.5 11.166C1.5 5.63571 5.11859 1.75354 10 1.75354C14.8814 1.75354 18.5 5.63571 18.5 11.166C18.5 12.5199 18.2879 13.8394 17.8801 15.0685Z" fill="currentColor"/>
<path d="M5.97747 17.0341C4.32744 17.0028 3.01262 15.6445 3.03496 13.9943L3.03526 13.972C3.05752 12.3274 4.40876 11.0123 6.05335 11.0345C6.06146 11.0346 6.06146 11.0346 6.06958 11.0348C6.61963 11.0452 7.05795 11.498 7.0505 12.0481L6.99636 16.0478C6.98886 16.6022 6.53179 17.0446 5.97747 17.0341Z" fill="currentColor"/>
<path d="M14.0888 11.0002C15.7388 11.0315 17.0536 12.3898 17.0313 14.04L17.031 14.0623C17.0087 15.7069 15.6575 17.022 14.0129 16.9998C14.0048 16.9997 14.0048 16.9997 13.9967 16.9995C13.4466 16.9891 13.0083 16.5363 13.0158 15.9862L13.0699 11.9865C13.0774 11.4321 13.5345 10.9897 14.0888 11.0002Z" fill="currentColor"/>
</svg>
`;

const Heart$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.49228C11.4641 3.87207 16.5 4.78701 16.5 8.57245C16.5 11.1012 14.3333 13.4103 10 15.5C5.66667 13.4103 3.5 11.1012 3.5 8.57245C3.5 4.78701 8.5359 3.87207 10 6.49228Z" fill="currentColor"/>
</svg>
`;

const House$1 = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 11C1.08049 11 0.648384 9.86349 1.33564 9.25259L10.3356 1.25259C10.7145 0.915803 11.2855 0.915803 11.6644 1.25259L20.6644 9.25259C21.3516 9.86349 20.9195 11 20 11H19V18C19 18.5523 18.5523 19 18 19H4C3.44772 19 3 18.5523 3 18V11H2ZM8 17V12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12V17H17V10C17 9.62477 17.2067 9.29781 17.5124 9.12674L11 3.33795L4.48762 9.12674C4.79334 9.29781 5 9.62477 5 10V17H8ZM10 17V13H12V17H10Z" fill="currentColor"/>
</svg>
`;

const Info$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V10Z" fill="currentColor"/>
<circle cx="10" cy="7" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor"/>
</svg>
`;

const InfoFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 8.92857C9.44772 8.92857 9 9.37629 9 9.92857V13.9286C9 14.4809 9.44772 14.9286 10 14.9286C10.5523 14.9286 11 14.4809 11 13.9286V9.92857C11 9.37629 10.5523 8.92857 10 8.92857ZM10 7.5C10.5523 7.5 11 7.05228 11 6.5C11 5.94772 10.5523 5.5 10 5.5C9.44772 5.5 9 5.94772 9 6.5C9 7.05228 9.44772 7.5 10 7.5Z" fill="currentColor"/>
</svg>
`;

const Internet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 10C6.25 14.5222 7.74111 18.25 10 18.25C12.2589 18.25 13.75 14.5222 13.75 10C13.75 5.47778 12.2589 1.75 10 1.75C7.74111 1.75 6.25 5.47778 6.25 10ZM12.25 10C12.25 13.7621 11.0548 16.75 10 16.75C8.94518 16.75 7.75 13.7621 7.75 10C7.75 6.23795 8.94518 3.25 10 3.25C11.0548 3.25 12.25 6.23795 12.25 10Z" fill="currentColor"/>
<path d="M3.60174 5.46733L4.60789 4.35483C4.70859 4.4459 4.817 4.53499 4.9328 4.62175C6.2041 5.57424 8.2323 6.16108 10.4482 6.16108C12.3391 6.16108 14.1005 5.73495 15.3792 5.00363C15.687 4.82759 15.9613 4.63663 16.1979 4.43451L17.1722 5.57496C16.8622 5.83981 16.511 6.08431 16.1239 6.3057C14.6076 7.17293 12.5898 7.66108 10.4482 7.66108C7.92613 7.66108 5.58282 6.98307 4.03339 5.82219C3.88117 5.70814 3.73712 5.58977 3.60174 5.46733Z" fill="currentColor"/>
<path d="M3.60174 14.5486L4.60789 15.6611C4.70859 15.57 4.817 15.4809 4.9328 15.3941C6.2041 14.4417 8.2323 13.8548 10.4482 13.8548C12.3391 13.8548 14.1005 14.2809 15.3792 15.0123C15.687 15.1883 15.9613 15.3793 16.1979 15.5814L17.1722 14.4409C16.8622 14.1761 16.511 13.9316 16.1239 13.7102C14.6076 12.843 12.5898 12.3548 10.4482 12.3548C7.92613 12.3548 5.58282 13.0328 4.03339 14.1937C3.88117 14.3078 3.73712 14.4261 3.60174 14.5486Z" fill="currentColor"/>
<path d="M1.75 10.75V9.25H18.25V10.75H1.75Z" fill="currentColor"/>
</svg>
`;

const Key$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7184 12.3066C12.899 12.1201 13 11.8707 13 11.6111V9.00059C14.2398 8.07058 15 6.60167 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 6.60167 5.76016 8.07058 7 9.00059V17C7 18.6569 8.34315 20 10 20C11.6569 20 13 18.6569 13 17C13 16.701 12.8662 16.4178 12.6354 16.2278L12.4094 16.0419L12.4966 15.9919C12.8079 15.8138 13 15.4826 13 15.124V14.3488C13 14.0841 12.8951 13.8302 12.7082 13.6427L12.0571 12.9897L12.7184 12.3066ZM10.9686 8.7495C10.9894 8.83017 11 8.91395 11 9V11.2063L9.93681 12.3044C9.55743 12.6963 9.56201 13.3198 9.94709 13.706L10.8616 14.6233L10.1586 15.0255C9.55121 15.373 9.47947 16.221 10.0198 16.6656L10.9156 17.4027C10.7607 17.7544 10.409 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.91395 9.01064 8.83017 9.03138 8.7495C9.14475 8.30859 8.94599 7.84676 8.54786 7.62597C7.59988 7.10025 7 6.10326 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5C13 6.10326 12.4001 7.10025 11.4521 7.62597C11.054 7.84676 10.8553 8.30859 10.9686 8.7495Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10.8284 5.5 11.5 4.82843 11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4C8.5 4.82843 9.17157 5.5 10 5.5ZM10 3.5C10.2761 3.5 10.5 3.72386 10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4C9.5 3.72386 9.72386 3.5 10 3.5Z" fill="currentColor"/>
</svg>
`;

const KniveFork$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2703 5.50648C11.2703 7.44763 12.333 8.81357 14.2703 9.50037V11C14.2703 11.5523 14.718 12 15.2703 12C15.8225 12 16.2703 11.5523 16.2703 11V8.77387C16.2706 8.75962 16.2706 8.74541 16.2703 8.73125V1.5C16.2703 0.759224 15.4929 0.275595 14.8284 0.602925C12.5118 1.74402 11.2703 3.40205 11.2703 5.50648ZM13.2703 5.50648C13.2703 4.6856 13.5885 3.97142 14.2703 3.34478V7.31599C13.5752 6.90454 13.2703 6.31705 13.2703 5.50648Z" fill="currentColor"/>
<path d="M13.2703 17.5V12.5C13.2703 11.3954 14.1657 10.5 15.2703 10.5C16.3748 10.5 17.2703 11.3954 17.2703 12.5V17.5C17.2703 18.6046 16.3748 19.5 15.2703 19.5C14.1657 19.5 13.2703 18.6046 13.2703 17.5Z" fill="currentColor"/>
<path d="M3.28304 2.4501C3.3106 1.8985 3.7801 1.47369 4.33169 1.50125C4.88329 1.5288 5.30811 1.9983 5.28055 2.5499C5.20048 4.15251 5.28317 5.23192 5.48057 5.7078C5.57632 5.93862 5.73403 6.02281 6.19257 5.99644C6.74395 5.96472 7.21664 6.38598 7.24836 6.93735C7.28007 7.48873 6.85881 7.96142 6.30744 7.99313C5.04935 8.06551 4.07832 7.54714 3.6332 6.47411C3.28974 5.64613 3.18904 4.33157 3.28304 2.4501Z" fill="currentColor"/>
<path d="M10.7166 2.4501C10.6891 1.8985 10.2196 1.47369 9.66799 1.50125C9.11639 1.5288 8.69157 1.9983 8.71913 2.5499C8.7992 4.15251 8.71651 5.23192 8.51911 5.7078C8.42336 5.93862 8.26565 6.02281 7.80711 5.99644C7.25573 5.96472 6.78304 6.38598 6.75132 6.93735C6.71961 7.48873 7.14087 7.96142 7.69224 7.99313C8.95033 8.06551 9.92136 7.54714 10.3665 6.47411C10.7099 5.64613 10.8106 4.33157 10.7166 2.4501Z" fill="currentColor"/>
<path d="M6 2.5C6 1.94772 6.44772 1.5 7 1.5C7.55228 1.5 8 1.94772 8 2.5V11.4998C8 12.0521 7.55228 12.4998 7 12.4998C6.44772 12.4998 6 12.0521 6 11.4998L6 2.5Z" fill="currentColor"/>
<path d="M5 17.5V12.5C5 11.3954 5.89543 10.5 7 10.5C8.10457 10.5 9 11.3954 9 12.5V17.5C9 18.6046 8.10457 19.5 7 19.5C5.89543 19.5 5 18.6046 5 17.5Z" fill="currentColor"/>
</svg>
`;

const Letter$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.5H3C2.44772 3.5 2 3.94772 2 4.5V15.5C2 16.0523 2.44772 16.5 3 16.5H17C17.5523 16.5 18 16.0523 18 15.5V4.5C18 3.94772 17.5523 3.5 17 3.5ZM4 14.5V5.5H16V14.5H4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6484 5.26131L10.6034 11.2613C10.2279 11.5811 9.67524 11.5794 9.30177 11.2572L2.34679 5.25718C1.64501 4.65176 2.07317 3.5 3 3.5H17C17.93 3.5 18.3564 4.65833 17.6484 5.26131ZM5.69006 5.5L9.95917 9.18292L14.2835 5.5H5.69006Z" fill="currentColor"/>
</svg>
`;

const LockClosed$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13ZM10.5 13C10.5 13.2761 10.2761 13.5 10 13.5C9.72386 13.5 9.5 13.2761 9.5 13C9.5 12.7239 9.72386 12.5 10 12.5C10.2761 12.5 10.5 12.7239 10.5 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H7C4.79086 7 3 8.79086 3 11V15C3 17.2091 4.79086 19 7 19H13C15.2091 19 17 17.2091 17 15V11C17 8.79086 15.2091 7 13 7ZM5 11C5 9.89543 5.89543 9 7 9H13C14.1046 9 15 9.89543 15 11V15C15 16.1046 14.1046 17 13 17H7C5.89543 17 5 16.1046 5 15V11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14 1.79086 12.2091 0 10 0C7.79086 0 6 1.79086 6 4V9H14V4ZM12 4V7H8V4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z" fill="currentColor"/>
</svg>
`;

const LockOpen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H7C4.79086 7 3 8.79086 3 11V15C3 17.2091 4.79086 19 7 19H13C15.2091 19 17 17.2091 17 15V11C17 8.79086 15.2091 7 13 7ZM5 11C5 9.89543 5.89543 9 7 9H13C14.1046 9 15 9.89543 15 11V15C15 16.1046 14.1046 17 13 17H7C5.89543 17 5 16.1046 5 15V11Z" fill="currentColor"/>
<path d="M8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8V4C6 1.79086 7.79086 0 10 0C12.2091 0 14 1.79086 14 4V4.5C14 5.05228 13.5523 5.5 13 5.5C12.4477 5.5 12 5.05228 12 4.5V4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13ZM10.5 13C10.5 13.2761 10.2761 13.5 10 13.5C9.72386 13.5 9.5 13.2761 9.5 13C9.5 12.7239 9.72386 12.5 10 12.5C10.2761 12.5 10.5 12.7239 10.5 13Z" fill="currentColor"/>
</svg>
`;

const Loop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47493 4.4749C2.32704 6.62279 2.32704 10.1052 4.47493 12.2531C6.62281 14.401 10.1052 14.401 12.2531 12.2531C14.401 10.1052 14.401 6.62279 12.2531 4.4749C10.1052 2.32702 6.62281 2.32702 4.47493 4.4749ZM10.8389 10.8389C9.47205 12.2057 7.25598 12.2057 5.88914 10.8389C4.5223 9.47203 4.5223 7.25595 5.88914 5.88912C7.25598 4.52228 9.47205 4.52228 10.8389 5.88912C12.2057 7.25595 12.2057 9.47203 10.8389 10.8389Z" fill="currentColor"/>
<path d="M11.1924 13.3137C10.6066 12.7279 10.6066 11.7782 11.1924 11.1924C11.7782 10.6066 12.7279 10.6066 13.3137 11.1924L16.8492 14.7279C17.435 15.3137 17.435 16.2635 16.8492 16.8492C16.2635 17.435 15.3137 17.435 14.7279 16.8492L11.1924 13.3137Z" fill="currentColor"/>
</svg>
`;

const LoopMinus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.82847 4.82846C2.48532 7.1716 2.48532 10.9706 4.82847 13.3137C7.17161 15.6569 10.9706 15.6569 13.3137 13.3137C15.6569 10.9706 15.6569 7.1716 13.3137 4.82846C10.9706 2.48531 7.17161 2.48531 4.82847 4.82846ZM11.8995 11.8995C10.3374 13.4616 7.80478 13.4616 6.24268 11.8995C4.68058 10.3374 4.68058 7.80477 6.24268 6.24267C7.80478 4.68057 10.3374 4.68057 11.8995 6.24267C13.4616 7.80477 13.4616 10.3374 11.8995 11.8995Z" fill="currentColor"/>
<path d="M11.8995 14.7279C11.3138 14.1421 11.3138 13.1924 11.8995 12.6066C12.4853 12.0208 13.4351 12.0208 14.0209 12.6066L17.5564 16.1421C18.1422 16.7279 18.1422 17.6776 17.5564 18.2634C16.9706 18.8492 16.0209 18.8492 15.4351 18.2634L11.8995 14.7279Z" fill="currentColor"/>
<path d="M6.70715 9.91418C6.15487 9.91418 5.70715 9.46647 5.70715 8.91418C5.70715 8.3619 6.15487 7.91418 6.70715 7.91418H11.1924C11.7447 7.91418 12.1924 8.3619 12.1924 8.91418C12.1924 9.46647 11.7447 9.91418 11.1924 9.91418H6.70715Z" fill="currentColor"/>
</svg>
`;

const LoopPlus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.8284 4.82846C2.48526 7.1716 2.48526 10.9706 4.8284 13.3137C7.17155 15.6569 10.9705 15.6569 13.3137 13.3137C15.6568 10.9706 15.6568 7.1716 13.3137 4.82846C10.9705 2.48531 7.17155 2.48531 4.8284 4.82846ZM11.8995 11.8995C10.3374 13.4616 7.80471 13.4616 6.24262 11.8995C4.68052 10.3374 4.68052 7.80477 6.24262 6.24267C7.80472 4.68057 10.3374 4.68057 11.8995 6.24267C13.4616 7.80477 13.4616 10.3374 11.8995 11.8995Z" fill="currentColor"/>
<path d="M11.8995 14.7279C11.3138 14.1421 11.3138 13.1924 11.8995 12.6066C12.4853 12.0208 13.4351 12.0208 14.0209 12.6066L17.5564 16.1421C18.1422 16.7279 18.1422 17.6776 17.5564 18.2634C16.9706 18.8492 16.0209 18.8492 15.4351 18.2634L11.8995 14.7279Z" fill="currentColor"/>
<path d="M7.20715 10.1642C6.65487 10.1642 6.20715 9.71647 6.20715 9.16418C6.20715 8.6119 6.65487 8.16418 7.20715 8.16418H11.2072C11.7594 8.16418 12.2072 8.6119 12.2072 9.16418C12.2072 9.71647 11.7594 10.1642 11.2072 10.1642H7.20715Z" fill="currentColor"/>
<path d="M8.20715 7.16418C8.20715 6.6119 8.65487 6.16418 9.20715 6.16418C9.75944 6.16418 10.2072 6.6119 10.2072 7.16418V11.1642C10.2072 11.7165 9.75944 12.1642 9.20715 12.1642C8.65487 12.1642 8.20715 11.7165 8.20715 11.1642V7.16418Z" fill="currentColor"/>
</svg>
`;

const Magnet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29286 1.39339C7.68339 1.00286 8.31655 1.00286 8.70708 1.39339L12.2426 4.92892C12.6331 5.31944 12.6331 5.95261 12.2426 6.34313L7.29286 11.2929C6.90234 11.6834 6.90234 12.3166 7.29286 12.7071C7.68339 13.0976 8.31655 13.0976 8.70708 12.7071L13.6568 7.75735C14.0473 7.36682 14.6805 7.36682 15.071 7.75735L18.6066 11.2929C18.9971 11.6834 18.9971 12.3166 18.6066 12.7071L13.6568 17.6568C10.5326 20.781 5.46732 20.781 2.34312 17.6568C-0.781075 14.5326 -0.781077 9.46733 2.34312 6.34313L7.29286 1.39339ZM7.99997 3.51471L3.75733 7.75734C1.41419 10.1005 1.41419 13.8995 3.75734 16.2426C6.10048 18.5858 9.89947 18.5858 12.2426 16.2426L16.4853 12L14.3639 9.87867L10.1213 14.1213C8.94972 15.2929 7.05022 15.2929 5.87865 14.1213C4.70708 12.9497 4.70708 11.0502 5.87865 9.87867L10.1213 5.63603L7.99997 3.51471Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29286 8.46446L5.17154 6.34314L6.58575 4.92892L8.70707 7.05024L7.29286 8.46446Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6568 14.8284L11.5355 12.7071L12.9497 11.2929L15.071 13.4142L13.6568 14.8284Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6286 6.42847C14.1158 6.22336 13.8664 5.64139 14.0715 5.1286L15.4217 1.75314L16.98 2.27258L17.7988 0.567164C18.0379 0.06929 18.6352 -0.140537 19.1331 0.0985035C19.631 0.337543 19.8408 0.93493 19.6018 1.4328L18.02 4.72741L16.5783 4.24685L15.9285 5.87139C15.7233 6.38417 15.1414 6.63359 14.6286 6.42847Z" fill="currentColor"/>
</svg>
`;

const Map$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10ZM10 7C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8C9.72386 8 9.5 7.77614 9.5 7.5C9.5 7.22386 9.72386 7 10 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.28555C5 10.1987 7.80453 15 10 15C12.1955 15 15 10.1987 15 7.28555C15 4.38124 12.7774 2 10 2C7.22258 2 5 4.38124 5 7.28555ZM13 7.28555C13 9.2396 10.8035 13 10 13C9.19652 13 7 9.2396 7 7.28555C7 5.45617 8.35914 4 10 4C11.6409 4 13 5.45617 13 7.28555Z" fill="currentColor"/>
<path d="M13.7298 10C13.1775 10 12.7298 9.55228 12.7298 9C12.7298 8.44772 13.1775 8 13.7298 8C15.0774 8 16.2597 8.89861 16.6204 10.1971L18.0093 15.1971C18.4527 16.7935 17.5181 18.4471 15.9216 18.8906C15.6602 18.9632 15.3901 19 15.1187 19H4.88128C3.22442 19 1.88128 17.6569 1.88128 16C1.88128 15.7286 1.9181 15.4585 1.99073 15.1971L3.37961 10.1971C3.7403 8.89861 4.92254 8 6.27017 8C6.82245 8 7.27017 8.44772 7.27017 9C7.27017 9.55228 6.82245 10 6.27017 10C5.82096 10 5.42688 10.2995 5.30665 10.7324L3.91776 15.7324C3.89355 15.8195 3.88128 15.9095 3.88128 16C3.88128 16.5523 4.32899 17 4.88128 17H15.1187C15.2092 17 15.2992 16.9877 15.3864 16.9635C15.9185 16.8157 16.23 16.2645 16.0822 15.7324L14.6933 10.7324C14.5731 10.2995 14.179 10 13.7298 10Z" fill="currentColor"/>
</svg>
`;

const Microphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V8.5C12.5 9.88071 11.3807 11 10 11C8.61929 11 7.5 9.88071 7.5 8.5V4.5Z" fill="currentColor"/>
<path d="M10 18.5C7.16602 18.5 5.5 18.2917 5.5 17.5C5.5 16.7083 7.16602 16.5 10 16.5C12.834 16.5 14.5 16.7083 14.5 17.5C14.5 18.2917 12.834 18.5 10 18.5Z" fill="currentColor"/>
<path d="M9.03572 13.5H11.0357V18H9.03572V13.5Z" fill="currentColor"/>
<path d="M14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8V9.8C16 12.7142 13.2789 15 10 15C6.72114 15 4 12.7142 4 9.8V8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8V9.8C6 11.5249 7.75601 13 10 13C12.244 13 14 11.5249 14 9.8V8Z" fill="currentColor"/>
</svg>
`;

const Minus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
</svg>
`;

const Monitor$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1H2.5C1.11929 1 0 2.11929 0 3.5V13.5C0 14.8807 1.11929 16 2.5 16H17.5C18.8807 16 20 14.8807 20 13.5V3.5C20 2.11929 18.8807 1 17.5 1ZM2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V13.5C18 13.7761 17.7761 14 17.5 14H2.5C2.22386 14 2 13.7761 2 13.5V3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM9 17.5V16H11V17.5H9Z" fill="currentColor"/>
<path d="M5.5 19.5C4.94772 19.5 4.5 19.0523 4.5 18.5C4.5 17.9477 4.94772 17.5 5.5 17.5H14.5C15.0523 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H5.5Z" fill="currentColor"/>
<path d="M3.5 4H16.5C16.7761 4 17 4.22386 17 4.5V12.5C17 12.7761 16.7761 13 16.5 13H3.5C3.22386 13 3 12.7761 3 12.5V4.5C3 4.22386 3.22386 4 3.5 4Z" fill="currentColor"/>
</svg>
`;

const Monitor2$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1H2.5C1.11929 1 0 2.11929 0 3.5V13.5C0 14.8807 1.11929 16 2.5 16H17.5C18.8807 16 20 14.8807 20 13.5V3.5C20 2.11929 18.8807 1 17.5 1ZM2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V13.5C18 13.7761 17.7761 14 17.5 14H2.5C2.22386 14 2 13.7761 2 13.5V3.5Z" fill="currentColor"/>
<path d="M10 13.75C9.58579 13.75 9.25 13.4142 9.25 13C9.25 12.5858 9.58579 12.25 10 12.25C10.4142 12.25 10.75 12.5858 10.75 13C10.75 13.4142 10.4142 13.75 10 13.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM9 17.5V16H11V17.5H9Z" fill="currentColor"/>
<path d="M5.5 19.5C4.94772 19.5 4.5 19.0523 4.5 18.5C4.5 17.9477 4.94772 17.5 5.5 17.5H14.5C15.0523 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 12H1V11H19V12Z" fill="currentColor"/>
</svg>
`;

const Moon$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76447 6.1275C9.07052 4.68767 10.0433 3.51293 11.3637 2.93174C12.2938 2.52236 12.0913 1.14759 11.0826 1.02391C6.47122 0.458427 2.16189 3.52205 1.18835 8.10223C0.15323 12.9721 3.2549 17.7583 8.11727 18.7918C12.9796 19.8254 17.7599 16.7145 18.795 11.8446C18.9477 11.1264 19.0122 10.4004 18.9896 9.67855C18.9577 8.66019 17.6015 8.33612 17.1127 9.23007C16.1656 10.9622 14.1849 11.891 12.2283 11.4751C9.79778 10.9585 8.24645 8.56461 8.76447 6.1275ZM8.53309 16.8355C4.752 16.0318 2.339 12.3083 3.14464 8.51805C3.68521 5.97489 5.54698 4.0327 7.871 3.28807C7.36391 4.00107 6.99737 4.82159 6.80818 5.71168C6.06068 9.22838 8.30068 12.685 11.8125 13.4314C13.445 13.7784 15.0883 13.478 16.449 12.6805C15.176 15.7335 11.8789 17.5467 8.53309 16.8355Z" fill="currentColor"/>
</svg>
`;

const MoonFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3637 2.93174C10.0433 3.51293 9.07052 4.68767 8.76447 6.1275C8.24645 8.56461 9.79778 10.9585 12.2283 11.4751C14.1849 11.891 16.1656 10.9622 17.1127 9.23007C17.6015 8.33612 18.9577 8.66019 18.9896 9.67855C19.0122 10.4004 18.9477 11.1264 18.795 11.8446C17.7599 16.7145 12.9796 19.8254 8.11727 18.7918C3.2549 17.7583 0.15323 12.9721 1.18835 8.10223C2.16189 3.52205 6.47122 0.458427 11.0826 1.02391C12.0913 1.14759 12.2938 2.52236 11.3637 2.93174Z" fill="currentColor"/>
</svg>
`;

const Motorcycle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 12.5C12.75 13.0523 12.3023 13.5 11.75 13.5C11.1977 13.5 10.75 13.0523 10.75 12.5C10.75 11.9477 11.1977 11.5 11.75 11.5C12.3023 11.5 12.75 11.9477 12.75 12.5Z" fill="currentColor"/>
<path d="M9.25 12.5C9.25 13.0523 8.80228 13.5 8.25 13.5C7.69772 13.5 7.25 13.0523 7.25 12.5C7.25 11.9477 7.69772 11.5 8.25 11.5C8.80228 11.5 9.25 11.9477 9.25 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.933 8 13.5 6.433 13.5 4.5C13.5 2.567 11.933 1 10 1C8.067 1 6.5 2.567 6.5 4.5C6.5 6.433 8.067 8 10 8ZM10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3Z" fill="currentColor"/>
<path d="M10 14C11.1046 14 12 14.8954 12 16V17.5C12 18.6046 11.1046 19.5 10 19.5C8.89543 19.5 8 18.6046 8 17.5V16C8 14.8954 8.89543 14 10 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 11C15 8.23858 12.7614 6 10 6C7.23858 6 5 8.23858 5 11V13.5C5 14.8807 6.11929 16 7.5 16H12.5C13.8807 16 15 14.8807 15 13.5V11ZM7 11C7 9.34315 8.34315 8 10 8C11.6569 8 13 9.34315 13 11V13.5C13 13.7761 12.7761 14 12.5 14H7.5C7.22386 14 7 13.7761 7 13.5V11Z" fill="currentColor"/>
<path d="M15.5 4.5C14.9477 4.5 14.5 4.05228 14.5 3.5C14.5 2.94772 14.9477 2.5 15.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5C18.5 4.05228 18.0523 4.5 17.5 4.5H15.5Z" fill="currentColor"/>
<path d="M2.5 4.5C1.94772 4.5 1.5 4.05228 1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H4.5C5.05228 2.5 5.5 2.94772 5.5 3.5C5.5 4.05228 5.05228 4.5 4.5 4.5H2.5Z" fill="currentColor"/>
<path d="M3.40952 4.04579L3.88582 2.59058L8.40952 3.45438L7.93321 4.90959L3.40952 4.04579Z" fill="currentColor"/>
<path d="M11.5905 3.45433L12.0668 4.90955L16.5905 4.04574L16.1142 2.59053L11.5905 3.45433Z" fill="currentColor"/>
</svg>
`;

const MusicNoteDouble$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3.80989C6.75 3.29386 7.14265 2.86257 7.65642 2.81428L16.6564 1.96832C17.2431 1.91318 17.75 2.37468 17.75 2.96393V5.14519C17.75 5.65923 17.3603 6.08955 16.8487 6.1403L7.84873 7.03323C7.26031 7.09161 6.75 6.62943 6.75 6.03812V3.80989Z" fill="currentColor"/>
<ellipse cx="14.75" cy="15" rx="3" ry="2.5" fill="currentColor"/>
<ellipse cx="5.75" cy="16" rx="3" ry="2.5" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 5H17.75V15H15.75V5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6H8.75V16H6.75V6Z" fill="currentColor"/>
</svg>
`;

const MusicNoteSingle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.78103 1.69759C14.1038 4.63512 16.25 6.76176 16.25 8.30413C16.25 9.79646 15.4291 11.0034 13.8541 11.8872C13.418 12.132 12.9324 11.6555 13.1688 11.2148C13.5756 10.4565 13.4416 9.60793 12.7079 8.59803C11.934 7.53285 10.8174 6.75731 9.34301 6.26969C9.13826 6.20198 9 6.01063 9 5.79498V2.11114C9 1.70978 9.44906 1.47201 9.78103 1.69759Z" fill="currentColor"/>
<path d="M7.75 17.75C5.97914 17.75 4.5 16.607 4.5 15.125C4.5 13.643 5.97914 12.5 7.75 12.5C9.52086 12.5 11 13.643 11 15.125C11 16.607 9.52086 17.75 7.75 17.75Z" fill="currentColor"/>
<path d="M10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5C9 4.44772 9.44772 4 10 4Z" fill="currentColor"/>
</svg>
`;

const Open$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L10.7071 10.7071Z" fill="currentColor"/>
<path d="M15 15V11.5C15 10.9477 15.4477 10.5 16 10.5C16.5523 10.5 17 10.9477 17 11.5V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3H8.5C9.05228 3 9.5 3.44772 9.5 4C9.5 4.55228 9.05228 5 8.5 5H5V15H15Z" fill="currentColor"/>
<path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V8Z" fill="currentColor"/>
<path d="M12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H12Z" fill="currentColor"/>
</svg>
`;

const PaintPallet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2196 13.9555C17.2636 10.0595 14.7915 6.03562 10.731 4.94761C6.14492 3.71877 -0.364424 6.91181 1.08416 11.0092C1.56325 12.3643 2.48817 12.6814 4.23088 12.7061L4.33978 12.7075C5.26123 12.7191 5.52041 12.7792 5.59794 12.9054C5.72536 13.1128 5.72679 13.4439 5.58387 14.3543C5.51634 14.7845 5.49418 14.9355 5.46808 15.1703C5.30897 16.6011 5.55075 17.7169 6.48838 18.7268C9.41611 21.8802 15.0412 18.3535 16.2196 13.9555ZM2.96979 10.3425C2.24104 8.28126 6.9056 5.99314 10.2134 6.87946C13.2298 7.68772 15.0393 10.6331 14.2878 13.4379C13.4497 16.5656 9.50636 19.0379 7.95406 17.366C7.47464 16.8496 7.35504 16.2977 7.45583 15.3913C7.47737 15.1975 7.49709 15.0631 7.55967 14.6645C7.77887 13.2683 7.77611 12.6302 7.30206 11.8585C6.70834 10.8921 6.00236 10.7282 4.36491 10.7076L4.25922 10.7063C3.29465 10.6926 3.06582 10.6141 2.96979 10.3425Z" fill="currentColor"/>
<path d="M6 10C5.30964 10 4.75 9.44036 4.75 8.75C4.75 8.05964 5.30964 7.5 6 7.5C6.69036 7.5 7.25 8.05964 7.25 8.75C7.25 9.44036 6.69036 10 6 10Z" fill="currentColor"/>
<path d="M9.75 10C9.05964 10 8.5 9.44036 8.5 8.75C8.5 8.05964 9.05964 7.5 9.75 7.5C10.4404 7.5 11 8.05964 11 8.75C11 9.44036 10.4404 10 9.75 10Z" fill="currentColor"/>
<path d="M12.25 13C11.5596 13 11 12.4404 11 11.75C11 11.0596 11.5596 10.5 12.25 10.5C12.9404 10.5 13.5 11.0596 13.5 11.75C13.5 12.4404 12.9404 13 12.25 13Z" fill="currentColor"/>
<path d="M10.75 16.5C10.0596 16.5 9.5 15.9404 9.5 15.25C9.5 14.5596 10.0596 14 10.75 14C11.4404 14 12 14.5596 12 15.25C12 15.9404 11.4404 16.5 10.75 16.5Z" fill="currentColor"/>
<path d="M14.3707 3.60451C14.8605 3.34411 15.466 3.52923 15.7253 4.01686C15.7308 4.02727 15.7362 4.03777 15.7413 4.04836L19.8336 12.4482C19.9869 12.7628 19.8635 13.1422 19.5545 13.3065C19.2452 13.471 18.8612 13.3618 18.6847 13.0592L13.9771 4.98893C13.6993 4.5127 13.8602 3.90144 14.3364 3.62364C14.3477 3.61704 14.3592 3.61066 14.3707 3.60451Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5375 3.48434C13.0238 4.39897 13.8434 4.65522 14.6347 4.23444C15.4262 3.81362 15.6726 2.99053 15.1863 2.07592C14.6289 1.0276 13.438 0.0775719 12.6482 0.497483C11.8585 0.917395 11.9801 2.43602 12.5375 3.48434ZM13.4204 3.01486C13.2581 2.70947 13.1315 2.26269 13.1007 1.8773C13.0806 1.62643 13.1063 1.45889 13.1151 1.40204C13.1171 1.38903 13.1182 1.38181 13.1176 1.38073C13.1183 1.38172 13.1245 1.38462 13.1356 1.38985C13.1866 1.41372 13.3408 1.48594 13.5391 1.64416C13.8414 1.88525 14.141 2.24 14.3034 2.54539C14.5316 2.97464 14.4668 3.19118 14.1653 3.3515C13.8641 3.51165 13.6488 3.44435 13.4204 3.01486Z" fill="currentColor"/>
</svg>
`;

const Pen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1976 1.21963L3.11967 11.2976C2.9692 11.448 2.87065 11.6426 2.83836 11.8529L2.13291 16.4474C2.03041 17.115 2.60551 17.6901 3.27309 17.5876L7.86762 16.8822C8.07795 16.8499 8.2725 16.7513 8.42297 16.6009L18.5009 6.52294C18.8914 6.13241 18.8914 5.49925 18.5009 5.10872L14.6118 1.21963C14.2213 0.82911 13.5881 0.829111 13.1976 1.21963ZM4.31657 15.404L4.76548 12.4802L13.9047 3.34095L16.3796 5.81583L7.24036 14.9551L4.31657 15.404Z" fill="currentColor"/>
<path d="M11.442 5.24658L12.5027 4.18592L15.7436 7.42683L14.6829 8.48749L11.442 5.24658Z" fill="currentColor"/>
</svg>
`;

const Person$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6ZM12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6Z" fill="currentColor"/>
<path d="M17 18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V15.5C15 13.0059 12.7945 11 10.0162 11C7.23004 11 5 13.0132 5 15.4992L5.00204 17.9992C5.0025 18.5515 4.55515 18.9995 4.00286 19C3.45058 19.0005 3.0025 18.5531 3.00205 18.0008L3 15.5C3 11.8604 6.16851 9 10.0162 9C13.859 9 17 11.8567 17 15.5V18Z" fill="currentColor"/>
</svg>
`;

const PersonFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 15.5C16 12.309 13.314 10 10 10C6.686 10 4 12.309 4 15.5L4.002 17C4.002 17.2652 4.10736 17.5196 4.29489 17.7071C4.48243 17.8946 4.73678 18 5.002 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V15.5Z" fill="currentColor"/>
</svg>
`;

const Phone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5208 10.1924L11.9389 10.7743C10.9366 9.8925 9.99424 8.94935 9.11167 7.94467L9.69238 7.36396C10.864 6.19239 10.864 4.2929 9.69238 3.12132L8.27817 1.70711C7.1066 0.535537 5.2071 0.535537 4.03553 1.70711L1.22986 4.51278C0.952956 4.78968 0.86316 5.20273 1.00011 5.5696C3.37437 11.9301 7.81797 16.4042 14.3082 18.882C14.6766 19.0227 15.0932 18.9337 15.372 18.6549L18.1777 15.8492C19.3492 14.6777 19.3492 12.7782 18.1777 11.6066L16.7635 10.1924C15.5919 9.02082 13.6924 9.02082 12.5208 10.1924ZM16.7635 13.0208C17.154 13.4113 17.154 14.0445 16.7635 14.435L14.4223 16.7761C8.99791 14.5464 5.24853 10.7759 3.10515 5.46592L5.44974 3.12132C5.84027 2.7308 6.47343 2.7308 6.86396 3.12132L8.27817 4.53554C8.66869 4.92606 8.66869 5.55923 8.27817 5.94975L7.04424 7.18368C6.67929 7.54863 6.65203 8.13136 6.98131 8.52879C8.30405 10.1253 9.76178 11.5841 11.3538 12.9048C11.7513 13.2344 12.3343 13.2073 12.6994 12.8422L13.935 11.6066C14.3255 11.2161 14.9587 11.2161 15.3492 11.6066L16.7635 13.0208Z" fill="currentColor"/>
</svg>
`;

const PhotoCamera$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.69572 5.07845L5.39825 6H4.5C2.84315 6 1.5 7.34315 1.5 9V15C1.5 16.6569 2.84315 18 4.5 18H15.5C17.1569 18 18.5 16.6569 18.5 15V9C18.5 7.34315 17.1569 6 15.5 6H14.6013L14.3038 5.07845C13.9039 3.83958 12.7507 3 11.4489 3H8.55067C7.24886 3 6.09561 3.83958 5.69572 5.07845ZM4.5 8H6.85428L7.59902 5.69282C7.73232 5.27986 8.11673 5 8.55067 5H11.4489C11.8828 5 12.2672 5.27986 12.4005 5.69282L13.1453 8H15.5C16.0523 8 16.5 8.44772 16.5 9V15C16.5 15.5523 16.0523 16 15.5 16H4.5C3.94772 16 3.5 15.5523 3.5 15V9C3.5 8.44772 3.94772 8 4.5 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8C8.067 8 6.5 9.567 6.5 11.5ZM11.5 11.5C11.5 12.3284 10.8284 13 10 13C9.17157 13 8.5 12.3284 8.5 11.5C8.5 10.6716 9.17157 10 10 10C10.8284 10 11.5 10.6716 11.5 11.5Z" fill="currentColor"/>
</svg>
`;

const Pill$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5459 4.18199L16.9099 10.5459C18.6673 12.3033 18.6673 15.1525 16.9099 16.9099C15.1525 18.6673 12.3033 18.6673 10.5459 16.9099L4.18199 10.5459C2.42463 8.78859 2.42463 5.93935 4.18199 4.18199C5.93935 2.42463 8.78859 2.42463 10.5459 4.18199ZM13 9.50001C12.3333 8.83334 11.5 8.66667 10.5 9.00001C9.50001 9.33334 8.83334 10.3333 8.50001 12L11.9203 15.4437C11.9223 15.4457 11.9243 15.4477 11.9263 15.4498C12.8993 16.4227 14.4768 16.4227 15.4498 15.4498C15.4522 15.4473 15.4547 15.4448 15.4572 15.4423C16.4253 14.466 16.4186 12.8898 15.4423 11.9217L13 9.50001Z" fill="currentColor"/>
</svg>
`;

const Pinpoint$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="currentColor"/>
</svg>
`;

const PinpointFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5Z" fill="currentColor"/>
</svg>
`;

const PinpointOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L1.29289 2.70711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="currentColor"/>
</svg>
`;

const PinpointOffFilled = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5Z" fill="currentColor"/>
<path d="M1.53272 2.44678C1.1479 2.05064 1.15707 1.41755 1.55321 1.03272C1.94936 0.647896 2.58246 0.65707 2.96728 1.05321L19.9673 18.5532C20.3521 18.9494 20.3429 19.5825 19.9468 19.9673C19.5506 20.3521 18.9175 20.3429 18.5327 19.9468L1.53272 2.44678Z" fill="currentColor"/>
</svg>
`;

const Plus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
<path d="M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" fill="currentColor"/>
</svg>
`;

const Power$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33819 5.17875C4.72595 4.78548 5.3591 4.78103 5.75236 5.16879C6.14563 5.55656 6.15008 6.18971 5.76232 6.58297C4.64106 7.72013 4 9.25726 4 10.9008C4 14.2724 6.68947 17 10 17C13.3105 17 16 14.2724 16 10.9008C16 9.25726 15.3589 7.72013 14.2377 6.58297C13.8499 6.18971 13.8544 5.55656 14.2476 5.16879C14.6409 4.78103 15.274 4.78548 15.6618 5.17875C17.1491 6.68714 18 8.72737 18 10.9008C18 15.3708 14.4215 19 10 19C5.57855 19 2 15.3708 2 10.9008C2 8.72737 2.85088 6.68714 4.33819 5.17875Z" fill="currentColor"/>
<rect x="9" y="1" width="2" height="10.5" rx="1" fill="currentColor"/>
</svg>
`;

const Printer$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7V3C5 2.44772 5.3731 2 5.83333 2H14.1667C14.6269 2 15 2.44772 15 3V7" fill="white"/>
<path d="M6 3V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V3C4 1.93165 4.77637 1 5.83333 1H14.1667C15.2236 1 16 1.93165 16 3V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V3H6Z" fill="currentColor"/>
<path d="M4 6H16C17.6569 6 19 7.34315 19 9V14C19 15.6569 17.6569 17 16 17H4C2.34315 17 1 15.6569 1 14L1 9C1 7.34315 2.34315 6 4 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12V16.8C5 17.4627 5.3731 18 5.83333 18H14.1667C14.6269 18 15 17.4627 15 16.8V12" fill="white"/>
<path d="M6 16.8V12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12V16.8C4 17.9536 4.72664 19 5.83333 19H14.1667C15.2734 19 16 17.9536 16 16.8V12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V16.8C14 16.8775 13.9883 16.9466 13.971 17H6.02904C6.0117 16.9466 6 16.8775 6 16.8Z" fill="currentColor"/>
<path d="M7 16C6.72386 16 6.5 15.7761 6.5 15.5C6.5 15.2239 6.72386 15 7 15H13C13.2761 15 13.5 15.2239 13.5 15.5C13.5 15.7761 13.2761 16 13 16H7Z" fill="currentColor"/>
<path d="M7 14C6.72386 14 6.5 13.7761 6.5 13.5C6.5 13.2239 6.72386 13 7 13H13C13.2761 13 13.5 13.2239 13.5 13.5C13.5 13.7761 13.2761 14 13 14H7Z" fill="currentColor"/>
</svg>
`;

const Refresh$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05022 14.9497C4.65969 14.5592 4.65969 13.9261 5.05022 13.5355C5.44074 13.145 6.07391 13.145 6.46443 13.5355C7.39671 14.4678 8.65494 15 9.99996 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5522 9 17 9.44772 17 10C17 13.866 13.866 17 9.99996 17C8.11906 17 6.35385 16.2534 5.05022 14.9497Z" fill="currentColor"/>
<path d="M13.5585 12.832C13.0989 13.1384 12.478 13.0141 12.1717 12.5546C11.8654 12.0951 11.9896 11.4742 12.4491 11.1679L15.4495 9.16787C15.9091 8.86154 16.5299 8.98575 16.8363 9.4453C17.1426 9.90484 17.0184 10.5257 16.5588 10.832L13.5585 12.832Z" fill="currentColor"/>
<path d="M18.832 12.4452C19.1383 12.9048 19.0141 13.5256 18.5546 13.832C18.0951 14.1383 17.4742 14.0142 17.1679 13.5546L15.1679 10.5546C14.8615 10.0951 14.9857 9.47424 15.4452 9.16789C15.9047 8.86153 16.5256 8.98571 16.832 9.44524L18.832 12.4452Z" fill="currentColor"/>
<path d="M14.8571 4.85116C15.2477 5.24168 15.2477 5.87485 14.8571 6.26537C14.4666 6.65589 13.8334 6.65589 13.4429 6.26537C12.5106 5.33309 11.2524 4.8009 9.90738 4.8009C7.14596 4.8009 4.90738 7.03948 4.90738 9.8009C4.90738 10.3532 4.45967 10.8009 3.90738 10.8009C3.3551 10.8009 2.90738 10.3532 2.90738 9.8009C2.90738 5.93491 6.04139 2.8009 9.90738 2.8009C11.7883 2.8009 13.5535 3.54752 14.8571 4.85116Z" fill="currentColor"/>
<path d="M6.34889 6.96887C6.80844 6.66255 7.4293 6.78676 7.73563 7.2463C8.04195 7.70585 7.91775 8.32671 7.4582 8.63304L4.45782 10.633C3.99828 10.9394 3.37741 10.8152 3.07109 10.3556C2.76476 9.89606 2.88897 9.2752 3.34852 8.96887L6.34889 6.96887Z" fill="currentColor"/>
<path d="M1.07539 7.35567C0.769038 6.89614 0.893212 6.27527 1.35274 5.96892C1.81227 5.66256 2.43314 5.78674 2.73949 6.24627L4.73949 9.24627C5.04584 9.7058 4.92167 10.3267 4.46214 10.633C4.00261 10.9394 3.38174 10.8152 3.07539 10.3557L1.07539 7.35567Z" fill="currentColor"/>
</svg>
`;

const Reload$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9372 4.21148C14.3936 4.52244 14.5115 5.14453 14.2005 5.60095C13.8896 6.05738 13.2675 6.1753 12.8111 5.86434C11.9885 5.30394 11.0183 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C11.4232 3 12.7852 3.42666 13.9372 4.21148Z" fill="currentColor"/>
<path d="M13.5385 12.5062C13.0733 12.8038 12.4549 12.6679 12.1573 12.2026C11.8597 11.7373 11.9956 11.1189 12.4608 10.8214L15.9427 8.59426C16.4079 8.29667 17.0263 8.43258 17.3239 8.89784C17.6215 9.36309 17.4856 9.98149 17.0204 10.2791L13.5385 12.5062Z" fill="currentColor"/>
<path d="M18.9034 12.4104C19.1284 12.9147 18.9019 13.506 18.3975 13.731C17.8931 13.956 17.3019 13.7295 17.0769 13.2252L15.5687 9.84436C15.3437 9.33999 15.5702 8.74871 16.0745 8.52371C16.5789 8.29871 17.1702 8.52519 17.3952 9.02957L18.9034 12.4104Z" fill="currentColor"/>
</svg>
`;

const Scissors$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.5C2 7.433 3.567 9 5.5 9C7.433 9 9 7.433 9 5.5C9 3.567 7.433 2 5.5 2C3.567 2 2 3.567 2 5.5ZM7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 15.933 3.567 17.5 5.5 17.5C7.433 17.5 9 15.933 9 14C9 12.067 7.433 10.5 5.5 10.5C3.567 10.5 2 12.067 2 14ZM7 14C7 14.8284 6.32843 15.5 5.5 15.5C4.67157 15.5 4 14.8284 4 14C4 13.1716 4.67157 12.5 5.5 12.5C6.32843 12.5 7 13.1716 7 14Z" fill="currentColor"/>
<path d="M16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L6.79289 8.20711C6.40237 7.81658 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81658 6.40237 8.20711 6.79289L16.7071 15.2929Z" fill="currentColor"/>
<path d="M6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071C7.18342 13.0976 7.81658 13.0976 8.20711 12.7071L16.7071 4.20711C17.0976 3.81658 17.0976 3.18342 16.7071 2.79289C16.3166 2.40237 15.6834 2.40237 15.2929 2.79289L6.79289 11.2929Z" fill="currentColor"/>
</svg>
`;

const Send$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.68542 6.65868C0.758716 6.96758 0.779177 8.28543 1.71502 8.56541L9.20844 10.8072L11.6551 18.5165C11.948 19.4394 13.2507 19.4488 13.5569 18.5302L18.8602 2.62029C19.1208 1.83853 18.3771 1.09479 17.5953 1.35538L1.68542 6.65868ZM5.31842 7.55586L16.3304 3.8852L12.6316 14.9817L10.9548 9.69826C10.8547 9.38295 10.6052 9.13754 10.2883 9.04272L5.31842 7.55586Z" fill="currentColor"/>
<path d="M17.7674 1.43951L18.8105 2.51742L9.98262 11.0605L8.93948 9.98265L17.7674 1.43951Z" fill="currentColor"/>
</svg>
`;

const ShareAndroid$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C6.65685 13 8 11.6569 8 10C8 8.34315 6.65685 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 13 5 13ZM5 9C5.55228 9 6 9.44772 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8ZM14 4C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5C13 4.44772 13.4477 4 14 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 18C15.6569 18 17 16.6569 17 15C17 13.3431 15.6569 12 14 12C12.3431 12 11 13.3431 11 15C11 16.6569 12.3431 18 14 18ZM14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14Z" fill="currentColor"/>
<path d="M6.23584 9.77722L5.47275 8.48583L12.2641 4.47274L13.0272 5.76413L6.23584 9.77722Z" fill="currentColor"/>
<path d="M12.2572 15.529L13.029 14.2428L6.74275 10.471L5.97101 11.7572L12.2572 15.529Z" fill="currentColor"/>
</svg>
`;

const ShareIos$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 13.5C11 14.0523 10.5523 14.5 10 14.5C9.44772 14.5 9 14.0523 9 13.5L9 3Z" fill="currentColor"/>
<path d="M10.6402 2.76826C11.0645 2.41469 11.1218 1.78413 10.7682 1.35985C10.4147 0.935575 9.7841 0.878251 9.35982 1.23181L6.35982 3.73181C5.93554 4.08538 5.87822 4.71594 6.23178 5.14022C6.58535 5.5645 7.21591 5.62182 7.64019 5.26826L10.6402 2.76826Z" fill="currentColor"/>
<path d="M9.35981 2.76826C8.93553 2.41469 8.87821 1.78413 9.23177 1.35985C9.58534 0.935575 10.2159 0.878251 10.6402 1.23181L13.6402 3.73181C14.0645 4.08538 14.1218 4.71594 13.7682 5.14022C13.4147 5.5645 12.7841 5.62182 12.3598 5.26826L9.35981 2.76826Z" fill="currentColor"/>
<path d="M13 9C12.4477 9 12 8.55228 12 8C12 7.44772 12.4477 7 13 7H14C15.6233 7 17 8.16491 17 9.69231V17.3077C17 18.8351 15.6233 20 14 20L6 20C4.37672 20 3 18.8351 3 17.3077L3 9.69231C3 8.16491 4.37672 7 6 7H7C7.55228 7 8 7.44772 8 8C8 8.55228 7.55228 9 7 9H6C5.41414 9 5 9.35043 5 9.69231L5 17.3077C5 17.6496 5.41414 18 6 18L14 18C14.5859 18 15 17.6496 15 17.3077L15 9.69231C15 9.35043 14.5859 9 14 9L13 9Z" fill="currentColor"/>
</svg>
`;

const Smartphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 3C6.25 2.86193 6.36193 2.75 6.5 2.75H13.5C13.6381 2.75 13.75 2.86193 13.75 3V15C13.75 15.1381 13.6381 15.25 13.5 15.25H6.5C6.36193 15.25 6.25 15.1381 6.25 15V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H5.5C4.39543 0 3.5 0.942558 3.5 2.10526V17.8947C3.5 19.0574 4.39543 20 5.5 20H14.5C15.6046 20 16.5 19.0574 16.5 17.8947V2.10526C16.5 0.942558 15.6046 0 14.5 0ZM5.5 18V2H14.5V18H5.5Z" fill="currentColor"/>
<path d="M10.5 16.5C10.5 16.7761 10.2761 17 10 17C9.72386 17 9.5 16.7761 9.5 16.5C9.5 16.2239 9.72386 16 10 16C10.2761 16 10.5 16.2239 10.5 16.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C9 15.9477 9.44772 15.5 10 15.5C10.5523 15.5 11 15.9477 11 16.5C11 17.0523 10.5523 17.5 10 17.5C9.44772 17.5 9 17.0523 9 16.5Z" fill="currentColor"/>
</svg>
`;

const SmartphoneNotch$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0H15C16.1046 0 17 0.942558 17 2.10526V17.8947C17 19.0574 16.1046 20 15 20H6C4.89543 20 4 19.0574 4 17.8947V2.10526C4 0.942558 4.89543 0 6 0ZM7 2C6.44772 2 6 2.44772 6 3V17C6 17.5523 6.44772 18 7 18H14C14.5523 18 15 17.5523 15 17V3C15 2.44772 14.5523 2 14 2H13V3.5C13 3.77614 12.7761 4 12.5 4H8.5C8.22386 4 8 3.77614 8 3.5V2H7Z" fill="currentColor"/>
</svg>
`;

const Smartphone2$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H5.5C4.39543 0 3.5 0.89543 3.5 2V18C3.5 19.1046 4.39543 20 5.5 20H14.5C15.6046 20 16.5 19.1046 16.5 18V2C16.5 0.89543 15.6046 0 14.5 0ZM5.5 18V2H14.5V18H5.5Z" fill="currentColor"/>
<path d="M10 17.25C9.30964 17.25 8.75 16.6904 8.75 16C8.75 15.3096 9.30964 14.75 10 14.75C10.6904 14.75 11.25 15.3096 11.25 16C11.25 16.6904 10.6904 17.25 10 17.25Z" fill="currentColor"/>
</svg>
`;

const SoftDrink$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.411 4H6.58933C6.48813 4 6.38701 4.00615 6.28655 4.0184C4.916 4.18563 3.94052 5.43224 4.10774 6.80278L5.32785 16.8028C5.48089 18.0571 6.54584 19 7.80945 19H12.1937C13.4576 19 14.5227 18.0567 14.6754 16.8021L15.8927 6.80209C15.9049 6.70186 15.911 6.60097 15.911 6.5C15.911 5.11929 14.7917 4 13.411 4ZM6.52878 6.00368C6.54887 6.00123 6.56909 6 6.58933 6H13.411C13.6871 6 13.911 6.22386 13.911 6.5C13.911 6.52019 13.9097 6.54037 13.9073 6.56042L12.69 16.5604C12.6595 16.8113 12.4465 17 12.1937 17H7.80945C7.55673 17 7.34374 16.8114 7.31313 16.5606L6.09302 6.56056C6.05957 6.28645 6.25467 6.03713 6.52878 6.00368Z" fill="currentColor"/>
<path d="M9.21684 14.7206C9.09502 15.1165 8.67533 15.3386 8.27944 15.2168C7.88354 15.095 7.66135 14.6753 7.78317 14.2794L11.7832 1.27944C11.905 0.88354 12.3247 0.661352 12.7206 0.783167C13.1165 0.904981 13.3386 1.32467 13.2168 1.72057L9.21684 14.7206Z" fill="currentColor"/>
<path d="M5.5 10.25C5.08579 10.25 4.75 9.91421 4.75 9.5C4.75 9.08579 5.08579 8.75 5.5 8.75H14.5C14.9142 8.75 15.25 9.08579 15.25 9.5C15.25 9.91421 14.9142 10.25 14.5 10.25H5.5Z" fill="currentColor"/>
<path d="M12.3181 2.22761C11.9163 2.12715 11.6719 1.71995 11.7724 1.3181C11.8729 0.916254 12.2801 0.671934 12.6819 0.772395L16.6819 1.7724C17.0838 1.87286 17.3281 2.28006 17.2276 2.6819C17.1272 3.08375 16.72 3.32807 16.3181 3.22761L12.3181 2.22761Z" fill="currentColor"/>
</svg>
`;

const SpeakerHigh$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4888 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.545 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.545 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4888 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9438 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4888 13.0688Z" fill="currentColor"/>
<path d="M16.4113 16.1272C16.065 16.3543 15.6 16.2577 15.3729 15.9114C15.1457 15.565 15.2423 15.1001 15.5887 14.8729C15.7519 14.7658 15.9098 14.6509 16.0616 14.5287C16.2134 14.4065 16.359 14.2771 16.4979 14.1411C16.6367 14.005 16.7687 13.8625 16.8933 13.7139C17.0178 13.5654 17.1348 13.4111 17.2438 13.2516C17.3527 13.0921 17.4536 12.9276 17.5461 12.7585C17.6384 12.5896 17.7222 12.4164 17.7971 12.2393C17.8719 12.0626 17.9378 11.8823 17.9945 11.6989C18.051 11.5161 18.0984 11.3304 18.1363 11.1423C18.1741 10.9551 18.2026 10.7656 18.2216 10.5744C18.2405 10.3844 18.25 10.1929 18.25 10C18.25 9.80718 18.2405 9.6156 18.2216 9.42568C18.2026 9.23441 18.1741 9.04493 18.1363 8.85772C18.0984 8.66962 18.051 8.48393 17.9945 8.30115C17.9378 8.11775 17.8719 7.93743 17.7971 7.76072C17.7222 7.58369 17.6384 7.41043 17.5461 7.24153C17.4536 7.07247 17.3527 6.90792 17.2438 6.74848C17.1348 6.58891 17.0178 6.43461 16.8933 6.28613C16.7687 6.13758 16.6367 5.99502 16.4979 5.859C16.359 5.72293 16.2134 5.59354 16.0616 5.47135C15.9098 5.34914 15.7519 5.23426 15.5887 5.12716C15.2423 4.89999 15.1457 4.43505 15.3729 4.08869C15.6 3.74233 16.065 3.64571 16.4113 3.87289C16.6153 4.00666 16.8125 4.15018 17.0022 4.30288C17.1919 4.45561 17.374 4.61737 17.5477 4.78755C17.7214 4.95777 17.8866 5.13625 18.0426 5.32231C18.1987 5.50844 18.3455 5.70199 18.4823 5.90223C18.6192 6.10255 18.746 6.30939 18.8622 6.52202C18.9785 6.73469 19.0841 6.95295 19.1785 7.17608C19.2728 7.39899 19.356 7.62654 19.4275 7.85804C19.4989 8.08883 19.5587 8.32333 19.6067 8.56084C19.6544 8.79714 19.6903 9.03622 19.7143 9.27743C19.738 9.51659 19.75 9.75765 19.75 10C19.75 10.2424 19.738 10.4835 19.7143 10.7226C19.6903 10.9638 19.6544 11.2029 19.6067 11.4392C19.5587 11.6767 19.4989 11.9112 19.4275 12.142C19.356 12.3735 19.2728 12.6011 19.1785 12.824C19.0841 13.0471 18.9785 13.2654 18.8622 13.478C18.746 13.6907 18.6192 13.8975 18.4823 14.0978C18.3455 14.2981 18.1987 14.4916 18.0426 14.6777C17.8866 14.8638 17.7214 15.0423 17.5477 15.2125C17.374 15.3827 17.1919 15.5444 17.0022 15.6972C16.8125 15.8499 16.6153 15.9934 16.4113 16.1272Z" fill="currentColor"/>
</svg>
`;

const SpeakerLow$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4889 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.5451 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.5451 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4889 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9439 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4889 13.0688Z" fill="currentColor"/>
</svg>
`;

const SpeakerOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4889 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.5451 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.5451 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4889 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9439 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4889 13.0688Z" fill="currentColor"/>
<path d="M16.4113 16.1272C16.065 16.3543 15.6 16.2577 15.3729 15.9114C15.1457 15.565 15.2423 15.1001 15.5887 14.8729C15.7519 14.7658 15.9098 14.6509 16.0616 14.5287C16.2134 14.4065 16.359 14.2771 16.4979 14.1411C16.6367 14.005 16.7687 13.8625 16.8933 13.7139C17.0178 13.5654 17.1348 13.4111 17.2438 13.2516C17.3527 13.0921 17.4536 12.9276 17.5461 12.7585C17.6384 12.5896 17.7222 12.4164 17.7971 12.2393C17.8719 12.0626 17.9378 11.8823 17.9945 11.6989C18.051 11.5161 18.0984 11.3304 18.1363 11.1423C18.1741 10.9551 18.2026 10.7656 18.2216 10.5744C18.2405 10.3844 18.25 10.1929 18.25 10C18.25 9.80718 18.2405 9.6156 18.2216 9.42568C18.2026 9.23441 18.1741 9.04493 18.1363 8.85772C18.0984 8.66962 18.051 8.48393 17.9945 8.30115C17.9378 8.11775 17.8719 7.93743 17.7971 7.76072C17.7222 7.58369 17.6384 7.41043 17.5461 7.24153C17.4536 7.07247 17.3527 6.90792 17.2438 6.74848C17.1348 6.58891 17.0178 6.43461 16.8933 6.28613C16.7687 6.13758 16.6367 5.99502 16.4979 5.859C16.359 5.72293 16.2134 5.59354 16.0616 5.47135C15.9098 5.34914 15.7519 5.23426 15.5887 5.12716C15.2423 4.89999 15.1457 4.43505 15.3729 4.08869C15.6 3.74233 16.065 3.64571 16.4113 3.87289C16.6153 4.00666 16.8125 4.15018 17.0022 4.30288C17.1919 4.45561 17.374 4.61737 17.5477 4.78755C17.7214 4.95777 17.8866 5.13625 18.0426 5.32231C18.1987 5.50844 18.3455 5.70199 18.4823 5.90223C18.6192 6.10255 18.746 6.30939 18.8622 6.52202C18.9785 6.73469 19.0841 6.95295 19.1785 7.17608C19.2728 7.39899 19.356 7.62654 19.4275 7.85804C19.4989 8.08883 19.5587 8.32333 19.6067 8.56084C19.6544 8.79714 19.6903 9.03622 19.7143 9.27743C19.738 9.51659 19.75 9.75765 19.75 10C19.75 10.2424 19.738 10.4835 19.7143 10.7226C19.6903 10.9638 19.6544 11.2029 19.6067 11.4392C19.5587 11.6767 19.4989 11.9112 19.4275 12.142C19.356 12.3735 19.2728 12.6011 19.1785 12.824C19.0841 13.0471 18.9785 13.2654 18.8622 13.478C18.746 13.6907 18.6192 13.8975 18.4823 14.0978C18.3455 14.2981 18.1987 14.4916 18.0426 14.6777C17.8866 14.8638 17.7214 15.0423 17.5477 15.2125C17.374 15.3827 17.1919 15.5444 17.0022 15.6972C16.8125 15.8499 16.6153 15.9934 16.4113 16.1272Z" fill="currentColor"/>
<path d="M1.36429 3.77196C0.937965 3.42087 0.876976 2.79065 1.22807 2.36432C1.57916 1.938 2.20938 1.87701 2.6357 2.2281L19.6357 16.2281C20.062 16.5792 20.123 17.2094 19.7719 17.6357C19.4208 18.0621 18.7906 18.1231 18.3643 17.772L1.36429 3.77196Z" fill="currentColor"/>
</svg>
`;

const Square$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H6C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.44772 14.5523 5 14 5ZM7 13V7H13V13H7Z" fill="currentColor"/>
</svg>
`;

const SquareFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4.5H14C14.8284 4.5 15.5 5.17157 15.5 6V14C15.5 14.8284 14.8284 15.5 14 15.5H6C5.17157 15.5 4.5 14.8284 4.5 14V6C4.5 5.17157 5.17157 4.5 6 4.5Z" fill="currentColor"/>
</svg>
`;

const Star$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70492 17.8855L10 15.9706L14.2951 17.8855C14.9986 18.1991 15.7777 17.6331 15.6967 16.8671L15.2028 12.1905L18.3513 8.69737C18.8669 8.12523 18.5694 7.20937 17.8159 7.04961L13.2155 6.07423L10.8663 2.00044C10.4815 1.33319 9.5185 1.33319 9.13372 2.00044L6.78449 6.07423L2.18413 7.04961C1.43063 7.20937 1.13305 8.12523 1.64874 8.69737L4.79719 12.1905L4.30325 16.8671C4.22234 17.6331 5.00142 18.1991 5.70492 17.8855ZM9.5928 13.9623L6.47433 15.3527L6.83295 11.9572C6.86276 11.675 6.77127 11.3934 6.58129 11.1826L4.29534 8.64644L7.63546 7.93826C7.91305 7.8794 8.15257 7.70538 8.29432 7.45957L10 4.50177L11.7057 7.45957C11.8474 7.70538 12.0869 7.8794 12.3645 7.93826L15.7047 8.64644L13.4187 11.1826C13.2287 11.3934 13.1372 11.675 13.167 11.9572L13.5257 15.3527L10.4072 13.9623C10.148 13.8468 9.85197 13.8468 9.5928 13.9623Z" fill="currentColor"/>
</svg>
`;

const StarFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15.9706L5.70492 17.8855C5.00142 18.1991 4.22234 17.6331 4.30325 16.8671L4.79719 12.1905L1.64874 8.69737C1.13305 8.12523 1.43063 7.20937 2.18413 7.04961L6.78449 6.07423L9.13372 2.00044C9.5185 1.33319 10.4815 1.33319 10.8663 2.00044L13.2155 6.07423L17.8159 7.04961C18.5694 7.20937 18.8669 8.12523 18.3513 8.69737L15.2028 12.1905L15.6967 16.8671C15.7777 17.6331 14.9986 18.1991 14.2951 17.8855L10 15.9706Z" fill="currentColor"/>
</svg>
`;

const Sun$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14ZM10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8Z" fill="currentColor"/>
<path d="M0.5 10C0.5 9.44772 0.947715 9 1.5 9H3.5C4.05228 9 4.5 9.44772 4.5 10C4.5 10.5523 4.05228 11 3.5 11H1.5C0.947715 11 0.5 10.5523 0.5 10Z" fill="currentColor"/>
<path d="M15.5 10C15.5 9.44772 15.9477 9 16.5 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H16.5C15.9477 11 15.5 10.5523 15.5 10Z" fill="currentColor"/>
<path d="M14 14C14.3905 13.6095 15.0237 13.6095 15.4142 14L16.8284 15.4142C17.219 15.8047 17.219 16.4379 16.8284 16.8284C16.4379 17.2189 15.8048 17.2189 15.4142 16.8284L14 15.4142C13.6095 15.0237 13.6095 14.3905 14 14Z" fill="currentColor"/>
<path d="M2.99999 2.99999C3.39051 2.60946 4.02367 2.60946 4.4142 2.99999L5.82841 4.4142C6.21894 4.80472 6.21894 5.43789 5.82841 5.82841C5.43789 6.21894 4.80472 6.21894 4.4142 5.82841L2.99999 4.4142C2.60946 4.02367 2.60946 3.39051 2.99999 2.99999Z" fill="currentColor"/>
<path d="M10 15.5C10.5523 15.5 11 15.9477 11 16.5V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.5C9 15.9477 9.44772 15.5 10 15.5Z" fill="currentColor"/>
<path d="M10 0.5C10.5523 0.5 11 0.947715 11 1.5V3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5V1.5C9 0.947715 9.44772 0.5 10 0.5Z" fill="currentColor"/>
<path d="M16.8284 2.99999C17.2189 3.39051 17.2189 4.02367 16.8284 4.4142L15.4142 5.82841C15.0237 6.21894 14.3905 6.21894 14 5.82841C13.6095 5.43789 13.6095 4.80472 14 4.4142L15.4142 2.99999C15.8047 2.60946 16.4379 2.60946 16.8284 2.99999Z" fill="currentColor"/>
<path d="M5.82841 15.4142L4.4142 16.8284C4.02368 17.219 3.39051 17.219 2.99999 16.8284C2.60946 16.4379 2.60946 15.8048 2.99999 15.4142L4.4142 14C4.80472 13.6095 5.43789 13.6095 5.82841 14C6.21894 14.3905 6.21894 15.0237 5.82841 15.4142Z" fill="currentColor"/>
</svg>
`;

const SunFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
<path d="M0.5 10C0.5 9.44772 0.947715 9 1.5 9H3.5C4.05228 9 4.5 9.44772 4.5 10C4.5 10.5523 4.05228 11 3.5 11H1.5C0.947715 11 0.5 10.5523 0.5 10Z" fill="currentColor"/>
<path d="M15.5 10C15.5 9.44772 15.9477 9 16.5 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H16.5C15.9477 11 15.5 10.5523 15.5 10Z" fill="currentColor"/>
<path d="M15.4142 14L16.8284 15.4142C17.2189 15.8047 17.2189 16.4379 16.8284 16.8284C16.4379 17.2189 15.8047 17.2189 15.4142 16.8284L14 15.4142C13.6095 15.0237 13.6095 14.3905 14 14C14.3905 13.6095 15.0237 13.6095 15.4142 14Z" fill="currentColor"/>
<path d="M2.99999 2.99999C3.39051 2.60946 4.02367 2.60946 4.4142 2.99999L5.82841 4.4142C6.21894 4.80472 6.21894 5.43789 5.82841 5.82841C5.43789 6.21894 4.80472 6.21894 4.4142 5.82841L2.99999 4.4142C2.60946 4.02367 2.60946 3.39051 2.99999 2.99999Z" fill="currentColor"/>
<path d="M10 15.5C10.5523 15.5 11 15.9477 11 16.5V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.5C9 15.9477 9.44772 15.5 10 15.5Z" fill="currentColor"/>
<path d="M10 0.5C10.5523 0.5 11 0.947715 11 1.5V3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5V1.5C9 0.947715 9.44772 0.5 10 0.5Z" fill="currentColor"/>
<path d="M16.8284 2.99999C17.2189 3.39051 17.2189 4.02367 16.8284 4.4142L15.4142 5.82841C15.0237 6.21894 14.3905 6.21894 14 5.82841C13.6095 5.43789 13.6095 4.80472 14 4.4142L15.4142 2.99999C15.8047 2.60946 16.4379 2.60946 16.8284 2.99999Z" fill="currentColor"/>
<path d="M5.82841 14C6.21894 14.3905 6.21894 15.0237 5.82841 15.4142L4.4142 16.8284C4.02367 17.2189 3.39051 17.2189 2.99999 16.8284C2.60946 16.4379 2.60946 15.8047 2.99999 15.4142L4.4142 14C4.80472 13.6095 5.43789 13.6095 5.82841 14Z" fill="currentColor"/>
</svg>
`;

const Syringe$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.35354 10.7175C3.37723 11.6938 3.37723 13.2767 4.35354 14.253L5.76776 15.6673C6.74407 16.6436 8.32698 16.6436 9.30329 15.6673L16.2744 8.69611C16.7572 8.21339 17.0215 7.55425 17.006 6.87175L16.9742 5.46465C16.9436 4.11666 15.8497 3.03572 14.5014 3.02138L13.1266 3.00676C12.4543 2.99961 11.8076 3.2635 11.3322 3.73885L4.35354 10.7175ZM14.8602 7.2819L7.88908 14.253C7.69381 14.4483 7.37723 14.4483 7.18197 14.253L5.76776 12.8388C5.57249 12.6436 5.57249 12.327 5.76776 12.1317L12.7464 5.15307C12.8415 5.058 12.9708 5.00522 13.1053 5.00665L14.4801 5.02127C14.7498 5.02414 14.9686 5.24033 14.9747 5.50992L15.0065 6.91703C15.0096 7.05353 14.9568 7.18536 14.8602 7.2819Z" fill="currentColor"/>
<path d="M11.0208 11.6066C11.2161 11.8019 11.2161 12.1185 11.0208 12.3137C10.8256 12.509 10.509 12.509 10.3137 12.3137L8.8995 10.8995C8.70424 10.7042 8.70424 10.3877 8.8995 10.1924C9.09476 9.99713 9.41134 9.99713 9.60661 10.1924L11.0208 11.6066Z" fill="currentColor"/>
<path d="M5.71751 16.9099C6.10804 17.3004 6.10804 17.9336 5.71751 18.3241C5.32699 18.7146 4.69382 18.7146 4.3033 18.3241L1.47487 15.4957C1.08435 15.1052 1.08435 14.472 1.47487 14.0815C1.8654 13.6909 2.49856 13.6909 2.88909 14.0815L5.71751 16.9099Z" fill="currentColor"/>
<path d="M9.38505 16.6709C9.77558 17.0614 9.77558 17.6945 9.38505 18.0851C8.99453 18.4756 8.36137 18.4756 7.97084 18.0851L2.00709 12.1213C1.61656 11.7308 1.61656 11.0976 2.00709 10.7071C2.39761 10.3166 3.03078 10.3166 3.4213 10.7071L9.38505 16.6709Z" fill="currentColor"/>
<path d="M13.1421 9.48528C13.3374 9.68055 13.3374 9.99713 13.1421 10.1924C12.9469 10.3877 12.6303 10.3877 12.435 10.1924L11.0208 8.77818C10.8255 8.58292 10.8255 8.26633 11.0208 8.07107C11.2161 7.87581 11.5327 7.87581 11.7279 8.07107L13.1421 9.48528Z" fill="currentColor"/>
<path d="M5 16.4142L3.58578 15L5 13.5858L6.41421 15L5 16.4142Z" fill="currentColor"/>
<path d="M17.9703 0.970326C18.2632 0.677433 18.7381 0.677433 19.031 0.970326C19.3239 1.26322 19.3239 1.73809 19.031 2.03099L16.031 5.03099C15.7381 5.32388 15.2632 5.32388 14.9703 5.03099C14.6774 4.73809 14.6774 4.26322 14.9703 3.97033L17.9703 0.970326Z" fill="currentColor"/>
</svg>
`;

const TShirt$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.4481 10.3965L2.99999 10.1199V17C2.99999 18.6569 4.34314 20 5.99999 20H14C15.6568 20 17 18.6569 17 17V10.118L17.5528 10.3944C18.1347 10.6854 18.835 10.352 18.9762 9.71693L19.9762 5.21693C20.0503 4.88317 19.9489 4.53465 19.7071 4.29289L17.2929 1.87868C16.7303 1.31607 15.9672 1 15.1716 1H13C12.5133 1 12.0973 1.35042 12.0145 1.83004C11.7469 3.3817 11.1284 4 9.99902 4C8.86986 4 8.25211 3.38205 7.98555 1.83066C7.90309 1.35075 7.48694 1 6.99999 1H4.82884C4.03282 1 3.26943 1.31637 2.70676 1.87945L0.294793 4.29315C0.0533553 4.53476 -0.0480615 4.88289 0.0258427 5.21637L1.02368 9.71889C1.16458 10.3547 1.86593 10.6883 2.4481 10.3965ZM4.12148 3.29315C4.30904 3.10546 4.5635 3 4.82884 3H6.20588C6.77637 4.92818 8.07723 6 9.99902 6C11.9208 6 13.2221 4.92825 13.7936 3H15.1716C15.4368 3 15.6911 3.10536 15.8787 3.29289L17.9047 5.31894L17.3016 8.03279L16.4472 7.60557C15.7823 7.27312 15 7.75662 15 8.5V17C15 17.5523 14.5523 18 14 18H5.99999C5.44771 18 4.99999 17.5523 4.99999 17V8.5C4.99999 7.75618 4.21684 7.27271 3.55188 7.60602L2.69873 8.03367L2.09711 5.31898L4.12148 3.29315Z" fill="currentColor"/>
<path d="M11.5 10.5C10.9477 10.5 10.5 10.0523 10.5 9.5C10.5 8.94772 10.9477 8.5 11.5 8.5H13.5C14.0523 8.5 14.5 8.94772 14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5H11.5Z" fill="currentColor"/>
</svg>
`;

const Taxi$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17116 3C5.024 3 4.02404 3.78074 3.74581 4.89366L2.68528 9.13576C1.70458 9.47364 1 10.4045 1 11.5V14.5C1 15.8807 2.11929 17 3.5 17H16.5C17.8807 17 19 15.8807 19 14.5V11.5C19 10.4045 18.2954 9.47364 17.3147 9.13576L16.2542 4.89366C15.976 3.78074 14.976 3 13.8288 3H6.17116ZM3.5 11C3.95887 11 4.35885 10.6877 4.47014 10.2425L5.68609 5.37873C5.74174 5.15615 5.94173 5 6.17116 5H10.0007H13.8288C14.0583 5 14.2583 5.15615 14.3139 5.37873L15.5299 10.2425C15.6411 10.6877 16.0411 11 16.5 11C16.7761 11 17 11.2239 17 11.5V14.5C17 14.7761 16.7761 15 16.5 15H3.5C3.22386 15 3 14.7761 3 14.5V11.5C3 11.2239 3.22386 11 3.5 11Z" fill="currentColor"/>
<path d="M16.5 13C16.5 13.8284 15.8284 14.5 15 14.5C14.1716 14.5 13.5 13.8284 13.5 13C13.5 12.1716 14.1716 11.5 15 11.5C15.8284 11.5 16.5 12.1716 16.5 13Z" fill="currentColor"/>
<path d="M6.5 13C6.5 13.8284 5.82843 14.5 5 14.5C4.17157 14.5 3.5 13.8284 3.5 13C3.5 12.1716 4.17157 11.5 5 11.5C5.82843 11.5 6.5 12.1716 6.5 13Z" fill="currentColor"/>
<path d="M4 15.5C4.82843 15.5 5.5 16.1716 5.5 17V18C5.5 18.8284 4.82843 19.5 4 19.5C3.17157 19.5 2.5 18.8284 2.5 18V17C2.5 16.1716 3.17157 15.5 4 15.5Z" fill="currentColor"/>
<path d="M16 15.5C16.8284 15.5 17.5 16.1716 17.5 17V18C17.5 18.8284 16.8284 19.5 16 19.5C15.1716 19.5 14.5 18.8284 14.5 18V17C14.5 16.1716 15.1716 15.5 16 15.5Z" fill="currentColor"/>
<path d="M10 1C11.1046 1 12 1.89543 12 3C12 4.10457 11.1046 5 10 5C8.89543 5 8 4.10457 8 3C8 1.89543 8.89543 1 10 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1503 7.08052C13.9525 6.15858 13.1377 5.5 12.1948 5.5H7.80491C6.862 5.5 6.04716 6.15858 5.8494 7.08052L5.42037 9.08052C5.3908 9.21839 5.37589 9.359 5.37589 9.5C5.37589 10.6046 6.27132 11.5 7.37589 11.5H12.6238C12.7648 11.5 12.9054 11.4851 13.0433 11.4555C14.1233 11.2238 14.811 10.1605 14.5793 9.08052L14.1503 7.08052ZM12.6238 9.5H7.37589L7.80491 7.5H12.1948L12.6238 9.5Z" fill="currentColor"/>
</svg>
`;

const Television$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8L2 15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V8C18 6.34315 16.6569 5 15 5H5C3.34315 5 2 6.34315 2 8ZM5 16C4.44772 16 4 15.5523 4 15V8C4 7.44771 4.44772 7 5 7H15C15.5523 7 16 7.44771 16 8V15C16 15.5523 15.5523 16 15 16H5Z" fill="currentColor"/>
<path d="M11.2809 5.62469C10.9359 6.05596 10.3066 6.12588 9.87531 5.78087C9.44405 5.43586 9.37413 4.80657 9.71914 4.3753L11.7191 1.8753C12.0641 1.44404 12.6934 1.37412 13.1247 1.71913C13.556 2.06414 13.6259 2.69343 13.2809 3.12469L11.2809 5.62469Z" fill="currentColor"/>
<path d="M8.71912 5.62469C9.06413 6.05596 9.69343 6.12588 10.1247 5.78087C10.556 5.43586 10.6259 4.80657 10.2809 4.3753L8.28086 1.8753C7.93585 1.44404 7.30656 1.37412 6.8753 1.71913C6.44404 2.06414 6.37412 2.69343 6.71912 3.12469L8.71912 5.62469Z" fill="currentColor"/>
</svg>
`;

const TextBubble$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="9" r="1" fill="currentColor"/>
<circle cx="10" cy="9" r="1" fill="currentColor"/>
<circle cx="13" cy="9" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6V12.1024C1 13.7138 2.27046 15.0285 3.86436 15.0994C4.22426 16.3232 4.75773 17 5.70388 17C6.46059 17 7.38816 16.3911 8.83458 15.1024H16C17.6569 15.1024 19 13.7593 19 12.1024V6C19 4.34315 17.6569 3 16 3H4C2.34315 3 1 4.34315 1 6ZM8.06421 13.1024L7.77816 13.3625C6.91423 14.1477 6.23474 14.6664 5.90912 14.8838C5.81363 14.6587 5.71621 14.3271 5.62633 13.8976L5.45993 13.1024H4C3.44772 13.1024 3 12.6547 3 12.1024V6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44772 17 6V12.1024C17 12.6547 16.5523 13.1024 16 13.1024H8.06421Z" fill="currentColor"/>
</svg>
`;

const Times$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17158 14.2426C6.78106 14.6332 6.14789 14.6332 5.75737 14.2426C5.36684 13.8521 5.36684 13.2189 5.75737 12.8284L12.8284 5.75735C13.219 5.36682 13.8521 5.36682 14.2427 5.75735C14.6332 6.14787 14.6332 6.78104 14.2427 7.17156L7.17158 14.2426Z" fill="currentColor"/>
<path d="M5.75737 7.17152C5.36684 6.781 5.36684 6.14783 5.75737 5.75731C6.14789 5.36679 6.78106 5.36679 7.17158 5.75731L14.2427 12.8284C14.6332 13.2189 14.6332 13.8521 14.2427 14.2426C13.8521 14.6331 13.219 14.6331 12.8284 14.2426L5.75737 7.17152Z" fill="currentColor"/>
</svg>
`;

const Tool$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5617 13.5712L12.2594 7.2522C12.1884 7.16762 12.1136 7.08658 12.0352 7.00933C12.2547 5.6013 11.8405 4.10669 10.8614 2.93989C9.55326 1.38087 7.50228 0.72522 5.67031 1.2589C4.97701 1.46088 4.71979 2.30861 5.18396 2.86178L6.92543 4.93718L6.34416 5.42492L4.60269 3.34953C4.13852 2.79635 3.259 2.90246 2.93971 3.55015C2.09601 5.26161 2.38555 7.39529 3.69372 8.95431C4.65968 10.1055 6.03568 10.7711 7.44204 10.8155C7.51041 10.9169 7.58419 11.0149 7.66312 11.1089L12.9654 17.4279C14.0304 18.6972 15.9227 18.8627 17.1919 17.7977C18.4611 16.7327 18.6267 14.8404 17.5617 13.5712ZM5.22581 7.66873C4.90858 7.29067 4.68922 6.86235 4.56962 6.42156L4.81207 6.7105C5.52207 7.55665 6.78358 7.66702 7.62973 6.95701L8.211 6.46927C9.05715 5.75927 9.16752 4.49776 8.45752 3.65161L8.21507 3.36267C8.62839 3.557 9.01211 3.84739 9.32935 4.22546C10.034 5.06518 10.261 6.15832 9.96754 7.09453C9.83235 7.52578 10.0032 7.9941 10.3843 8.23698C10.5132 8.31907 10.6288 8.42044 10.7273 8.53778L16.0296 14.8568C16.3846 15.2799 16.3294 15.9106 15.9063 16.2656C15.4832 16.6206 14.8525 16.5654 14.4975 16.1424L9.19521 9.82335C9.09345 9.70209 9.01169 9.56568 8.95274 9.41921C8.7843 9.00068 8.35647 8.74677 7.90839 8.79941C6.94383 8.91271 5.92226 8.49873 5.22581 7.66873Z" fill="currentColor"/>
</svg>
`;

const Train$1 = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C17.5 2.79086 15.7092 1 13.5 1L6.5 1C4.29086 1 2.5 2.79086 2.5 5V11.9894C2.5 13.7416 3.64042 15.2898 5.31383 15.8095C6.87197 16.2933 8.43504 16.5359 10 16.5359C11.565 16.5359 13.128 16.2933 14.6862 15.8095C16.3596 15.2898 17.5 13.7416 17.5 11.9894L17.5 5ZM4.5 11.9894V5C4.5 3.89543 5.39543 3 6.5 3L13.5 3C14.6046 3 15.5 3.89543 15.5 5L15.5 11.9894C15.5 12.8655 14.9298 13.6396 14.0931 13.8994C12.7248 14.3243 11.3615 14.5359 10 14.5359C8.63854 14.5359 7.2752 14.3243 5.90691 13.8994C5.07021 13.6396 4.5 12.8655 4.5 11.9894Z" fill="currentColor"/>
<path d="M8 12C8 12.8284 7.32843 13.5 6.5 13.5C5.67157 13.5 5 12.8284 5 12C5 11.1716 5.67157 10.5 6.5 10.5C7.32843 10.5 8 11.1716 8 12Z" fill="currentColor"/>
<path d="M15 12C15 12.8284 14.3284 13.5 13.5 13.5C12.6716 13.5 12 12.8284 12 12C12 11.1716 12.6716 10.5 13.5 10.5C14.3284 10.5 15 11.1716 15 12Z" fill="currentColor"/>
<path d="M4.58137 15.147C4.79717 14.6386 5.38423 14.4014 5.89261 14.6172C6.40099 14.833 6.63818 15.4201 6.42238 15.9285L4.94741 19.4033C4.73161 19.9117 4.14455 20.1489 3.63617 19.9331C3.12779 19.7173 2.8906 19.1302 3.1064 18.6218L4.58137 15.147Z" fill="currentColor"/>
<path d="M15.4678 14.6528C15.276 14.1349 14.7007 13.8705 14.1828 14.0623C13.6648 14.254 13.4004 14.8294 13.5922 15.3473L15.0622 19.3173C15.254 19.8352 15.8293 20.0996 16.3472 19.9078C16.8652 19.716 17.1295 19.1407 16.9378 18.6228L15.4678 14.6528Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6C15 4.61929 13.8807 3.5 12.5 3.5L7.5 3.5C6.11929 3.5 5 4.61929 5 6V7.53465C5 8.75174 5.87647 9.79198 7.07592 9.99842C8.04987 10.1661 9.02477 10.25 10 10.25C10.9752 10.25 11.9502 10.1661 12.9242 9.99841C14.1236 9.79192 15 8.7517 15 7.53464L15 6ZM7 7.53465V6C7 5.72386 7.22386 5.5 7.5 5.5L12.5 5.5C12.7762 5.5 13 5.72386 13 6L13 7.53464C13 7.77805 12.8247 7.9861 12.5848 8.0274C11.7225 8.17586 10.8611 8.25 10 8.25C9.13892 8.25 8.27752 8.17586 7.4152 8.02741C7.17529 7.98611 7 7.77807 7 7.53465Z" fill="currentColor"/>
<path d="M4.75 18.25V16.75H15.2514V18.25H4.75Z" fill="currentColor"/>
</svg>
`;

const Trash$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9371 4.5H11.9363H8.06326C8.02121 4.33649 8.00037 4.16864 8.00037 4.00049C8.00037 2.89728 8.89746 1.99976 10.0002 1.99976C11.1028 1.99976 11.9999 2.89728 11.9999 4.00049C11.9999 4.16937 11.9789 4.33716 11.9373 4.49927L11.9371 4.5Z" fill="currentColor"/>
<path d="M4.5 5.5C3.94772 5.5 3.5 5.05228 3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5C16.5 5.05228 16.0523 5.5 15.5 5.5H4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 18.5C15.0523 18.5 15.5 18.0523 15.5 17.5V7C15.5 6.44772 15.0523 6 14.5 6H5.5C4.94772 6 4.5 6.44772 4.5 7V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5H14.5ZM12.5 8.5C12.5 8.22386 12.7239 8 13 8C13.2761 8 13.5 8.22386 13.5 8.5V15.5C13.5 15.7761 13.2761 16 13 16C12.7239 16 12.5 15.7761 12.5 15.5V8.5ZM10 8C9.72386 8 9.5 8.22386 9.5 8.5V15.5C9.5 15.7761 9.72386 16 10 16C10.2761 16 10.5 15.7761 10.5 15.5V8.5C10.5 8.22386 10.2761 8 10 8ZM6.5 8.5C6.5 8.22386 6.72386 8 7 8C7.27614 8 7.5 8.22386 7.5 8.5V15.5C7.5 15.7761 7.27614 16 7 16C6.72386 16 6.5 15.7761 6.5 15.5V8.5Z" fill="currentColor"/>
</svg>
`;

const TriangleDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.15202 7.53L9.15202 15.53C9.54369 16.1567 10.4563 16.1567 10.848 15.53L15.848 7.53C16.2643 6.86395 15.7855 6 15 6L5.00002 6C4.21458 6 3.73574 6.86395 4.15202 7.53ZM13.1958 8L10 13.1132L6.80427 8H13.1958Z" fill="currentColor"/>
</svg>
`;

const TriangleDownFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z" fill="currentColor"/>
</svg>
`;

const TriangleLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.47 4.15199L4.47 9.15199C3.84333 9.54366 3.84333 10.4563 4.47 10.848L12.47 15.848C13.136 16.2643 14 15.7854 14 15V4.99999C14 4.21455 13.136 3.73571 12.47 4.15199ZM12 6.80424V13.1957L6.8868 9.99999L12 6.80424Z" fill="currentColor"/>
</svg>
`;

const TriangleLeftFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z" fill="currentColor"/>
</svg>
`;

const TriangleRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.53 15.848L15.53 10.848C16.1567 10.4563 16.1567 9.54368 15.53 9.15201L7.53 4.15201C6.86395 3.73573 6 4.21458 6 5.00001L6 15C6 15.7854 6.86395 16.2643 7.53 15.848ZM8 13.1958L8 6.80426L13.1132 10L8 13.1958Z" fill="currentColor"/>
</svg>
`;

const TriangleRightFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="currentColor"/>
</svg>
`;

const TriangleUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.848 13.47L10.848 5.47C10.4563 4.84333 9.54368 4.84333 9.15201 5.47L4.15201 13.47C3.73573 14.136 4.21458 15 5.00001 15H15C15.7854 15 16.2643 14.136 15.848 13.47ZM6.80426 13L10 7.8868L13.1958 13H6.80426Z" fill="currentColor"/>
</svg>
`;

const TriangleUpFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.272 5.205L16.272 13.205C16.8964 14.2041 16.1782 15.5 15 15.5H5.00002C3.82186 15.5 3.1036 14.2041 3.72802 13.205L8.72802 5.205C9.31552 4.265 10.6845 4.265 11.272 5.205Z" fill="currentColor"/>
</svg>
`;

const Truck$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 18.75C6.25736 18.75 5.25 17.7426 5.25 16.5C5.25 15.2574 6.25736 14.25 7.5 14.25C8.74264 14.25 9.75 15.2574 9.75 16.5C9.75 17.7426 8.74264 18.75 7.5 18.75Z" fill="currentColor"/>
<path d="M16.5 18.75C15.2574 18.75 14.25 17.7426 14.25 16.5C14.25 15.2574 15.2574 14.25 16.5 14.25C17.7426 14.25 18.75 15.2574 18.75 16.5C18.75 17.7426 17.7426 18.75 16.5 18.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.5H8C6.89543 4.5 6 5.39543 6 6.5V14C6 15.1046 6.89543 16 8 16H18C19.1046 16 20 15.1046 20 14V6.5C20 5.39543 19.1046 4.5 18 4.5ZM8 14V6.5H18V14H8Z" fill="currentColor"/>
<path d="M10.25 8.75C9.97386 8.75 9.75 8.52614 9.75 8.25C9.75 7.97386 9.97386 7.75 10.25 7.75H15.75C16.0261 7.75 16.25 7.97386 16.25 8.25C16.25 8.52614 16.0261 8.75 15.75 8.75H10.25Z" fill="currentColor"/>
<path d="M10.25 10.75C9.97386 10.75 9.75 10.5261 9.75 10.25C9.75 9.97386 9.97386 9.75 10.25 9.75H15.75C16.0261 9.75 16.25 9.97386 16.25 10.25C16.25 10.5261 16.0261 10.75 15.75 10.75H10.25Z" fill="currentColor"/>
<path d="M10.25 12.75C9.97386 12.75 9.75 12.5261 9.75 12.25C9.75 11.9739 9.97386 11.75 10.25 11.75H15.75C16.0261 11.75 16.25 11.9739 16.25 12.25C16.25 12.5261 16.0261 12.75 15.75 12.75H10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.5H2.73605C1.8463 7.5 1.06354 8.08778 0.815401 8.94223L0 11.75V14C0 15.1046 0.89543 16 2 16H6C7.10457 16 8 15.1046 8 14V9.5C8 8.39543 7.10457 7.5 6 7.5ZM2 14V12.0345L2.73605 9.5H6V14H2Z" fill="currentColor"/>
<path d="M3.29046 10.1H5C5.27614 10.1 5.5 10.3238 5.5 10.6V12.6C5.5 12.8761 5.27614 13.1 5 13.1H3C2.72386 13.1 2.5 12.8761 2.5 12.6V11.75L2.51522 11.6276L2.80568 10.4775C2.86175 10.2555 3.06147 10.1 3.29046 10.1Z" fill="currentColor"/>
</svg>
`;

const Umbrella$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3863 17.3581C11.515 17.3581 11.6111 17.1982 11.6111 16.3198C11.6111 15.7676 12.0588 15.3198 12.6111 15.3198C13.1634 15.3198 13.6111 15.7676 13.6111 16.3198C13.6111 18.1592 12.8907 19.3581 11.3863 19.3581C10.0411 19.3581 9.17227 18.507 9.00701 17.1182L9 17V10.5C9 9.94772 9.44772 9.5 10 9.5C10.5523 9.5 11 9.94772 11 10.5V16.9379C11.0488 17.3087 11.1119 17.3581 11.3863 17.3581Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947715 11 1.5V3C11 3.55228 10.5523 4 10 4C9.44772 4 9 3.55228 9 3L9 1.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66803 11.2348C5.70837 11.1785 5.74282 11.1304 5.75566 11.1127C5.91724 10.8896 6.04642 10.7345 6.12513 10.6432C6.1774 10.6826 6.24691 10.737 6.34702 10.8162C7.06596 11.3853 7.47315 11.6014 8.16417 11.4864C8.56768 11.4193 8.88935 11.2531 9.3036 10.964C9.36217 10.9231 9.41133 10.888 9.50965 10.817C9.851 10.571 9.98417 10.5004 10.0162 10.4999C10.017 10.4999 10.1455 10.5685 10.4822 10.8134L10.5664 10.8745C11.0756 11.2426 11.3943 11.4194 11.8497 11.4886C12.543 11.5941 12.9334 11.3718 13.6611 10.7686C13.755 10.6908 13.8227 10.6353 13.875 10.5938C13.8792 10.5992 13.8837 10.6048 13.8882 10.6105C13.9659 10.7084 14.0873 10.8613 14.2344 11.0701C14.2391 11.0768 14.2556 11.1004 14.2783 11.1329C14.342 11.224 14.4546 11.3853 14.4962 11.4435C14.6062 11.5979 14.6973 11.7186 14.7894 11.8282C15.1433 12.2496 15.4778 12.4979 15.9962 12.4999C17.2043 12.5045 18 11.6884 18 10.5C18 6.00945 14.5737 2.5 10.1135 2.5C5.61932 2.5 2 6.04373 2 10.5C2 11.691 2.80684 12.4653 3.97058 12.4996C4.49773 12.5151 4.84171 12.2702 5.20109 11.8524C5.29327 11.7452 5.38393 11.6278 5.49488 11.4756C5.52617 11.4327 5.60443 11.3235 5.66803 11.2348ZM4.0123 10.1117C4.21305 6.95433 6.84728 4.5 10.1135 4.5C13.3213 4.5 15.7905 6.89462 15.9873 10.0869L15.8695 9.91849C15.2637 9.05819 14.8777 8.65893 14.2005 8.52031C13.7705 8.43229 13.384 8.53828 13.0099 8.76164C12.8134 8.879 12.7042 8.96398 12.3847 9.22882C12.2299 9.35714 12.1385 9.42855 12.0688 9.47431C12.0017 9.43641 11.8947 9.36694 11.7382 9.25373L11.6585 9.19592C10.9452 8.67711 10.5954 8.49025 9.98384 8.50013C9.38495 8.50981 9.02693 8.69953 8.34016 9.19458C8.2447 9.26343 8.20591 9.29119 8.15893 9.32398C8.04542 9.40321 7.96278 9.45402 7.90806 9.48298C7.83841 9.4411 7.74687 9.37356 7.58824 9.248C7.26436 8.99166 7.16224 8.91568 6.96646 8.80468C6.59508 8.59412 6.21204 8.49791 5.79041 8.58829C5.12256 8.73144 4.72218 9.13005 4.13588 9.93956C4.11944 9.96226 4.07861 10.0192 4.03366 10.0819L4.0123 10.1117Z" fill="currentColor"/>
</svg>
`;

const Wifi$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6961 11.2821C14.0926 11.6665 14.1024 12.2996 13.7179 12.6961C13.3335 13.0926 12.7004 13.1024 12.3039 12.7179C12.273 12.688 12.2391 12.6581 12.2022 12.6285C12.0406 12.4986 11.8292 12.3788 11.5791 12.2796C11.1265 12.1001 10.5793 12 10 12C9.08604 12 8.26716 12.2511 7.79777 12.6285C7.76089 12.6581 7.72699 12.688 7.69613 12.7179C7.29964 13.1024 6.66655 13.0926 6.28209 12.6961C5.89762 12.2996 5.90738 11.6665 6.30387 11.2821C6.37977 11.2085 6.46015 11.1377 6.54472 11.0697C7.39422 10.3868 8.65538 10 10 10C10.8267 10 11.6239 10.1459 12.3163 10.4204C12.7456 10.5907 13.131 10.809 13.4553 11.0697C13.5399 11.1377 13.6202 11.2085 13.6961 11.2821Z" fill="currentColor"/>
<path d="M16.2128 8.68869C16.6002 9.08238 16.595 9.71553 16.2013 10.1029C15.8076 10.4902 15.1745 10.485 14.7872 10.0913C14.6908 9.99338 14.5866 9.89798 14.4751 9.80557C14.362 9.71196 14.2416 9.62159 14.1142 9.53491C13.9855 9.44731 13.8498 9.36361 13.7078 9.28424C13.5647 9.20419 13.4152 9.12866 13.2601 9.05801C13.104 8.9869 12.9424 8.92084 12.7758 8.86013C12.6085 8.79914 12.4364 8.74364 12.2601 8.6939C12.0833 8.64404 11.9026 8.60002 11.7185 8.56207C11.5345 8.52413 11.3472 8.49229 11.1573 8.46673C10.968 8.44124 10.7762 8.42202 10.5824 8.40919C10.3899 8.39644 10.1956 8.39001 10 8.39001C9.80443 8.39001 9.61014 8.39644 9.4176 8.40919C9.22385 8.42202 9.03203 8.44124 8.84266 8.46673C8.65277 8.49229 8.46552 8.52413 8.28146 8.56207C8.09736 8.60002 7.91666 8.64404 7.73993 8.6939C7.56364 8.74364 7.39152 8.79914 7.22416 8.86013C7.0576 8.92084 6.89597 8.9869 6.73987 9.05801C6.58477 9.12866 6.43534 9.20419 6.29217 9.28424C6.15018 9.36361 6.01455 9.44731 5.88581 9.53491C5.75842 9.62159 5.63797 9.71196 5.52494 9.80557C5.41338 9.89798 5.30922 9.99338 5.21284 10.0913C4.82551 10.485 4.19237 10.4902 3.79868 10.1029C3.40498 9.71553 3.39983 9.08238 3.78716 8.68869C3.93166 8.54182 4.0859 8.40053 4.24924 8.26525C4.41113 8.13118 4.58183 8.0031 4.76069 7.8814C4.93819 7.76061 5.12361 7.6462 5.31623 7.53851C5.50766 7.4315 5.70608 7.3312 5.91079 7.23795C6.11446 7.14517 6.32421 7.05944 6.53934 6.98104C6.75355 6.90297 6.97295 6.83222 7.19683 6.76905C7.41971 6.70617 7.64688 6.65083 7.87767 6.60326C8.10719 6.55594 8.34013 6.51634 8.57585 6.48461C8.80999 6.45309 9.04673 6.42936 9.28546 6.41356C9.522 6.39789 9.76036 6.39001 10 6.39001C10.2396 6.39001 10.478 6.39789 10.7145 6.41356C10.9533 6.42936 11.19 6.45309 11.4241 6.48461C11.6599 6.51634 11.8928 6.55594 12.1223 6.60326C12.3531 6.65083 12.5803 6.70617 12.8032 6.76905C13.0271 6.83222 13.2464 6.90297 13.4607 6.98104C13.6758 7.05944 13.8855 7.14517 14.0892 7.23795C14.2939 7.3312 14.4923 7.4315 14.6838 7.53851C14.8764 7.6462 15.0618 7.76061 15.2393 7.8814C15.4182 8.0031 15.5889 8.13118 15.7508 8.26525C15.9141 8.40053 16.0683 8.54182 16.2128 8.68869Z" fill="currentColor"/>
<path d="M18.2454 6.22201C18.6136 6.63366 18.5783 7.26584 18.1667 7.63403C17.755 8.00221 17.1228 7.96697 16.7546 7.55532C16.6133 7.3973 16.4611 7.24398 16.2987 7.09599C16.1352 6.94702 15.9614 6.80363 15.7782 6.66645C15.5939 6.5285 15.4001 6.397 15.1977 6.27253C14.9944 6.14748 14.7825 6.02968 14.5629 5.91965C14.3426 5.80922 14.1147 5.70676 13.8801 5.61271C13.6448 5.51841 13.4031 5.43268 13.1558 5.35591C12.9082 5.27907 12.6552 5.21129 12.3976 5.15288C12.1404 5.09455 11.8788 5.04562 11.6136 5.00636C11.3494 4.96723 11.0818 4.93773 10.8116 4.91805C10.5433 4.89851 10.2725 4.88866 10 4.88866C9.72751 4.88866 9.45676 4.89851 9.18838 4.91805C8.91819 4.93773 8.65062 4.96723 8.38638 5.00636C8.12121 5.04562 7.85962 5.09455 7.60238 5.15288C7.34479 5.21129 7.0918 5.27907 6.84422 5.35591C6.59687 5.43268 6.35518 5.51841 6.11995 5.61271C5.88536 5.70676 5.65746 5.80922 5.43708 5.91965C5.2175 6.02968 5.00564 6.14748 4.80229 6.27253C4.59988 6.397 4.40615 6.5285 4.22185 6.66645C4.03857 6.80363 3.86484 6.94702 3.70132 7.09599C3.53888 7.24398 3.38671 7.3973 3.24538 7.55532C2.87719 7.96697 2.24501 8.00221 1.83335 7.63403C1.4217 7.26584 1.38646 6.63366 1.75464 6.22201C1.94178 6.01278 2.14198 5.81106 2.35441 5.61753C2.56577 5.42498 2.78906 5.24069 3.02339 5.06529C3.2567 4.89067 3.50075 4.725 3.75463 4.56888C4.00757 4.41334 4.27004 4.26739 4.54111 4.13157C4.81132 3.99617 5.08986 3.87094 5.37575 3.75633C5.66085 3.64203 5.95304 3.53839 6.25138 3.4458C6.54872 3.35351 6.85193 3.27227 7.1601 3.20239C7.46682 3.13284 7.77822 3.0746 8.09344 3.02793C8.40671 2.98154 8.72353 2.94661 9.04309 2.92334C9.35982 2.90027 9.67904 2.88866 10 2.88866C10.321 2.88866 10.6402 2.90027 10.9569 2.92334C11.2765 2.94661 11.5933 2.98154 11.9066 3.02793C12.2218 3.0746 12.5332 3.13284 12.8399 3.20239C13.1481 3.27227 13.4513 3.35351 13.7486 3.4458C14.047 3.53839 14.3392 3.64203 14.6243 3.75633C14.9102 3.87094 15.1887 3.99617 15.4589 4.13157C15.73 4.26739 15.9925 4.41334 16.2454 4.56888C16.4993 4.725 16.7433 4.89067 16.9766 5.06529C17.211 5.24069 17.4342 5.42498 17.6456 5.61753C17.858 5.81106 18.0582 6.01278 18.2454 6.22201Z" fill="currentColor"/>
<path d="M12 15.25C12 16.3546 11.1046 17.25 10 17.25C8.89543 17.25 8 16.3546 8 15.25C8 14.1454 8.89543 13.25 10 13.25C11.1046 13.25 12 14.1454 12 15.25Z" fill="currentColor"/>
</svg>
`;

/** Do not edit! This file is auto-generated. */
const pop = {
    'airplane': Airplane$1,
    'angle-down': AngleDown$1,
    'angle-left': AngleLeft$1,
    'angle-right': AngleRight$1,
    'angle-up': AngleUp$1,
    'battery': Battery$1,
    'bell': Bell$1,
    'bell-off': BellOff$1,
    'bicycle': Bicycle$1,
    'bluetooth': Bluetooth$1,
    'book': Book$1,
    'bookmark': Bookmark$1,
    'bookmark-filled': BookmarkFilled,
    'building': Building$1,
    'calculator': Calculator$1,
    'calendar': Calendar$1,
    'camera': Camera$1,
    'can': Can$1,
    'car': Car$1,
    'cart': Cart$1,
    'checkmark': Checkmark$1,
    'circle': Circle$1,
    'circle-filled': CircleFilled,
    'clipboard': Clipboard$1,
    'clock': Clock$1,
    'cloud': Cloud$1,
    'cloud-down': CloudDown$1,
    'cloud-down-filled': CloudDownFilled,
    'cloud-filled': CloudFilled,
    'cloud-up': CloudUp$1,
    'cloud-up-filled': CloudUpFilled,
    'coctail': Coctail$1,
    'color-picker': ColorPicker$1,
    'contract': Contract$1,
    'controller': Controller$1,
    'credit-card': CreditCard$1,
    'cup': Cup$1,
    'division': Division$1,
    'dots-x': DotsX$1,
    'dots-y': DotsY$1,
    'dress': Dress$1,
    'duplicate': Duplicate$1,
    'electricity': Electricity$1,
    'exclamation': Exclamation$1,
    'exclamation-filled': ExclamationFilled,
    'expand': Expand$1,
    'eye': Eye$1,
    'eye-closed': EyeClosed$1,
    'eye-off': EyeOff$1,
    'file': File$1,
    'film-frame': FilmFrame$1,
    'flag': Flag$1,
    'flower': Flower$1,
    'flower-bud': FlowerBud$1,
    'folder': Folder$1,
    'gear': Gear$1,
    'gift': Gift$1,
    'grab': Grab$1,
    'hamburger': Hamburger$1,
    'headphone': Headphone$1,
    'heart': Heart$1,
    'house': House$1,
    'info': Info$1,
    'info-filled': InfoFilled,
    'internet': Internet$1,
    'key': Key$1,
    'knive-fork': KniveFork$1,
    'letter': Letter$1,
    'lock-closed': LockClosed$1,
    'lock-open': LockOpen$1,
    'loop': Loop$1,
    'loop-minus': LoopMinus$1,
    'loop-plus': LoopPlus$1,
    'magnet': Magnet$1,
    'map': Map$1,
    'microphone': Microphone$1,
    'minus': Minus$1,
    'monitor': Monitor$1,
    'monitor2': Monitor2$1,
    'moon': Moon$1,
    'moon-filled': MoonFilled,
    'motorcycle': Motorcycle$1,
    'music-note-double': MusicNoteDouble$1,
    'music-note-single': MusicNoteSingle$1,
    'open': Open$1,
    'paint-pallet': PaintPallet$1,
    'pen': Pen$1,
    'person': Person$1,
    'person-filled': PersonFilled,
    'phone': Phone$1,
    'photo-camera': PhotoCamera$1,
    'pill': Pill$1,
    'pinpoint': Pinpoint$1,
    'pinpoint-filled': PinpointFilled,
    'pinpoint-off': PinpointOff$1,
    'pinpoint-off-filled': PinpointOffFilled,
    'plus': Plus$1,
    'power': Power$1,
    'printer': Printer$1,
    'refresh': Refresh$1,
    'reload': Reload$1,
    'scissors': Scissors$1,
    'send': Send$1,
    'share-android': ShareAndroid$1,
    'share-ios': ShareIos$1,
    'smartphone': Smartphone$1,
    'smartphone-notch': SmartphoneNotch$1,
    'smartphone2': Smartphone2$1,
    'soft-drink': SoftDrink$1,
    'speaker-high': SpeakerHigh$1,
    'speaker-low': SpeakerLow$1,
    'speaker-off': SpeakerOff$1,
    'square': Square$1,
    'square-filled': SquareFilled,
    'star': Star$1,
    'star-filled': StarFilled,
    'sun': Sun$1,
    'sun-filled': SunFilled,
    'syringe': Syringe$1,
    't-shirt': TShirt$1,
    'taxi': Taxi$1,
    'television': Television$1,
    'text-bubble': TextBubble$1,
    'times': Times$1,
    'tool': Tool$1,
    'train': Train$1,
    'trash': Trash$1,
    'triangle-down': TriangleDown$1,
    'triangle-down-filled': TriangleDownFilled,
    'triangle-left': TriangleLeft$1,
    'triangle-left-filled': TriangleLeftFilled,
    'triangle-right': TriangleRight$1,
    'triangle-right-filled': TriangleRightFilled,
    'triangle-up': TriangleUp$1,
    'triangle-up-filled': TriangleUpFilled,
    'truck': Truck$1,
    'umbrella': Umbrella$1,
    'wifi': Wifi$1,
};

const Airplane = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.2237 13.805C11.4794 15.6396 11.5923 16.7828 11.5624 17.2854C11.5159 18.0655 10.9931 18.8865 10.0279 19.7822C9.75347 20.0369 9.30689 19.9108 9.20619 19.5502L7.87106 14.7706L7.27107 14.1706L2.49144 12.8355C2.13092 12.7348 2.00483 12.2882 2.25945 12.0138C3.15519 11.0485 3.97614 10.5258 4.75628 10.4793C5.25901 10.4494 6.40254 10.5624 8.23783 10.8181L10.6694 8.16575L4.61552 6.47431C4.25502 6.37359 4.12895 5.92703 4.38355 5.65265C5.76919 4.15943 7.02218 3.36158 8.17652 3.29293C9.06242 3.24023 10.9254 3.70483 13.8567 4.68935L14.3016 4.20455C16.3494 2.15809 18.0349 1.59992 19.2388 2.80381C20.4427 4.00777 19.8842 5.69305 17.8214 7.75516L17.3524 8.1852C18.3369 11.1164 18.8014 12.9793 18.7488 13.8652C18.6801 15.0195 17.8823 16.2725 16.389 17.6581C16.1147 17.9127 15.6681 17.7867 15.5674 17.4262L13.8761 11.3729L11.2237 13.805Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5624 16.2854C10.5923 15.7828 10.4794 14.6396 10.2237 12.805L12.8761 10.3729L14.5674 16.4262C14.6681 16.7867 15.1147 16.9127 15.389 16.6581C16.8823 15.2725 17.6801 14.0195 17.7488 12.8652C17.8014 11.9793 17.3369 10.1164 16.3524 7.1852L16.8214 6.75516C18.8842 4.69305 19.4427 3.00777 18.2388 1.80381C17.0349 0.59992 15.3494 1.15809 13.3016 3.20455L12.8567 3.68935C9.92541 2.70483 8.06242 2.24023 7.17652 2.29293C6.02218 2.36158 4.76919 3.15943 3.38355 4.65265C3.12895 4.92703 3.25502 5.37359 3.61552 5.47431L9.66945 7.16575L7.23783 9.81814C5.40254 9.56238 4.25901 9.44939 3.75628 9.47932C2.97614 9.52577 2.15519 10.0485 1.25945 11.0138C1.00483 11.2882 1.13092 11.7348 1.49144 11.8355L6.27107 13.1706L6.87106 13.7706L8.20619 18.5502C8.30689 18.9108 8.75347 19.0369 9.02786 18.7822C9.99314 17.8865 10.5159 17.0655 10.5624 16.2854ZM9.19693 12.6843C9.46746 14.5947 9.58981 15.7947 9.56413 16.226C9.54433 16.5585 9.33872 16.9682 8.93509 17.4427L7.79891 13.3753C7.77578 13.2925 7.73169 13.217 7.6709 13.1562L6.88545 12.3708C6.82466 12.31 6.74922 12.2659 6.66642 12.2428L2.599 11.1066C3.07353 10.703 3.4832 10.4974 3.81571 10.4776C4.24707 10.4519 5.44749 10.5743 7.35857 10.8449C7.52176 10.868 7.68586 10.8092 7.79724 10.6877L10.9569 7.24122C11.2089 6.96629 11.0821 6.52215 10.7229 6.42178L4.70117 4.73934C5.68001 3.80916 6.53157 3.33305 7.23589 3.29116C7.96978 3.24751 9.87294 3.73165 12.8443 4.74065C13.032 4.80439 13.2397 4.75121 13.3736 4.60508L14.0236 3.8961C15.7159 2.20551 16.8505 1.82978 17.5317 2.51091C18.2127 3.19197 17.8368 4.32621 16.1299 6.03309L15.4366 6.66821C15.2905 6.80217 15.2373 7.0098 15.3011 7.1975C16.31 10.1688 16.7942 12.0719 16.7505 12.8058C16.7086 13.5101 16.2325 14.3617 15.3023 15.3405L13.6201 9.31934C13.5197 8.96009 13.0755 8.83327 12.8006 9.08536L9.35407 12.2457C9.23261 12.3571 9.17383 12.5212 9.19693 12.6843Z" fill="black"/>
</svg>
`;

const AngleDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.5475L6.96028 7.34769C5.42383 6.06732 3.50328 8.37199 5.03972 9.65236L10.9878 14.6091C11.2603 14.8652 11.6176 15.0286 12 15.0275C12.3824 15.0286 12.7397 14.8652 13.0122 14.6091L18.9603 9.65236C20.4967 8.37199 18.5762 6.06732 17.0397 7.34769L12 11.5475Z" fill="currentColor"/>
</g>
<path d="M15.6799 7.11597L9.67991 12.116L10.3201 12.8842L16.3201 7.88419L15.6799 7.11597Z" fill="black"/>
<path d="M16.3201 7.88412L10.3201 12.8841C9.80794 13.3109 9.16776 12.5427 9.67991 12.1159L15.6799 7.1159C16.1921 6.68911 16.8322 7.45733 16.3201 7.88412Z" fill="black"/>
<path d="M3.67991 7.88419L9.67991 12.8842L10.3201 12.116L4.32009 7.11597L3.67991 7.88419Z" fill="black"/>
<path d="M4.32009 7.1159L10.3201 12.1159C10.8322 12.5427 10.1921 13.3109 9.67991 12.8841L3.67991 7.88412C3.16776 7.45733 3.80794 6.68911 4.32009 7.1159Z" fill="black"/>
</svg>
`;

const AngleLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4526 11L15.6523 5.96027C16.9327 4.42382 14.628 2.50327 13.3477 4.03971L8.39096 9.98776C8.13483 10.2603 7.97147 10.6176 7.97252 11C7.97147 11.3824 8.13483 11.7397 8.39096 12.0122L13.3477 17.9603C14.628 19.4967 16.9327 17.5762 15.6523 16.0397L11.4526 11Z" fill="currentColor"/>
</g>
<path d="M12.3841 15.6799L7.38411 9.67993L6.61589 10.3201L11.6159 16.3201L12.3841 15.6799Z" fill="black"/>
<path d="M11.6159 16.32L6.61589 10.32C6.1891 9.8079 6.95732 9.16772 7.38411 9.67986L12.3841 15.6799C12.8109 16.192 12.0427 16.8322 11.6159 16.32Z" fill="black"/>
<path d="M11.6159 3.67993L6.61589 9.67993L7.38411 10.3201L12.3841 4.32012L11.6159 3.67993Z" fill="black"/>
<path d="M12.3841 4.32005L7.38411 10.32C6.95732 10.8322 6.1891 10.192 6.61589 9.67986L11.6159 3.67986C12.0427 3.16772 12.8109 3.8079 12.3841 4.32005Z" fill="black"/>
</svg>
`;

const AngleRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M15.8115 11.7288C15.7623 11.8174 15.7036 11.9018 15.6355 11.9805L10.6523 17.9603C10.122 18.5967 9.17614 18.6827 8.53972 18.1524C7.90331 17.622 7.81732 16.6762 8.34767 16.0398L12.5474 11L8.34767 5.96031C7.81732 5.3239 7.90331 4.37805 8.53972 3.84771C9.17614 3.31736 10.122 3.40335 10.6523 4.03976L15.6523 10.0398C16.0606 10.5296 16.1036 11.2028 15.8116 11.7288L15.8115 11.7288Z" fill="currentColor"/>
</g>
<path d="M7.11589 4.3201C6.9391 4.10797 6.96777 3.79268 7.17991 3.6159C7.39204 3.43912 7.70733 3.46778 7.88411 3.67992L12.8841 9.67992C13.0609 9.89206 13.0322 10.2073 12.8201 10.3841C12.608 10.5609 12.2927 10.5322 12.1159 10.3201L7.11589 4.3201Z" fill="black"/>
<path d="M7.88411 16.3201C7.70733 16.5322 7.39204 16.5609 7.17991 16.3841C6.96777 16.2073 6.9391 15.8921 7.11589 15.6799L12.1159 9.67992C12.2927 9.46778 12.608 9.43912 12.8201 9.6159C13.0322 9.79268 13.0609 10.108 12.8841 10.3201L7.88411 16.3201Z" fill="black"/>
</svg>
`;

const AngleUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9878 7.39098L5.03973 12.3477C3.50328 13.6281 5.42384 15.9327 6.96028 14.6524L12 10.4526L17.0397 14.6524C18.5762 15.9327 20.4967 13.6281 18.9603 12.3477L13.0122 7.39098C12.7397 7.13485 12.3824 6.9715 12 6.97254C11.6176 6.9715 11.2603 7.13485 10.9878 7.39098Z" fill="currentColor"/>
</g>
<path d="M16.3201 12.116L10.3201 7.11597L9.67992 7.88419L15.6799 12.8842L16.3201 12.116Z" fill="black"/>
<path d="M15.6799 12.8841L9.67991 7.88412C9.16776 7.45733 9.80795 6.68911 10.3201 7.1159L16.3201 12.1159C16.8322 12.5427 16.1921 13.3109 15.6799 12.8841Z" fill="black"/>
<path d="M4.32009 12.8842L10.3201 7.88419L9.67991 7.11597L3.67991 12.116L4.32009 12.8842Z" fill="black"/>
<path d="M3.67991 12.1159L9.67991 7.1159C10.1921 6.68911 10.8322 7.45733 10.3201 7.88412L4.32009 12.8841C3.80795 13.3109 3.16776 12.5427 3.67991 12.1159Z" fill="black"/>
</svg>
`;

const Battery = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="3" y="7" width="13" height="8" rx="1" fill="currentColor"/>
<rect x="16.5" y="8.5" width="2" height="5" rx="0.5" fill="currentColor"/>
</g>
<rect x="16" y="7.5" width="2" height="5" rx="0.5" fill="black"/>
<path d="M4 7.5H6.5V12.5H4V7.5Z" fill="black"/>
<path d="M7.25 7.5H9.75V12.5H7.25V7.5Z" fill="black"/>
<rect x="10.5" y="7.5" width="2.5" height="5" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5H3C2.17157 5.5 1.5 6.17157 1.5 7V13C1.5 13.8284 2.17157 14.5 3 14.5H14C14.8284 14.5 15.5 13.8284 15.5 13V7C15.5 6.17157 14.8284 5.5 14 5.5ZM2.5 7C2.5 6.72386 2.72386 6.5 3 6.5H14C14.2761 6.5 14.5 6.72386 14.5 7V13C14.5 13.2761 14.2761 13.5 14 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V7Z" fill="black"/>
</svg>
`;

const Bell = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.02242C15.3033 5.27504 17.5 7.63098 17.5 10.5V13.4254C18.4211 13.9472 19 14.9279 19 16C19 17.1046 18.1046 18 17 18H13.5C13.5 19.1046 12.6046 20 11.5 20C10.3954 20 9.5 19.1046 9.5 18H6C4.89543 18 4 17.1046 4 16C4 14.9279 4.5789 13.9472 5.5 13.4254V10.5C5.5 7.63098 7.69675 5.27504 10.5 5.02242L10.5 3C10.5 2.44771 10.9477 2 11.5 2C12.0523 2 12.5 2.44772 12.5 3L12.5 5.02242Z" fill="currentColor"/>
<path d="M8 17C8 16.7239 8.22386 16.5 8.5 16.5C8.77614 16.5 9 16.7239 9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17C11 16.7239 11.2239 16.5 11.5 16.5C11.7761 16.5 12 16.7239 12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 14.5C17.5 13.4279 16.9211 12.4472 16 11.9254V9C16 5.96243 13.5376 3.5 10.5 3.5H9.5C6.46243 3.5 4 5.96243 4 9V11.9254C3.0789 12.4472 2.5 13.4279 2.5 14.5C2.5 15.6046 3.39543 16.5 4.5 16.5H15.5C16.6046 16.5 17.5 15.6046 17.5 14.5ZM15 12.5583L15.2952 12.6908L15.35 12.7155C16.0502 13.0332 16.5 13.7311 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5C3.5 13.7311 3.94976 13.0332 4.65004 12.7155L4.7048 12.6908L5 12.5583V9C5 6.51472 7.01472 4.5 9.5 4.5H10.5C12.9853 4.5 15 6.51472 15 9V12.5583Z" fill="black"/>
<path d="M9.5 1.5C9.5 1.22386 9.72386 1 10 1C10.2761 1 10.5 1.22386 10.5 1.5L10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4L9.5 1.5Z" fill="black"/>
</svg>
`;

const BellOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.02242C15.3033 5.27504 17.5 7.63098 17.5 10.5V13.4254C18.4211 13.9472 19 14.9279 19 16C19 17.1046 18.1046 18 17 18H13.5C13.5 19.1046 12.6046 20 11.5 20C10.3954 20 9.5 19.1046 9.5 18H6C4.89543 18 4 17.1046 4 16C4 14.9279 4.5789 13.9472 5.5 13.4254V10.5C5.5 7.63098 7.69675 5.27504 10.5 5.02242L10.5 3C10.5 2.44771 10.9477 2 11.5 2C12.0523 2 12.5 2.44772 12.5 3L12.5 5.02242Z" fill="currentColor"/>
<path d="M8 17C8 16.7239 8.22386 16.5 8.5 16.5C8.77614 16.5 9 16.7239 9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17C11 16.7239 11.2239 16.5 11.5 16.5C11.7761 16.5 12 16.7239 12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 14.5C17.5 13.4279 16.9211 12.4472 16 11.9254V9C16 5.96243 13.5376 3.5 10.5 3.5H9.5C6.46243 3.5 4 5.96243 4 9V11.9254C3.0789 12.4472 2.5 13.4279 2.5 14.5C2.5 15.6046 3.39543 16.5 4.5 16.5H15.5C16.6046 16.5 17.5 15.6046 17.5 14.5ZM15 12.5583L15.2952 12.6908L15.35 12.7155C16.0502 13.0332 16.5 13.7311 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5C3.5 13.7311 3.94976 13.0332 4.65004 12.7155L4.7048 12.6908L5 12.5583V9C5 6.51472 7.01472 4.5 9.5 4.5H10.5C12.9853 4.5 15 6.51472 15 9V12.5583Z" fill="black"/>
<path d="M9.5 1.5C9.5 1.22386 9.72386 1 10 1C10.2761 1 10.5 1.22386 10.5 1.5L10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4L9.5 1.5Z" fill="black"/>
<path d="M2.64772 2.88933C2.45246 2.69407 2.45246 2.37748 2.64772 2.18222C2.84298 1.98696 3.15956 1.98696 3.35482 2.18222L19.3548 18.1822C19.5501 18.3775 19.5501 18.6941 19.3548 18.8893C19.1596 19.0846 18.843 19.0846 18.6477 18.8893L2.64772 2.88933Z" fill="black"/>
</svg>
`;

const Bicycle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 20C7.03981 20 8.723 18.4732 8.96905 16.5H10.7105C11.0479 16.5 11.2884 16.1727 11.1877 15.8507L11.1519 15.7363L14.3662 10.323L14.8118 12.1794C13.1829 12.6855 12 14.2046 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.8966 18.3765 12.1724 16.3142 12.0122L14.4395 4.20066C15.5947 4.15838 16.4782 4.21094 17.078 4.35228C17.6121 4.47813 17.75 4.59459 17.75 4.67811C17.75 5.18897 17.51 5.34761 16.5749 5.25375C16.1628 5.21238 15.7951 5.51295 15.7537 5.9251C15.7124 6.33724 16.013 6.70488 16.4251 6.74625C18.1567 6.92006 19.25 6.19744 19.25 4.67811C19.25 2.97369 17.2603 2.49573 13.5094 2.74763C13.4582 2.74825 13.407 2.7537 13.3567 2.76375C13.3302 2.76887 13.3042 2.77537 13.2788 2.78317C12.9408 2.88486 12.6683 3.19872 12.7654 3.65171C12.768 3.66423 12.7709 3.67662 12.774 3.68888L13.9571 8.61839H8.92533L8.34087 6.75H9.5C9.91421 6.75 10.25 6.41421 10.25 6C10.25 5.58579 9.91421 5.25 9.5 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6C4.75 6.41421 5.08579 6.75 5.5 6.75H7.29308L8.12324 9.40383L6.69192 12.3744C6.17806 12.1342 5.6047 12 5 12C2.79086 12 1 13.7909 1 16C1 18.2091 2.79086 20 5 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 18.5C17.7091 18.5 19.5 16.7091 19.5 14.5C19.5 12.2909 17.7091 10.5 15.5 10.5C13.2909 10.5 11.5 12.2909 11.5 14.5C11.5 16.7091 13.2909 18.5 15.5 18.5ZM15.5 11.5C17.1569 11.5 18.5 12.8431 18.5 14.5C18.5 16.1569 17.1569 17.5 15.5 17.5C13.8431 17.5 12.5 16.1569 12.5 14.5C12.5 12.8431 13.8431 11.5 15.5 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 18.5C6.70914 18.5 8.5 16.7091 8.5 14.5C8.5 12.2909 6.70914 10.5 4.5 10.5C2.29086 10.5 0.5 12.2909 0.5 14.5C0.5 16.7091 2.29086 18.5 4.5 18.5ZM4.5 11.5C6.15685 11.5 7.5 12.8431 7.5 14.5C7.5 16.1569 6.15685 17.5 4.5 17.5C2.84315 17.5 1.5 16.1569 1.5 14.5C1.5 12.8431 2.84315 11.5 4.5 11.5Z" fill="black"/>
<path d="M5 5C4.72386 5 4.5 4.77614 4.5 4.5C4.5 4.22386 4.72386 4 5 4H9C9.27614 4 9.5 4.22386 9.5 4.5C9.5 4.77614 9.27614 5 9 5H5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4748 14.3433L10.4404 14.2392L14.4237 7.88405C14.6324 7.55105 14.393 7.11852 14 7.11852L8.08918 7.11852L7.17283 4.34335C7.08625 4.08113 6.80349 3.93875 6.54127 4.02534C6.27905 4.11192 6.13667 4.39468 6.22326 4.65689L7.29481 7.9021L4.05433 14.2735C3.88515 14.6061 4.12681 15.0001 4.5 15.0001H10C10.3407 15.0001 10.5816 14.6669 10.4748 14.3433ZM5.31525 14.0001H9.30835L7.73645 9.23962L5.31525 14.0001ZM8.41937 8.11852L10.0332 13.006L13.0965 8.11852H8.41937Z" fill="black"/>
<path d="M13.5441 2.99899C13.2689 3.02279 13.0266 2.81906 13.0028 2.54394C12.979 2.26883 13.1828 2.02651 13.4579 2.00271C17.1126 1.68654 19.001 2.0642 19.001 3.50085C19.001 4.76632 18.0928 5.44744 16.5178 5.50056C16.2418 5.50987 16.0106 5.29369 16.0013 5.0177C15.9919 4.74172 16.2081 4.51044 16.4841 4.50113C17.5758 4.46431 18.001 4.14544 18.001 3.50085C18.001 3.02744 16.556 2.73843 13.5441 2.99899Z" fill="black"/>
<path d="M13.9932 2.41771L15.9932 14.4177C16.1028 15.0753 15.1164 15.2397 15.0068 14.5821L13.0068 2.58211C12.8972 1.92451 13.8836 1.76011 13.9932 2.41771Z" fill="black"/>
</svg>
`;

const Bluetooth = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.7967L5.44351 16.6048C5.10949 16.8497 4.64014 16.7775 4.39519 16.4435C4.15023 16.1094 4.22244 15.6401 4.55647 15.3951L11.2317 10.5L4.55647 5.6048C4.22244 5.35985 4.15023 4.8905 4.39519 4.55647C4.64014 4.22245 5.10949 4.15024 5.44351 4.39519L12 9.20328L12 1.49995C12 1.08792 12.4704 0.852734 12.8 1.09995L18.8 5.59995C19.0667 5.79995 19.0667 6.19995 18.8 6.39995L13.3333 10.4999L18.8 14.5999C19.0667 14.7999 19.0667 15.1999 18.8 15.3999L12.8 19.8999C12.4704 20.1472 12 19.912 12 19.4999L12 11.7967Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2318 10.3975L16.8033 6.14748C17.0656 5.94737 17.0656 5.55251 16.8033 5.3524L11.2318 1.1024C10.9027 0.851366 10.4286 1.08604 10.4286 1.49994L10.4286 9.99994C10.4286 10.4138 10.9027 10.6485 11.2318 10.3975ZM11.4286 8.98966L11.4286 2.51022L15.6756 5.74994L11.4286 8.98966Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2318 18.8975L16.8033 14.6475C17.0656 14.4474 17.0656 14.0525 16.8033 13.8524L11.2318 9.6024C10.9027 9.35137 10.4286 9.58604 10.4286 9.99994L10.4286 18.4999C10.4286 18.9138 10.9027 19.1485 11.2318 18.8975ZM11.4286 11.0102L15.6756 14.2499L11.4286 17.4897L11.4286 11.0102Z" fill="black"/>
<path d="M11.2275 9.5991C11.4489 9.7642 11.4945 10.0775 11.3294 10.2988C11.1643 10.5202 10.851 10.5658 10.6296 10.4007L3.66534 5.20624C3.44399 5.04114 3.39839 4.72786 3.56349 4.50651C3.72859 4.28516 4.04187 4.23956 4.26322 4.40466L11.2275 9.5991Z" fill="black"/>
<path d="M11.2275 10.4008C11.4489 10.2357 11.4945 9.9224 11.3294 9.70104C11.1643 9.47969 10.851 9.43409 10.6296 9.59919L3.66534 14.7936C3.44399 14.9587 3.39839 15.272 3.56349 15.4934C3.72859 15.7147 4.04187 15.7603 4.26322 15.5952L11.2275 10.4008Z" fill="black"/>
</svg>
`;

const Book = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11 5.78986L18.3136 4.52084C18.3935 4.50697 18.4745 4.5 18.5556 4.5C19.357 4.5 20 5.164 20 5.97522V15.761C20 16.4819 19.489 17.1009 18.7868 17.2172L11.0817 18.4933C11.0203 18.5035 10.9599 18.502 10.9028 18.4907L3.25492 17.2241C2.53094 17.1042 2 16.4781 2 15.7443V6.01091C2 5.18248 2.67157 4.51091 3.5 4.51091C3.58596 4.51091 3.67175 4.5183 3.75644 4.53299L11 5.78986Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0809 4.30391L2.24258 3.01941C2.16239 3.00627 2.08126 2.99966 2 2.99966C1.17157 2.99966 0.5 3.67124 0.5 4.49966V14.2366C0.5 14.9755 1.03815 15.6043 1.7682 15.7185L9.92273 16.994C10.226 17.0414 10.5 16.8069 10.5 16.5V4.79733C10.5 4.5524 10.3226 4.34352 10.0809 4.30391ZM2.08086 4.00625L9.5 5.22206V15.9157L1.92273 14.7305C1.67938 14.6925 1.5 14.4829 1.5 14.2366V4.49966C1.5 4.22352 1.72386 3.99966 2 3.99966C2.02709 3.99966 2.05413 4.00187 2.08086 4.00625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.99966C17.9187 2.99966 17.8376 3.00627 17.7574 3.01941L9.91914 4.30391C9.67743 4.34352 9.5 4.5524 9.5 4.79733V16.5C9.5 16.8069 9.774 17.0414 10.0773 16.994L18.2318 15.7185C18.9619 15.6043 19.5 14.9755 19.5 14.2366V4.49966C19.5 3.67124 18.8284 2.99966 18 2.99966ZM18.0773 14.7305L10.5 15.9157V5.22206L17.9191 4.00625C17.9459 4.00187 17.9729 3.99966 18 3.99966C18.2761 3.99966 18.5 4.22352 18.5 4.49966V14.2366C18.5 14.4829 18.3206 14.6925 18.0773 14.7305Z" fill="black"/>
</svg>
`;

const Bookmark = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12 14.6764L7.35472 19.3524C7.04021 19.669 6.5 19.4462 6.5 19V5C6.5 4.72386 6.72386 4.5 7 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5V19C17.5 19.4462 16.9598 19.669 16.6453 19.3524L12 14.6764Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.35472 17.3524L10 12.6764L14.6453 17.3524C14.9598 17.669 15.5 17.4462 15.5 17V3C15.5 2.72386 15.2761 2.5 15 2.5H5C4.72386 2.5 4.5 2.72386 4.5 3V17C4.5 17.4462 5.04021 17.669 5.35472 17.3524ZM5.5 15.7872V3.5H14.5V15.7872L10.3547 11.6146C10.1592 11.4178 9.84081 11.4178 9.64528 11.6146L5.5 15.7872Z" fill="black"/>
</svg>
`;

const Building = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H7V6.30769C7 4.77168 8.10212 3.5 9.5 3.5H14.5C15.8979 3.5 17 4.77168 17 6.30769V18.25Z" fill="currentColor"/>
</g>
<path d="M2.5 18.5C2.22386 18.5 2 18.2761 2 18C2 17.7239 2.22386 17.5 2.5 17.5H18.5C18.7761 17.5 19 17.7239 19 18C19 18.2761 18.7761 18.5 18.5 18.5H2.5Z" fill="black"/>
<path d="M6.5 17.5C6.5 17.7761 6.27614 18 6 18C5.72386 18 5.5 17.7761 5.5 17.5V4.80769C5.5 3.27168 6.60212 2 8 2H13C14.3979 2 15.5 3.27168 15.5 4.80769V17.5C15.5 17.7761 15.2761 18 15 18C14.7239 18 14.5 17.7761 14.5 17.5V4.80769C14.5 3.7947 13.8113 3 13 3H8C7.18874 3 6.5 3.7947 6.5 4.80769V17.5Z" fill="black"/>
<path d="M8.5 4.5H9.5C9.77614 4.5 10 4.72386 10 5V6C10 6.27614 9.77614 6.5 9.5 6.5H8.5C8.22386 6.5 8 6.27614 8 6V5C8 4.72386 8.22386 4.5 8.5 4.5Z" fill="black"/>
<path d="M11.5 4.5H12.5C12.7761 4.5 13 4.72386 13 5V6C13 6.27614 12.7761 6.5 12.5 6.5H11.5C11.2239 6.5 11 6.27614 11 6V5C11 4.72386 11.2239 4.5 11.5 4.5Z" fill="black"/>
<path d="M11.5 7.5H12.5C12.7761 7.5 13 7.72386 13 8V9C13 9.27614 12.7761 9.5 12.5 9.5H11.5C11.2239 9.5 11 9.27614 11 9V8C11 7.72386 11.2239 7.5 11.5 7.5Z" fill="black"/>
<path d="M11.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11V12C13 12.2761 12.7761 12.5 12.5 12.5H11.5C11.2239 12.5 11 12.2761 11 12V11C11 10.7239 11.2239 10.5 11.5 10.5Z" fill="black"/>
<path d="M11.5 13.5H12.5C12.7761 13.5 13 13.7239 13 14V15C13 15.2761 12.7761 15.5 12.5 15.5H11.5C11.2239 15.5 11 15.2761 11 15V14C11 13.7239 11.2239 13.5 11.5 13.5Z" fill="black"/>
<path d="M8.5 7.5H9.5C9.77614 7.5 10 7.72386 10 8V9C10 9.27614 9.77614 9.5 9.5 9.5H8.5C8.22386 9.5 8 9.27614 8 9V8C8 7.72386 8.22386 7.5 8.5 7.5Z" fill="black"/>
<path d="M8.5 13.5H9.5C9.77614 13.5 10 13.7239 10 14V15C10 15.2761 9.77614 15.5 9.5 15.5H8.5C8.22386 15.5 8 15.2761 8 15V14C8 13.7239 8.22386 13.5 8.5 13.5Z" fill="black"/>
<path d="M8.5 10.5H9.5C9.77614 10.5 10 10.7239 10 11V12C10 12.2761 9.77614 12.5 9.5 12.5H8.5C8.22386 12.5 8 12.2761 8 12V11C8 10.7239 8.22386 10.5 8.5 10.5Z" fill="black"/>
</svg>
`;

const Calculator = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4 18.1053L4 3.89474C4 2.8483 4.86558 2 5.93333 2H16.5667C17.6344 2 18.5 2.8483 18.5 3.89474V18.1053C18.5 19.1517 17.6344 20 16.5667 20H5.93333C4.86558 20 4 19.1517 4 18.1053Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3V17C2.5 18.3807 3.61929 19.5 5 19.5H15C16.3807 19.5 17.5 18.3807 17.5 17V3C17.5 1.61929 16.3807 0.5 15 0.5H5C3.61929 0.5 2.5 1.61929 2.5 3ZM5 18.5C4.17157 18.5 3.5 17.8284 3.5 17V3C3.5 2.17157 4.17157 1.5 5 1.5H15C15.8284 1.5 16.5 2.17157 16.5 3V17C16.5 17.8284 15.8284 18.5 15 18.5H5Z" fill="black"/>
<path d="M5 7.5V3.5C5 3.22386 5.22386 3 5.5 3H14.5C14.7761 3 15 3.22386 15 3.5V7.5C15 7.77614 14.7761 8 14.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z" fill="black"/>
<path d="M12 15.7V10.8C12 10.3582 12.3582 10 12.8 10H14.2C14.6418 10 15 10.3582 15 10.8V15.7C15 16.1418 14.6418 16.5 14.2 16.5H12.8C12.3582 16.5 12 16.1418 12 15.7Z" fill="black"/>
<path d="M5 12V10.5C5 10.2239 5.22386 10 5.5 10H7C7.27614 10 7.5 10.2239 7.5 10.5V12C7.5 12.2761 7.27614 12.5 7 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z" fill="black"/>
<path d="M8.5 12V10.5C8.5 10.2239 8.72386 10 9 10H10.5C10.7761 10 11 10.2239 11 10.5V12C11 12.2761 10.7761 12.5 10.5 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z" fill="black"/>
<path d="M5 16V14.5C5 14.2239 5.22386 14 5.5 14H7C7.27614 14 7.5 14.2239 7.5 14.5V16C7.5 16.2761 7.27614 16.5 7 16.5H5.5C5.22386 16.5 5 16.2761 5 16Z" fill="black"/>
<path d="M8.5 16V14.5C8.5 14.2239 8.72386 14 9 14H10.5C10.7761 14 11 14.2239 11 14.5V16C11 16.2761 10.7761 16.5 10.5 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16Z" fill="black"/>
</svg>
`;

const Calendar = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="5" y="6" width="14" height="12" rx="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.5H3.5C3.22386 4.5 3 4.72386 3 5V16C3 16.2761 3.22386 16.5 3.5 16.5H16.5C16.7761 16.5 17 16.2761 17 16V5C17 4.72386 16.7761 4.5 16.5 4.5ZM4 15.5V5.5H16V15.5H4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.5H3.5C3.22386 4.5 3 4.72386 3 5V8C3 8.27614 3.22386 8.5 3.5 8.5H16.5C16.7761 8.5 17 8.27614 17 8V5C17 4.72386 16.7761 4.5 16.5 4.5ZM4 7.5V5.5H16V7.5H4Z" fill="black"/>
<path d="M5.5 5.5H6.5C6.77614 5.5 7 5.27614 7 5V4C7 3.72386 6.77614 3.5 6.5 3.5H5.5C5.22386 3.5 5 3.72386 5 4V5C5 5.27614 5.22386 5.5 5.5 5.5Z" fill="black"/>
<path d="M13.5 5.5H14.5C14.7761 5.5 15 5.27614 15 5V4C15 3.72386 14.7761 3.5 14.5 3.5H13.5C13.2239 3.5 13 3.72386 13 4V5C13 5.27614 13.2239 5.5 13.5 5.5Z" fill="black"/>
<path d="M6 11.5C5.44772 11.5 5 11.0523 5 10.5C5 9.94772 5.44772 9.5 6 9.5C6.55228 9.5 7 9.94772 7 10.5C7 11.0523 6.55228 11.5 6 11.5Z" fill="black"/>
</svg>
`;

const Camera = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.5H7C5.61929 6.5 4.5 7.61929 4.5 9V14C4.5 15.3807 5.61929 16.5 7 16.5H13C14.3807 16.5 15.5 15.3807 15.5 14V13.9759L17.8477 15.541C18.1799 15.7625 18.625 15.5243 18.625 15.125V8.125C18.625 7.72565 18.1799 7.48746 17.8477 7.70897L15.5 9.27408V9C15.5 7.61929 14.3807 6.5 13 6.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.5H5C3.61929 4.5 2.5 5.61929 2.5 7V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V7C13.5 5.61929 12.3807 4.5 11 4.5ZM3.5 7C3.5 6.17157 4.17157 5.5 5 5.5H11C11.8284 5.5 12.5 6.17157 12.5 7V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7275 5.58078L12.7507 7.5157C12.6104 7.60692 12.525 7.76231 12.5232 7.92968L12.4958 10.542C12.494 10.7131 12.5799 10.8732 12.7233 10.9665L15.7275 12.9192C16.0601 13.1354 16.5 12.8967 16.5 12.5V6C16.5 5.60328 16.0601 5.36457 15.7275 5.58078ZM15.5 11.5787L13.4987 10.2778L13.5204 8.20811L15.5 6.92134V11.5787Z" fill="black"/>
</svg>
`;

const Can = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M9 3H14C15.6667 3.66667 16.6667 4.66667 17 6V16C17 17.6569 15.6569 19 14 19H9C7.34315 19 6 17.6569 6 16V6C6.33333 4.66667 7.33333 3.66667 9 3Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2H7.5C5.83333 2.66667 4.83333 3.66667 4.5 5V15C4.5 16.6569 5.84315 18 7.5 18H12.5C14.1569 18 15.5 16.6569 15.5 15V5C15.1667 3.66667 14.1667 2.66667 12.5 2ZM5.5 15V5.13263C5.76428 4.2329 6.46901 3.52753 7.69872 3H12.3013C13.531 3.52753 14.2357 4.2329 14.5 5.13263V15C14.5 16.1046 13.6046 17 12.5 17H7.5C6.39543 17 5.5 16.1046 5.5 15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7 11.7091 8.79086 13.5 11 13.5C13.2091 13.5 15 11.7091 15 9.5C15 7.29086 13.2091 5.5 11 5.5C8.79086 5.5 7 7.29086 7 9.5ZM14 9.5C14 11.1569 12.6569 12.5 11 12.5C9.34315 12.5 8 11.1569 8 9.5C8 7.84315 9.34315 6.5 11 6.5C12.6569 6.5 14 7.84315 14 9.5Z" fill="black"/>
<path d="M12.074 6.50549L13.0605 6.66932C12.8934 7.67545 12.3874 8.60748 11.5554 9.45909C10.7241 10.3101 9.59116 10.9196 8.16632 11.2925L7.91317 10.325C9.17196 9.99565 10.1444 9.47247 10.8401 8.76028C11.5353 8.0487 11.9422 7.29921 12.074 6.50549Z" fill="black"/>
<path d="M13.342 7.61187C13.3008 7.3388 13.4889 7.08411 13.762 7.04301C14.035 7.0019 14.2897 7.18994 14.3308 7.46301C14.492 8.53379 14.3614 9.40881 13.9145 10.0712C13.3957 10.84 12.6016 11.2783 11.834 11.4795C11.7433 11.5033 11.6048 11.5346 11.3885 11.5813C11.2817 11.6043 10.8578 11.6945 10.7761 11.712C10.7206 11.7239 10.7206 11.7239 10.6653 11.7358C10.3994 11.7933 10.1986 11.8385 10.0432 11.8767C9.81481 11.9327 9.3984 12.0609 8.80309 12.259C8.54108 12.3462 8.25798 12.2045 8.17078 11.9425C8.08357 11.6805 8.22528 11.3974 8.48729 11.3102C9.10681 11.104 9.54295 10.9698 9.80484 10.9055C9.9714 10.8646 10.1799 10.8176 10.4542 10.7584C10.5103 10.7463 10.5103 10.7463 10.5665 10.7342C10.6495 10.7164 11.0726 10.6264 11.1777 10.6038C11.3794 10.5603 11.5089 10.5309 11.5805 10.5122C12.1353 10.3668 12.7303 10.0384 13.0855 9.51186C13.3752 9.08259 13.4689 8.45488 13.342 7.61187Z" fill="black"/>
</svg>
`;

const Car = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.27323 4.00237C6.54965 4.17438 5.98127 4.73371 5.79768 5.45445L4.60127 10.1512C3.68774 10.336 3 11.1434 3 12.1115V15C3 15.8061 3.4769 16.5008 4.16395 16.8174C4.05913 17.0222 4 17.2542 4 17.5V18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5V17.5C7 17.3247 6.96992 17.1564 6.91465 17H16.0854C16.0301 17.1564 16 17.3247 16 17.5V18.5C16 19.3284 16.6716 20 17.5 20C18.3284 20 19 19.3284 19 18.5V17.5C19 17.2542 18.9409 17.0222 18.836 16.8174C19.5231 16.5008 20 15.8061 20 15V12.1115C20 11.1434 19.3123 10.336 18.3987 10.1512L17.2023 5.45433C17.0187 4.73367 16.4504 4.17437 15.7269 4.00229C14.3193 3.66752 12.9103 3.5 11.5007 3.5C10.0911 3.5 8.68164 3.66755 7.27323 4.00237Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.29768 3.95445L3.10127 8.65122C2.18774 8.83604 1.5 9.64344 1.5 10.6115V13.5C1.5 14.6046 2.39543 15.5 3.5 15.5L16.5 15.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.6115C18.5 9.64344 17.8123 8.83604 16.8987 8.65122L15.7023 3.95433C15.5187 3.23367 14.9504 2.67437 14.2269 2.50229C12.8193 2.16752 11.4103 2 10.0007 2C8.59105 2 7.18164 2.16755 5.77323 2.50237C5.04965 2.67438 4.48127 3.23371 4.29768 3.95445ZM3.5 9.61147C3.72861 9.61147 3.9281 9.45643 3.98453 9.2349L5.26673 4.2013C5.35853 3.84093 5.64272 3.56126 6.00452 3.47525C7.33767 3.15832 8.66949 3 10.0007 3C11.3318 3 12.6632 3.15829 13.9955 3.47515C14.3573 3.56119 14.6414 3.84085 14.7332 4.20118L16.0155 9.2349C16.0719 9.45643 16.2714 9.61147 16.5 9.61147C17.0523 9.61147 17.5 10.0592 17.5 10.6115V13.5C17.5 14.0523 17.0523 14.5 16.5 14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V10.6115C2.5 10.0592 2.94772 9.61147 3.5 9.61147Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16C5.5 15.1716 4.82843 14.5 4 14.5C3.17157 14.5 2.5 15.1716 2.5 16V17C2.5 17.8284 3.17157 18.5 4 18.5C4.82843 18.5 5.5 17.8284 5.5 17V16ZM3.5 16C3.5 15.7239 3.72386 15.5 4 15.5C4.27614 15.5 4.5 15.7239 4.5 16V17C4.5 17.2761 4.27614 17.5 4 17.5C3.72386 17.5 3.5 17.2761 3.5 17V16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16V17C14.5 17.8284 15.1716 18.5 16 18.5C16.8284 18.5 17.5 17.8284 17.5 17V16ZM15.5 16C15.5 15.7239 15.7239 15.5 16 15.5C16.2761 15.5 16.5 15.7239 16.5 16V17C16.5 17.2761 16.2761 17.5 16 17.5C15.7239 17.5 15.5 17.2761 15.5 17V16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12C13.5 12.8284 14.1716 13.5 15 13.5ZM15 11.5C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 13.5C5.82843 13.5 6.5 12.8284 6.5 12C6.5 11.1716 5.82843 10.5 5 10.5C4.17157 10.5 3.5 11.1716 3.5 12C3.5 12.8284 4.17157 13.5 5 13.5ZM5 11.5C5.27614 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.27614 12.5 5 12.5C4.72386 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.72386 11.5 5 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6476 4.5H7.35208C6.66122 4.5 6.05972 4.97186 5.89522 5.64284L5.4049 7.64284C5.37625 7.75973 5.36176 7.87965 5.36176 8C5.36176 8.82843 6.03334 9.5 6.86176 9.5H13.1379C13.2582 9.5 13.3782 9.48552 13.495 9.45686C14.2996 9.2596 14.792 8.44744 14.5947 7.64284L14.1044 5.64284C13.9399 4.97186 13.3384 4.5 12.6476 4.5ZM6.86646 5.88095C6.92129 5.65729 7.12179 5.5 7.35208 5.5H12.6476C12.8779 5.5 13.0784 5.65729 13.1332 5.88095L13.6235 7.88095C13.6893 8.14915 13.5251 8.41987 13.2569 8.48562C13.218 8.49517 13.178 8.5 13.1379 8.5H6.86176C6.58562 8.5 6.36176 8.27614 6.36176 8C6.36176 7.95988 6.36659 7.91991 6.37614 7.88095L6.86646 5.88095Z" fill="black"/>
</svg>
`;

const Cart = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21893 2.75H4.2C3.78579 2.75 3.45 2.41421 3.45 2C3.45 1.58579 3.78579 1.25 4.2 1.25H5.80284C6.14621 1.25 6.44573 1.48319 6.52994 1.81608L8.03184 7.7535C8.19308 7.66344 8.36948 7.59443 8.5583 7.55091C8.70507 7.51708 8.85517 7.5 9.00574 7.5H16.9946C18.1032 7.5 19 8.40519 19 9.51948C19 9.67043 18.9832 9.82091 18.9499 9.96809L18.1669 13.4291C17.9591 14.3474 17.1482 15 16.2115 15H9.78879C8.85212 15 8.04122 14.3474 7.83348 13.4291L7.05044 9.96809C7.0395 9.91977 7.03039 9.87144 7.02305 9.8232C7.00217 9.77935 6.98527 9.73281 6.9729 9.68392L5.21893 2.75ZM9.25 18.5C10.2165 18.5 11 17.7165 11 16.75C11 15.7835 10.2165 15 9.25 15C8.2835 15 7.5 15.7835 7.5 16.75C7.5 17.7165 8.2835 18.5 9.25 18.5ZM16.25 18.5C17.2165 18.5 18 17.7165 18 16.75C18 15.7835 17.2165 15 16.25 15C15.2835 15 14.5 15.7835 14.5 16.75C14.5 17.7165 15.2835 18.5 16.25 18.5Z" fill="currentColor"/>
</g>
<path d="M3.71231 2.5L2.5 2.5C2.22386 2.5 2 2.27614 2 2C2 1.72386 2.22386 1.5 2.5 1.5L4.10284 1.5C4.33234 1.5 4.53237 1.65624 4.58795 1.8789L6.48511 9.4789C6.55199 9.74682 6.38902 10.0182 6.1211 10.0851C5.85318 10.152 5.58177 9.98902 5.51489 9.7211L3.71231 2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4946 7.5H7.50575C7.35517 7.5 7.20507 7.51708 7.0583 7.55091C5.97851 7.79979 5.30478 8.88231 5.55044 9.96809L6.33348 13.4291C6.54122 14.3474 7.35212 15 8.28879 15H14.7115C15.6482 15 16.4591 14.3474 16.6669 13.4291L17.4499 9.96809C17.4832 9.82091 17.5 9.67043 17.5 9.51948C17.5 8.40519 16.6032 7.5 15.4946 7.5ZM7.2829 8.52536C7.35602 8.5085 7.43077 8.5 7.50575 8.5H15.4946C16.0488 8.5 16.5 8.9554 16.5 9.51948C16.5 9.5962 16.4915 9.67266 16.4745 9.74743L15.6915 13.2085C15.5865 13.6724 15.1795 14 14.7115 14H8.28879C7.82086 14 7.41379 13.6724 7.30883 13.2085L6.52579 9.74743C6.40125 9.19696 6.74158 8.65013 7.2829 8.52536Z" fill="black"/>
<path d="M17 16.75C17 17.7165 16.2165 18.5 15.25 18.5C14.2835 18.5 13.5 17.7165 13.5 16.75C13.5 15.7835 14.2835 15 15.25 15C16.2165 15 17 15.7835 17 16.75Z" fill="black"/>
<path d="M10 16.75C10 17.7165 9.2165 18.5 8.25 18.5C7.2835 18.5 6.5 17.7165 6.5 16.75C6.5 15.7835 7.2835 15 8.25 15C9.2165 15 10 15.7835 10 16.75Z" fill="black"/>
</svg>
`;

const Checkmark = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8699 17.1228L17.8112 8.22845C18.7825 6.48013 16.1601 5.0232 15.1888 6.77152L11.0509 14.2197L7.43705 11.3287C5.87531 10.0793 4.00122 12.4219 5.56296 13.6713L10.4686 17.5958C10.524 17.6454 10.5829 17.6914 10.6446 17.7332C11.0317 18.0105 11.4337 18.0749 11.7947 17.9963C12.1586 17.9321 12.5062 17.7201 12.7591 17.3167C12.8004 17.2546 12.8375 17.1897 12.8699 17.1228Z" fill="currentColor"/>
</g>
<path d="M14.9371 5.74286L9.93707 14.7429C9.61331 15.3256 8.73916 14.84 9.06292 14.2572L14.0629 5.25721C14.3867 4.67444 15.2608 5.16009 14.9371 5.74286Z" fill="black"/>
<path d="M4.81235 10.1097L9.81235 14.1097C10.3329 14.5261 9.70823 15.307 9.18765 14.8905L4.18765 10.8905C3.66707 10.4741 4.29177 9.6932 4.81235 10.1097Z" fill="black"/>
</svg>
`;

const Circle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="6" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z" fill="black"/>
</svg>
`;

const Clipboard = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14.75 5.23333H17C17.2761 5.23333 17.5 5.45719 17.5 5.73333V17C17.5 17.2761 17.2761 17.5 17 17.5H6C5.72386 17.5 5.5 17.2761 5.5 17V5.73333C5.5 5.45719 5.72386 5.23333 6 5.23333H8.25V4C8.25 3.72386 8.47386 3.5 8.75 3.5H14.25C14.5261 3.5 14.75 3.72386 14.75 4V5.23333Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.25H6C5.72386 2.25 5.5 2.47386 5.5 2.75V5.75C5.5 6.02614 5.72386 6.25 6 6.25H13C13.2761 6.25 13.5 6.02614 13.5 5.75V2.75C13.5 2.47386 13.2761 2.25 13 2.25ZM6.5 5.25V3.25H12.5V5.25H6.5Z" fill="black"/>
<path d="M14.5 4.5H12.9926V3.5H15C15.2761 3.5 15.5 3.72386 15.5 4V16C15.5 16.2761 15.2761 16.5 15 16.5H4C3.72386 16.5 3.5 16.2761 3.5 16V4C3.5 3.72386 3.72386 3.5 4 3.5H6.01025V4.5H4.5V15.5H14.5V4.5Z" fill="black"/>
</svg>
`;

const Clock = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="7" fill="currentColor"/>
<path d="M10.1354 12.3796C9.92573 12.5593 9.61008 12.5351 9.43037 12.3254C9.25066 12.1157 9.27494 11.8001 9.4846 11.6204L12.9846 8.62038C13.1943 8.44067 13.5099 8.46495 13.6896 8.67461C13.8693 8.88428 13.8451 9.19993 13.6354 9.37964L10.1354 12.3796Z" fill="black"/>
<path d="M9.31 6C9.31 5.72386 9.53386 5.5 9.81 5.5C10.0861 5.5 10.31 5.72386 10.31 6V12C10.31 12.2761 10.0861 12.5 9.81 12.5C9.53386 12.5 9.31 12.2761 9.31 12V6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="black"/>
</svg>
`;

const Cloud = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
</svg>
`;

const CloudDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
<path d="M9 10C9 9.72386 9.22386 9.5 9.5 9.5C9.77614 9.5 10 9.72386 10 10L10 17.5C10 17.7761 9.77614 18 9.5 18C9.22386 18 9 17.7761 9 17.5V10Z" fill="black"/>
<path d="M11.6876 15.1095C11.9033 14.937 12.2179 14.972 12.3904 15.1876C12.5629 15.4033 12.528 15.7179 12.3123 15.8904L9.81234 17.8904C9.59671 18.0629 9.28207 18.028 9.10956 17.8123C8.93706 17.5967 8.97202 17.2821 9.18765 17.1095L11.6876 15.1095Z" fill="black"/>
<path d="M6.68765 15.8904C6.47202 15.7179 6.43706 15.4033 6.60956 15.1876C6.78207 14.972 7.09671 14.937 7.31234 15.1095L9.81234 17.1095C10.028 17.2821 10.0629 17.5967 9.89043 17.8123C9.71793 18.028 9.40328 18.0629 9.18765 17.8904L6.68765 15.8904Z" fill="black"/>
</svg>
`;

const CloudUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
<path d="M10 16.5C10 16.7761 9.77614 17 9.5 17C9.22386 17 9 16.7761 9 16.5V9C9 8.72386 9.22386 8.5 9.5 8.5C9.77614 8.5 10 8.72386 10 9V16.5Z" fill="black"/>
<path d="M7.31234 11.3905C7.0967 11.563 6.78206 11.528 6.60955 11.3124C6.43705 11.0967 6.47201 10.7821 6.68764 10.6096L9.18764 8.60958C9.40327 8.43708 9.71792 8.47204 9.89042 8.68767C10.0629 8.9033 10.028 9.21795 9.81234 9.39045L7.31234 11.3905Z" fill="black"/>
<path d="M12.3123 10.6096C12.528 10.7821 12.5629 11.0967 12.3904 11.3124C12.2179 11.528 11.9033 11.563 11.6876 11.3905L9.18764 9.39045C8.97201 9.21795 8.93705 8.9033 9.10955 8.68767C9.28206 8.47204 9.5967 8.43708 9.81234 8.60958L12.3123 10.6096Z" fill="black"/>
</svg>
`;

const Coctail = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 18.0241V12.9271L18.8664 6.34023C19.1635 6.0203 18.9366 5.5 18.5 5.5H5.5C5.06342 5.5 4.83653 6.0203 5.1336 6.34023L11.25 12.9271V18.0241C9.1328 18.1626 7.5 18.8897 7.5 20H16.5C16.5 18.8897 14.8672 18.1626 12.75 18.0241Z" fill="currentColor"/>
</g>
<path d="M6 8C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H14C14.2761 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.2761 8 14 8H6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.13361 5.34023L9.63361 12.3402C9.83142 12.5533 10.1686 12.5533 10.3664 12.3402L16.8664 5.34023C17.1635 5.0203 16.9366 4.5 16.5 4.5L3.5 4.5C3.06342 4.5 2.83653 5.0203 3.13361 5.34023ZM4.64661 5.5L15.3534 5.5L10 11.2652L4.64661 5.5Z" fill="black"/>
<path d="M9.5 11.875H10.5L10.625 12V18L10.5 18.125H9.5L9.375 18V12L9.5 11.875Z" fill="black"/>
<path d="M14.5 20H5.5C5.5 18.5251 7.55015 17.5 10 17.5C12.4499 17.5 14.5 18.5251 14.5 20Z" fill="black"/>
<path d="M12.8787 1.56669C12.6108 1.49971 12.448 1.22825 12.5149 0.960348C12.5819 0.69245 12.8534 0.52957 13.1213 0.596544L17.1213 1.59654C17.3892 1.66352 17.552 1.93499 17.4851 2.20288C17.4181 2.47078 17.1466 2.63366 16.8787 2.56669L12.8787 1.56669Z" fill="black"/>
<path d="M10.2031 9.74651C10.1086 10.006 9.82165 10.1398 9.56217 10.0453C9.3027 9.9508 9.16893 9.66387 9.26341 9.40439L12.356 0.910556C12.4505 0.651077 12.7374 0.517316 12.9969 0.611791C13.2563 0.706266 13.3901 0.993202 13.2956 1.25268L10.2031 9.74651Z" fill="black"/>
</svg>
`;

const ColorPicker = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M17.9277 3.76777C18.904 4.74409 18.7457 6.48529 17.5741 7.65686L8.59932 16.6317C8.5026 16.7284 8.39037 16.8076 8.26958 16.8642C7.89323 17.0409 7.50719 17.2555 6.59243 17.7851C6.13999 18.047 5.9403 18.1616 5.69637 18.2979C4.02272 19.2327 3.40316 19.4773 2.81068 18.8848C2.21916 18.2933 2.46329 17.6732 3.39243 16.0084C3.52991 15.762 3.6457 15.5603 3.91039 15.103C4.43992 14.1883 4.65456 13.8022 4.83121 13.4259C4.88791 13.3051 4.96706 13.1929 5.06378 13.0961L14.0386 4.12133C15.2102 2.94976 16.9514 2.79146 17.9277 3.76777Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3241 6.71747C17.3004 5.74116 17.3004 4.15825 16.3241 3.18194C15.3478 2.20563 13.7649 2.20563 12.7886 3.18194L3.81377 12.1568L3.70235 12.3265C3.53711 12.7444 3.33628 13.1544 2.83667 14.1244C1.58212 16.56 1.38156 17.0592 1.91422 17.5918C2.44688 18.1245 2.94605 17.9239 5.38168 16.6694C6.35163 16.1698 6.76163 15.969 7.17958 15.8037L7.34931 15.6923L16.3241 6.71747ZM15.617 3.88905C16.2028 4.47483 16.2028 5.42458 15.617 6.01037L6.71449 14.9129C6.28794 15.087 5.85619 15.3001 4.92377 15.7804C3.97452 16.2693 3.57257 16.4667 3.15837 16.6331C2.98658 16.7021 2.84068 16.7521 2.7234 16.7827C2.75396 16.6654 2.80393 16.5195 2.87295 16.3477C3.03938 15.9335 3.23673 15.5315 3.72567 14.5823C4.20595 13.6499 4.41909 13.2181 4.59317 12.7916L13.4957 3.88905C14.0815 3.30326 15.0312 3.30326 15.617 3.88905Z" fill="black"/>
<path d="M9.85102 3.82413C9.65576 3.62887 9.65576 3.31229 9.85102 3.11703C10.0463 2.92177 10.3629 2.92177 10.5581 3.11703L16.215 8.77388C16.4102 8.96914 16.4102 9.28573 16.215 9.48099C16.0197 9.67625 15.7031 9.67625 15.5079 9.48099L9.85102 3.82413Z" fill="black"/>
</svg>
`;

const Contract = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13 5.5H17C17.2761 5.5 17.5 5.72386 17.5 6V10C17.5 10.2761 17.2761 10.5 17 10.5H13C12.7239 10.5 12.5 10.2761 12.5 10V6C12.5 5.72386 12.7239 5.5 13 5.5Z" fill="currentColor"/>
<path d="M7 11H11C11.5523 11 12 11.4477 12 12V16C12 16.5523 11.5523 17 11 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11Z" fill="currentColor"/>
</g>
<path d="M5.35355 15.3536C5.15829 15.5488 4.84171 15.5488 4.64645 15.3536C4.45118 15.1583 4.45118 14.8417 4.64645 14.6464L8.64645 10.6464C8.84171 10.4512 9.15829 10.4512 9.35355 10.6464C9.54882 10.8417 9.54882 11.1583 9.35355 11.3536L5.35355 15.3536Z" fill="black"/>
<path d="M9.5 15C9.5 15.2761 9.27614 15.5 9 15.5C8.72386 15.5 8.5 15.2761 8.5 15V11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11V15Z" fill="black"/>
<path d="M5 11.5C4.72386 11.5 4.5 11.2761 4.5 11C4.5 10.7239 4.72386 10.5 5 10.5H9C9.27614 10.5 9.5 10.7239 9.5 11C9.5 11.2761 9.27614 11.5 9 11.5H5Z" fill="black"/>
<path d="M11.3536 9.35355C11.1583 9.54882 10.8417 9.54882 10.6464 9.35355C10.4512 9.15829 10.4512 8.84171 10.6464 8.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L11.3536 9.35355Z" fill="black"/>
<path d="M11 9.5C10.7239 9.5 10.5 9.27614 10.5 9C10.5 8.72386 10.7239 8.5 11 8.5H15C15.2761 8.5 15.5 8.72386 15.5 9C15.5 9.27614 15.2761 9.5 15 9.5H11Z" fill="black"/>
<path d="M11.5 9C11.5 9.27614 11.2761 9.5 11 9.5C10.7239 9.5 10.5 9.27614 10.5 9V5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5V9Z" fill="black"/>
</svg>
`;

const Controller = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 6.5H15.5C17.9853 6.5 20 8.51472 20 11V13C20 15.4853 17.9853 17.5 15.5 17.5H6.5C4.01472 17.5 2 15.4853 2 13V11C2 8.51472 4.01472 6.5 6.5 6.5Z" fill="currentColor"/>
</g>
<path d="M12.25 10C11.5596 10 11 9.44036 11 8.75C11 8.05964 11.5596 7.5 12.25 7.5C12.9404 7.5 13.5 8.05964 13.5 8.75C13.5 9.44036 12.9404 10 12.25 10Z" fill="black"/>
<path d="M14.25 12.5C13.5596 12.5 13 11.9404 13 11.25C13 10.5596 13.5596 10 14.25 10C14.9404 10 15.5 10.5596 15.5 11.25C15.5 11.9404 14.9404 12.5 14.25 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 4.5H5.5C3.01472 4.5 1 6.51472 1 9V11C1 13.4853 3.01472 15.5 5.5 15.5H14.5C16.9853 15.5 19 13.4853 19 11V9C19 6.51472 16.9853 4.5 14.5 4.5ZM2 9C2 7.067 3.567 5.5 5.5 5.5H14.5C16.433 5.5 18 7.067 18 9V11C18 12.933 16.433 14.5 14.5 14.5H5.5C3.567 14.5 2 12.933 2 11V9Z" fill="black"/>
<path d="M4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H4Z" fill="black"/>
<path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V12Z" fill="black"/>
</svg>
`;

const CreditCard = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 6.5H17.5C18.8807 6.5 20 7.61929 20 9V16C20 17.3807 18.8807 18.5 17.5 18.5H5.5C4.11929 18.5 3 17.3807 3 16V9C3 7.61929 4.11929 6.5 5.5 6.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5H4C2.61929 4.5 1.5 5.61929 1.5 7V14C1.5 15.3807 2.61929 16.5 4 16.5H16C17.3807 16.5 18.5 15.3807 18.5 14V7C18.5 5.61929 17.3807 4.5 16 4.5ZM2.5 7C2.5 6.17157 3.17157 5.5 4 5.5H16C16.8284 5.5 17.5 6.17157 17.5 7V14C17.5 14.8284 16.8284 15.5 16 15.5H4C3.17157 15.5 2.5 14.8284 2.5 14V7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7H17.5C17.7761 7 18 7.22386 18 7.5V8.5C18 8.77614 17.7761 9 17.5 9H2.5C2.22386 9 2 8.77614 2 8.5V7.5C2 7.22386 2.22386 7 2.5 7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10H5C4.44772 10 4 10.4477 4 11V12C4 12.5523 4.44772 13 5 13H6C6.55228 13 7 12.5523 7 12V11C7 10.4477 6.55228 10 6 10ZM5 12V11H6V12H5Z" fill="black"/>
</svg>
`;

const Cup = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 16H16.5C17.0523 16 17.5 16.4477 17.5 17C17.5 17.5523 17.0523 18 16.5 18H5.5C4.94772 18 4.5 17.5523 4.5 17C4.5 16.4477 4.94772 16 5.5 16Z" fill="currentColor"/>
<path d="M17.4778 7.20915C18.6708 7.59201 19.5 8.46066 19.5 9.5C19.5 10.9284 17.9501 12 16.1073 12C16.0589 12 16.0107 11.9993 15.9627 11.9978C14.7459 13.8773 12.9524 15 11 15C7.37379 15 4.5 11.1683 4.5 6.5C4.5 6.22386 4.72386 6 5 6H17C17.2761 6 17.5 6.22386 17.5 6.5C17.5 6.7377 17.4926 6.97422 17.4778 7.20915Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5C2.5 9.66828 5.37379 13.5 9 13.5C12.6262 13.5 15.5 9.66828 15.5 5C15.5 4.72386 15.2761 4.5 15 4.5ZM14.4879 5.5C14.2977 9.43156 11.8802 12.5 9 12.5C6.11981 12.5 3.70234 9.43156 3.51206 5.5H14.4879Z" fill="black"/>
<path d="M13.8622 10.3289L14.1378 9.36761C14.4407 9.45444 14.7687 9.5 15.1073 9.5C16.4597 9.5 17.5 8.78072 17.5 8C17.5 7.21928 16.4597 6.5 15.1073 6.5V5.5C16.9501 5.5 18.5 6.57158 18.5 8C18.5 9.42842 16.9501 10.5 15.1073 10.5C14.676 10.5 14.2552 10.4416 13.8622 10.3289Z" fill="black"/>
<path d="M3.5 14.75H14.5C14.9142 14.75 15.25 15.0858 15.25 15.5C15.25 15.9142 14.9142 16.25 14.5 16.25H3.5C3.08579 16.25 2.75 15.9142 2.75 15.5C2.75 15.0858 3.08579 14.75 3.5 14.75Z" fill="black"/>
</svg>
`;

const Division = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 12.5C5.67157 12.5 5 11.8284 5 11C5 10.1716 5.67157 9.5 6.5 9.5H16.5C17.3284 9.5 18 10.1716 18 11C18 11.8284 17.3284 12.5 16.5 12.5H6.5Z" fill="currentColor"/>
<circle cx="11" cy="7" r="2" fill="currentColor"/>
<circle cx="11" cy="15" r="2" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6C8.5 6.82843 9.17157 7.5 10 7.5C10.8284 7.5 11.5 6.82843 11.5 6C11.5 5.17157 10.8284 4.5 10 4.5C9.17157 4.5 8.5 5.17157 8.5 6ZM10.5 6C10.5 6.27614 10.2761 6.5 10 6.5C9.72386 6.5 9.5 6.27614 9.5 6C9.5 5.72386 9.72386 5.5 10 5.5C10.2761 5.5 10.5 5.72386 10.5 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 14C8.5 14.8284 9.17157 15.5 10 15.5C10.8284 15.5 11.5 14.8284 11.5 14C11.5 13.1716 10.8284 12.5 10 12.5C9.17157 12.5 8.5 13.1716 8.5 14ZM10.5 14C10.5 14.2761 10.2761 14.5 10 14.5C9.72386 14.5 9.5 14.2761 9.5 14C9.5 13.7239 9.72386 13.5 10 13.5C10.2761 13.5 10.5 13.7239 10.5 14Z" fill="black"/>
</svg>
`;

const DotsX = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 13C5.67157 13 5 12.3284 5 11.5C5 10.6716 5.67157 10 6.5 10H17.5C18.3284 10 19 10.6716 19 11.5C19 12.3284 18.3284 13 17.5 13H6.5Z" fill="currentColor"/>
</g>
<path d="M14 10.25C14 9.55964 14.5596 9 15.25 9C15.5814 9 15.8993 9.13173 16.1335 9.36618C16.3678 9.60063 16.4993 9.91857 16.499 10.25C16.4993 10.5814 16.3678 10.8994 16.1335 11.1338C15.8993 11.3683 15.5814 11.5 15.25 11.5C14.9185 11.5 14.6005 11.3683 14.3661 11.1339C14.1317 10.8995 14 10.5815 14 10.25H14Z" fill="black"/>
<path d="M9 10.25C9 9.55964 9.55964 9 10.25 9C10.9404 9 11.5 9.55964 11.5 10.25C11.5 10.9404 10.9404 11.5 10.25 11.5C9.55964 11.5 9 10.9404 9 10.25H9Z" fill="black"/>
<path d="M4 10.25C3.99973 9.9184 4.13135 9.6003 4.36582 9.36582C4.6003 9.13135 4.9184 8.99973 5.25 9C5.94036 9 6.5 9.55964 6.5 10.25C6.5 10.9404 5.94036 11.5 5.25 11.5C4.9184 11.5003 4.6003 11.3687 4.36582 11.1342C4.13135 10.8997 3.99973 10.5816 4 10.25H4Z" fill="black"/>
</svg>
`;

const DotsY = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5L14 17.5C14 18.3284 13.3284 19 12.5 19C11.6716 19 11 18.3284 11 17.5L11 6.5Z" fill="currentColor"/>
</g>
<path d="M9 15.25C9 14.5596 9.55964 14 10.25 14C10.5814 14 10.8993 14.1317 11.1335 14.3662C11.3678 14.6006 11.4993 14.9186 11.499 15.25C11.4993 15.5814 11.3678 15.8994 11.1335 16.1338C10.8993 16.3683 10.5814 16.5 10.25 16.5C9.91848 16.5 9.60054 16.3683 9.36612 16.1339C9.1317 15.8995 9 15.5815 9 15.25H9Z" fill="black"/>
<path d="M9 10.25C9 9.55964 9.55964 9 10.25 9C10.9404 9 11.5 9.55964 11.5 10.25C11.5 10.9404 10.9404 11.5 10.25 11.5C9.55964 11.5 9 10.9404 9 10.25H9Z" fill="black"/>
<path d="M9 5.25C8.99973 4.9184 9.13135 4.6003 9.36582 4.36582C9.6003 4.13135 9.9184 3.99973 10.25 4C10.9404 4 11.5 4.55964 11.5 5.25C11.5 5.94036 10.9404 6.5 10.25 6.5C9.9184 6.50027 9.6003 6.36866 9.36582 6.13418C9.13135 5.8997 8.99973 5.5816 9 5.25H9Z" fill="black"/>
</svg>
`;

const Dress = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5369 0.8076C14.1545 0.648426 13.7155 0.829394 13.5563 1.2118L12.35 4.10993C11.9475 4.00207 11.5101 4.00605 11.0846 4.1455L10.9999 4.17325L10.9156 4.14561C10.6054 4.04395 10.2767 4.01186 9.95275 4.05162C9.84916 4.06433 9.74811 4.08398 9.65001 4.11004L8.44231 1.21155C8.28299 0.8292 7.84389 0.648392 7.46154 0.807705C7.07919 0.967018 6.89838 1.40612 7.05769 1.78847L8.30769 4.78847C8.33521 4.8545 8.37106 4.91452 8.41353 4.96782C8.10234 5.40433 7.94722 5.95405 8.01767 6.52807L8.13236 7.46266C8.20459 8.05129 8.45059 8.58048 8.81514 9.00134C8.31895 9.01612 7.83367 9.15382 7.40309 9.40272C5.80865 10.3244 4.62921 11.3608 3.86476 12.5119C3.61888 12.8821 3.36958 13.2199 3.13669 13.5354C2.1223 14.9096 1.41938 15.8618 2.66806 17.2402C4.20342 18.935 7.45634 20 10.6485 20C13.8406 20 17.0206 19.3723 19.0847 17.2402C20.6128 15.6618 19.9778 14.9581 18.9898 13.8632C18.6432 13.4791 18.2532 13.0469 17.8979 12.5119C17.104 11.3164 15.9187 10.2745 14.3422 9.3863C13.9812 9.1829 13.583 9.05704 13.1729 9.01537C13.5441 8.59226 13.7948 8.05785 13.8679 7.46266L13.9826 6.52807C14.0223 6.20413 13.9902 5.8754 13.8886 5.56526C13.8168 5.34608 13.7141 5.14564 13.587 4.96718C13.6293 4.91397 13.665 4.85409 13.6924 4.78822L14.9411 1.78822C15.1003 1.40581 14.9193 0.966774 14.5369 0.8076Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0846 3.14548L9.99993 3.17323L9.9156 3.14559C9.60545 3.04394 9.27671 3.01185 8.95275 3.0516C7.73454 3.2011 6.86817 4.30984 7.01767 5.52805L7.13236 6.46265C7.31014 7.91138 8.54051 9 10.0001 9C11.4597 9 12.6901 7.91138 12.8679 6.46265L12.9826 5.52805C13.0223 5.20411 12.9902 4.87539 12.8886 4.56524C12.5063 3.39889 11.251 2.76324 10.0846 3.14548ZM9.07455 4.04416C9.25274 4.02229 9.43355 4.03994 9.60414 4.09585L9.99991 4.22557L10.396 4.09575C11.0376 3.88551 11.7281 4.23513 11.9383 4.87667C11.9942 5.04726 12.0119 5.22807 11.99 5.40625L11.8753 6.34084C11.7591 7.28816 10.9545 8 10.0001 8C9.04569 8 8.24116 7.28816 8.12491 6.34084L8.01022 5.40625C7.928 4.73621 8.40451 4.12638 9.07455 4.04416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8696 8L7.90444 8.00001C7.3773 8.00001 6.85947 8.13891 6.40309 8.40272C4.80865 9.32437 3.62921 10.3608 2.86476 11.5119C2.61888 11.8821 2.36958 12.2199 2.13669 12.5354C1.1223 13.9096 0.419383 14.8618 1.66806 16.2402C3.20342 17.935 6.45634 19 9.64848 19C12.8406 19 16.0206 18.3723 18.0847 16.2402C19.6128 14.6618 18.9778 13.958 17.9898 12.8632C17.6432 12.4791 17.2532 12.0469 16.8979 11.5119C16.104 10.3164 14.9187 9.27454 13.3422 8.3863C12.8927 8.13305 12.3855 8 11.8696 8ZM6.90354 9.26848C7.20779 9.09261 7.55301 9.00001 7.90444 9.00001L11.8696 9C12.2136 9 12.5517 9.0887 12.8514 9.25753C14.2975 10.0723 15.3641 11.0099 16.0648 12.0651C16.2313 12.3157 16.4108 12.5565 16.6103 12.8011C16.6332 12.8291 16.716 12.9236 16.8296 13.0533C17.1712 13.4432 17.7914 14.1513 17.8985 14.326C18.0925 14.6424 18.0488 14.8396 17.3663 15.5446C15.7285 17.2363 13.1097 18 9.64848 18C6.65197 18 3.70161 16.9954 2.40917 15.5688C2.02828 15.1483 1.9535 14.9033 2.02458 14.626C2.08114 14.4053 2.23125 14.1252 2.51751 13.7138C2.55413 13.6612 2.67316 13.4979 2.8206 13.2957C3.07602 12.9453 3.41668 12.4781 3.56171 12.2666C3.60821 12.1989 3.65349 12.1318 3.69779 12.0651C4.36984 11.0531 5.43432 10.1178 6.90354 9.26848Z" fill="black"/>
<path d="M6.53576 1.18571C6.4332 0.929314 6.55791 0.638329 6.8143 0.535773C7.0707 0.433216 7.36168 0.557924 7.46424 0.814316L8.46424 3.31432C8.56679 3.57071 8.44209 3.86169 8.18569 3.96425C7.9293 4.06681 7.63832 3.9421 7.53576 3.68571L6.53576 1.18571Z" fill="black"/>
<path d="M12.5358 0.814316C12.6383 0.557924 12.9293 0.433216 13.1857 0.535773C13.4421 0.638329 13.5668 0.929314 13.4642 1.18571L12.4642 3.68571C12.3617 3.9421 12.0707 4.06681 11.8143 3.96425C11.5579 3.86169 11.4332 3.57071 11.5358 3.31432L12.5358 0.814316Z" fill="black"/>
<path d="M9.5 11.5C9.5 11.2239 9.72386 11 10 11C10.2761 11 10.5 11.2239 10.5 11.5V15.5C10.5 15.7761 10.2761 16 10 16C9.72386 16 9.5 15.7761 9.5 15.5V11.5Z" fill="black"/>
<path d="M7.08397 11.2227C7.23715 10.9929 7.54759 10.9308 7.77735 11.084C8.00711 11.2372 8.0692 11.5476 7.91603 11.7774L5.91602 14.7774C5.76285 15.0071 5.45241 15.0692 5.22265 14.916C4.99289 14.7629 4.9308 14.4524 5.08397 14.2227L7.08397 11.2227Z" fill="black"/>
<path d="M12.916 11.2227C12.7628 10.9929 12.4524 10.9308 12.2227 11.084C11.9929 11.2372 11.9308 11.5476 12.084 11.7774L14.084 14.7774C14.2372 15.0071 14.5476 15.0692 14.7774 14.916C15.0071 14.7629 15.0692 14.4524 14.916 14.2227L12.916 11.2227Z" fill="black"/>
</svg>
`;

const Duplicate = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M15 9H17C17.5523 9 18 9.44772 18 10V17C18 17.5523 17.5523 18 17 18H10C9.44772 18 9 17.5523 9 17V15H7C6.44772 15 6 14.5523 6 14V7C6 6.44772 6.44772 6 7 6H14C14.5523 6 15 6.44772 15 7V9Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V15C7.5 15.2761 7.72386 15.5 8 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V8C15.5 7.72386 15.2761 7.5 15 7.5ZM8.5 14.5V8.5H14.5V14.5H8.5Z" fill="black"/>
<path d="M5.5 11.5H8.5V12.5H5C4.72386 12.5 4.5 12.2761 4.5 12V5C4.5 4.72386 4.72386 4.5 5 4.5H12C12.2761 4.5 12.5 4.72386 12.5 5V8.5H11.5V5.5H5.5V11.5Z" fill="black"/>
</svg>
`;

const Electricity = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.1868 10H16C16.4644 10 16.6779 10.578 16.325 10.8799L11.3667 15.1213L6.34323 19.8636C5.95334 20.2317 5.33617 19.8112 5.53603 19.3136L8.47391 12H6C5.64104 12 5.39903 11.633 5.54043 11.303L8.54043 4.30304C8.61922 4.1192 8.79999 4 9 4H14C14.359 4 14.601 4.36703 14.4596 4.69696L12.1868 10Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.5H11.1868L13.4596 3.19696C13.601 2.86703 13.359 2.5 13 2.5H8C7.79999 2.5 7.61922 2.6192 7.54043 2.80304L4.54043 9.80304C4.39903 10.133 4.64104 10.5 5 10.5H7.47391L4.53603 17.8136C4.33617 18.3112 4.95334 18.7317 5.34323 18.3636L10.3667 13.6213L15.325 9.37993C15.6779 9.078 15.4644 8.5 15 8.5ZM10.4286 9.5H13.6465L9.69839 12.8778L6.31274 16.0734L8.67756 10.1864C8.80953 9.85784 8.56764 9.5 8.21359 9.5H5.75827L8.3297 3.5H12.2417L9.969 8.80304C9.8276 9.13297 10.0696 9.5 10.4286 9.5Z" fill="black"/>
</svg>
`;

const Exclamation = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="7" fill="currentColor"/>
<path d="M9.5 6.5C9.5 6.22386 9.72386 6 10 6C10.2761 6 10.5 6.22386 10.5 6.5V11.5C10.5 11.7761 10.2761 12 10 12C9.72386 12 9.5 11.7761 9.5 11.5V6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="black"/>
<circle cx="10" cy="13.75" r="0.75" fill="black"/>
</svg>
`;

const Expand = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13 5H17C17.5523 5 18 5.44772 18 6V10C18 10.5523 17.5523 11 17 11H13C12.4477 11 12 10.5523 12 10V6C12 5.44772 12.4477 5 13 5Z" fill="currentColor"/>
<path d="M7 11H11C11.5523 11 12 11.4477 12 12V16C12 16.5523 11.5523 17 11 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11Z" fill="currentColor"/>
</g>
<path d="M11.3536 9.35355C11.1583 9.54882 10.8417 9.54882 10.6464 9.35355C10.4512 9.15829 10.4512 8.84171 10.6464 8.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L11.3536 9.35355Z" fill="black"/>
<path d="M5.35355 15.3536C5.15829 15.5488 4.84171 15.5488 4.64645 15.3536C4.45118 15.1583 4.45118 14.8417 4.64645 14.6464L8.64645 10.6464C8.84171 10.4512 9.15829 10.4512 9.35355 10.6464C9.54882 10.8417 9.54882 11.1583 9.35355 11.3536L5.35355 15.3536Z" fill="black"/>
<path d="M5 15.5C4.72386 15.5 4.5 15.2761 4.5 15C4.5 14.7239 4.72386 14.5 5 14.5H9C9.27614 14.5 9.5 14.7239 9.5 15C9.5 15.2761 9.27614 15.5 9 15.5H5Z" fill="black"/>
<path d="M5.5 15C5.5 15.2761 5.27614 15.5 5 15.5C4.72386 15.5 4.5 15.2761 4.5 15V11C4.5 10.7239 4.72386 10.5 5 10.5C5.27614 10.5 5.5 10.7239 5.5 11V15Z" fill="black"/>
<path d="M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9V5C14.5 4.72386 14.7239 4.5 15 4.5C15.2761 4.5 15.5 4.72386 15.5 5V9Z" fill="black"/>
<path d="M11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H11Z" fill="black"/>
</svg>
`;

const Eye = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10 3.94772 10.4477 3.5 11 3.5C11.5523 3.5 12 3.94772 12 4.5V6.53241C12.5606 6.56898 13.107 6.63604 13.634 6.73128L14.0194 4.80388C14.1278 4.26232 14.6546 3.91111 15.1961 4.01942C15.7377 4.12773 16.0889 4.65456 15.9806 5.19612L15.5722 7.23826C16.0866 7.41912 16.569 7.63048 17.0123 7.86926L18.1425 5.9855C18.4267 5.51192 19.0409 5.35836 19.5145 5.64251C19.9881 5.92666 20.1417 6.54092 19.8575 7.0145L18.6414 9.04137C19.5003 9.87952 20 10.8859 20 12C20 15.1922 15.8972 17.5 11 17.5C6.10285 17.5 2.00003 15.1922 2.00003 12C2.00003 10.8859 2.49979 9.87952 3.35866 9.04137L2.14254 7.0145C1.85839 6.54092 2.01195 5.92666 2.48553 5.64251C2.95911 5.35836 3.57337 5.51192 3.85752 5.9855L4.98777 7.86926C5.43107 7.63048 5.91349 7.41912 6.42788 7.23826L6.01945 5.19612C5.91114 4.65456 6.26235 4.12773 6.80391 4.01942C7.34547 3.91111 7.8723 4.26232 7.98061 4.80388L8.36609 6.73128C8.89305 6.63604 9.43949 6.56898 10 6.53241V4.5ZM7.99948 8.85479C5.61088 9.44952 4.00003 10.7098 4.00003 12C4.00003 13.7784 7.06065 15.5 11 15.5C14.9394 15.5 18 13.7784 18 12C18 10.7098 16.3892 9.44952 14.0006 8.85479C14.6226 9.55985 15 10.4859 15 11.5C15 13.7091 13.2092 15.5 11 15.5C8.79089 15.5 7.00003 13.7091 7.00003 11.5C7.00003 10.4859 7.37745 9.55985 7.99948 8.85479Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C14.6577 16 18.5 13.8387 18.5 11C18.5 8.16128 14.6577 6 10 6C5.34227 6 1.5 8.16128 1.5 11C1.5 13.8387 5.34227 16 10 16ZM10 7C14.1788 7 17.5 8.86816 17.5 11C17.5 13.1318 14.1788 15 10 15C5.82117 15 2.5 13.1318 2.5 11C2.5 8.86816 5.82117 7 10 7Z" fill="black"/>
<path d="M9.5 3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5L10.5 6.5C10.5 6.77614 10.2761 7 10 7C9.72386 7 9.5 6.77614 9.5 6.5L9.5 3.5Z" fill="black"/>
<path d="M13.5097 3.90192C13.5639 3.63114 13.8273 3.45553 14.0981 3.50968C14.3689 3.56384 14.5445 3.82725 14.4903 4.09803L13.9903 6.59803C13.9362 6.86881 13.6728 7.04442 13.402 6.99026C13.1312 6.93611 12.9556 6.6727 13.0097 6.40192L13.5097 3.90192Z" fill="black"/>
<path d="M6.49032 3.90192C6.43616 3.63114 6.17275 3.45553 5.90197 3.50968C5.63119 3.56384 5.45558 3.82725 5.50974 4.09803L6.00974 6.59803C6.06389 6.86881 6.3273 7.04442 6.59808 6.99026C6.86886 6.93611 7.04447 6.6727 6.99032 6.40192L6.49032 3.90192Z" fill="black"/>
<path d="M2.42873 5.24271C2.28666 5.00592 1.97953 4.92913 1.74274 5.07121C1.50595 5.21328 1.42916 5.52041 1.57124 5.7572L3.07124 8.2572C3.21331 8.49399 3.52044 8.57077 3.75723 8.4287C3.99402 8.28663 4.07081 7.9795 3.92873 7.74271L2.42873 5.24271Z" fill="black"/>
<path d="M17.5713 5.24271C17.7133 5.00592 18.0205 4.92913 18.2573 5.07121C18.4941 5.21328 18.5708 5.52041 18.4288 5.7572L16.9288 8.2572C16.7867 8.49399 16.4796 8.57077 16.2428 8.4287C16.006 8.28663 15.9292 7.9795 16.0713 7.74271L17.5713 5.24271Z" fill="black"/>
<path d="M13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5C11.6569 7.5 13 8.84315 13 10.5Z" fill="black"/>
</svg>
`;

const EyeClosed = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.91662 8.91032C2.46807 9.23254 2.36566 9.85737 2.68788 10.3059C2.88621 10.582 3.11912 10.8444 3.38335 11.0914L2.25999 12.3274C1.88853 12.7361 1.91872 13.3685 2.32742 13.74C2.73612 14.1115 3.36857 14.0813 3.74002 13.6726L5.04237 12.2397C5.49676 12.4749 5.9873 12.6798 6.50619 12.8521L6.02986 14.7574C5.89592 15.2932 6.22168 15.8362 6.75747 15.9701C7.29327 16.1041 7.8362 15.7783 7.97015 15.2425L8.45007 13.3228C8.95377 13.4037 9.47216 13.4577 10 13.4831V15.5C10 16.0523 10.4477 16.5 11 16.5C11.5523 16.5 12 16.0523 12 15.5V13.4424C12.5215 13.3956 13.0314 13.3207 13.5246 13.2193L13.5301 13.2425L14.0301 15.2425C14.1641 15.7783 14.707 16.1041 15.2428 15.9701C15.7786 15.8362 16.1043 15.2932 15.9704 14.7574L15.4704 12.7574C15.4619 12.7234 15.4517 12.6902 15.44 12.6579C15.8733 12.4883 16.283 12.2945 16.664 12.0782L18.2929 13.7071C18.6834 14.0976 19.3166 14.0976 19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929L18.2666 10.8523C18.4334 10.6769 18.5851 10.4946 18.7207 10.3059C19.0429 9.85737 18.9405 9.23254 18.492 8.91032C18.0434 8.5881 17.4186 8.69052 17.0964 9.13906C16.7925 9.56205 16.3238 9.96553 15.7168 10.3159C14.4234 11.0625 12.6315 11.5 10.7043 11.5C8.7771 11.5 6.98518 11.0625 5.6918 10.3159C5.08478 9.96553 4.61607 9.56205 4.31221 9.13906C3.99 8.69052 3.36517 8.5881 2.91662 8.91032Z" fill="currentColor"/>
</g>
<path d="M2.09395 8.01418C1.93285 7.78991 1.98405 7.4775 2.20833 7.31639C2.4326 7.15528 2.74501 7.20648 2.90612 7.43076C3.25413 7.91522 3.77652 8.36491 4.44183 8.74895C5.8148 9.54147 7.69284 10 9.70429 10C11.7157 10 13.5938 9.54147 14.9668 8.74895C15.6321 8.36491 16.1544 7.91522 16.5025 7.43076C16.6636 7.20648 16.976 7.15528 17.2003 7.31639C17.4245 7.4775 17.4757 7.78991 17.3146 8.01418C16.8783 8.62157 16.2486 9.16369 15.4667 9.61501C13.9345 10.4994 11.8843 11 9.70429 11C7.52432 11 5.47404 10.4994 3.9419 9.61501C3.16003 9.16369 2.53028 8.62157 2.09395 8.01418Z" fill="black"/>
<path d="M10.5 11C10.5 10.7239 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.7239 9.5 11L9.5 13.5C9.5 13.7761 9.72386 14 10 14C10.2761 14 10.5 13.7761 10.5 13.5L10.5 11Z" fill="black"/>
<path d="M6.00968 10.4019C6.06384 10.1311 6.32725 9.95553 6.59803 10.0097C6.86881 10.0638 7.04442 10.3273 6.99026 10.598L6.49026 13.098C6.43611 13.3688 6.1727 13.5444 5.90192 13.4903C5.63114 13.4361 5.45553 13.1727 5.50968 12.9019L6.00968 10.4019Z" fill="black"/>
<path d="M13.9904 10.4019C13.9362 10.1311 13.6728 9.95553 13.402 10.0097C13.1312 10.0638 12.9556 10.3273 13.0098 10.598L13.5098 13.098C13.564 13.3688 13.8274 13.5444 14.0981 13.4903C14.3689 13.4361 14.5445 13.1727 14.4904 12.9019L13.9904 10.4019Z" fill="black"/>
<path d="M16.3536 8.64645C16.1583 8.45118 15.8417 8.45118 15.6464 8.64645C15.4512 8.84171 15.4512 9.15829 15.6464 9.35355L17.6464 11.3536C17.8417 11.5488 18.1583 11.5488 18.3536 11.3536C18.5488 11.1583 18.5488 10.8417 18.3536 10.6464L16.3536 8.64645Z" fill="black"/>
<path d="M3.44776 8.66371C3.63349 8.45936 3.94971 8.44426 4.15406 8.62999C4.35841 8.81572 4.3735 9.13195 4.18777 9.3363L2.37001 11.3363C2.18428 11.5406 1.86806 11.5557 1.66371 11.37C1.45936 11.1843 1.44426 10.8681 1.62999 10.6637L3.44776 8.66371Z" fill="black"/>
</svg>
`;

const EyeOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10 3.94772 10.4477 3.5 11 3.5C11.5523 3.5 12 3.94772 12 4.5V6.53241C12.5606 6.56898 13.107 6.63604 13.634 6.73128L14.0194 4.80388C14.1278 4.26232 14.6546 3.91111 15.1961 4.01942C15.7377 4.12773 16.0889 4.65456 15.9806 5.19612L15.5722 7.23826C16.0866 7.41912 16.569 7.63048 17.0123 7.86926L18.1425 5.9855C18.4267 5.51192 19.0409 5.35836 19.5145 5.64251C19.9881 5.92666 20.1417 6.54092 19.8575 7.0145L18.6414 9.04137C19.5003 9.87952 20 10.8859 20 12C20 15.1922 15.8972 17.5 11 17.5C6.10285 17.5 2.00003 15.1922 2.00003 12C2.00003 10.8859 2.49979 9.87952 3.35866 9.04137L2.14254 7.0145C1.85839 6.54092 2.01195 5.92666 2.48553 5.64251C2.95911 5.35836 3.57337 5.51192 3.85752 5.9855L4.98777 7.86926C5.43107 7.63048 5.91349 7.41912 6.42788 7.23826L6.01945 5.19612C5.91114 4.65456 6.26235 4.12773 6.80391 4.01942C7.34547 3.91111 7.8723 4.26232 7.98061 4.80388L8.36609 6.73128C8.89305 6.63604 9.43949 6.56898 10 6.53241V4.5ZM7.99948 8.85479C5.61088 9.44952 4.00003 10.7098 4.00003 12C4.00003 13.7784 7.06065 15.5 11 15.5C14.9394 15.5 18 13.7784 18 12C18 10.7098 16.3892 9.44952 14.0006 8.85479C14.6226 9.55985 15 10.4859 15 11.5C15 13.7091 13.2092 15.5 11 15.5C8.79089 15.5 7.00003 13.7091 7.00003 11.5C7.00003 10.4859 7.37745 9.55985 7.99948 8.85479Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C14.6577 16 18.5 13.8387 18.5 11C18.5 8.16128 14.6577 6 10 6C5.34227 6 1.5 8.16128 1.5 11C1.5 13.8387 5.34227 16 10 16ZM10 7C14.1788 7 17.5 8.86816 17.5 11C17.5 13.1318 14.1788 15 10 15C5.82117 15 2.5 13.1318 2.5 11C2.5 8.86816 5.82117 7 10 7Z" fill="black"/>
<path d="M9.5 3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5L10.5 6.5C10.5 6.77614 10.2761 7 10 7C9.72386 7 9.5 6.77614 9.5 6.5L9.5 3.5Z" fill="black"/>
<path d="M13.5097 3.90192C13.5638 3.63114 13.8273 3.45553 14.098 3.50968C14.3688 3.56384 14.5444 3.82725 14.4903 4.09803L13.9903 6.59803C13.9361 6.86881 13.6727 7.04442 13.4019 6.99026C13.1311 6.93611 12.9555 6.6727 13.0097 6.40192L13.5097 3.90192Z" fill="black"/>
<path d="M6.49032 3.90192C6.43616 3.63114 6.17275 3.45553 5.90197 3.50968C5.63119 3.56384 5.45558 3.82725 5.50974 4.09803L6.00974 6.59803C6.06389 6.86881 6.3273 7.04442 6.59808 6.99026C6.86886 6.93611 7.04447 6.6727 6.99032 6.40192L6.49032 3.90192Z" fill="black"/>
<path d="M2.42873 5.24271C2.28666 5.00592 1.97953 4.92913 1.74274 5.07121C1.50595 5.21328 1.42916 5.52041 1.57124 5.7572L3.07124 8.2572C3.21331 8.49399 3.52044 8.57077 3.75723 8.4287C3.99402 8.28663 4.07081 7.9795 3.92873 7.74271L2.42873 5.24271Z" fill="black"/>
<path d="M17.5713 5.24271C17.7133 5.00592 18.0205 4.92913 18.2573 5.07121C18.4941 5.21328 18.5708 5.52041 18.4288 5.7572L16.9288 8.2572C16.7867 8.49399 16.4796 8.57077 16.2428 8.4287C16.006 8.28663 15.9292 7.9795 16.0713 7.74271L17.5713 5.24271Z" fill="black"/>
<path d="M13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5C11.6569 7.5 13 8.84315 13 10.5Z" fill="black"/>
<path d="M17.6117 17.6548C17.8023 17.8545 17.795 18.171 17.5952 18.3617C17.3955 18.5523 17.079 18.545 16.8883 18.3452L1.13832 1.84524C0.947653 1.64549 0.955014 1.32899 1.15476 1.13832C1.35451 0.947653 1.67101 0.955014 1.86168 1.15476L17.6117 17.6548Z" fill="black"/>
</svg>
`;

const File = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 2L13.1854 2C13.6056 2 14.0065 2.17624 14.2906 2.48582L18.6052 7.18761C18.8591 7.46433 19 7.82623 19 8.20179V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V3.5C5 2.67157 5.67157 2 6.5 2Z" fill="currentColor"/>
</g>
<path d="M6.5 11C6.22386 11 6 10.7761 6 10.5C6 10.2239 6.22386 10 6.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H6.5Z" fill="black"/>
<path d="M6.5 14C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H13.5C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14H6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1854 1H4.5C3.67157 1 3 1.67157 3 2.5V17.5C3 18.3284 3.67157 19 4.5 19H15.5C16.3284 19 17 18.3284 17 17.5V7.20179C17 6.82623 16.8591 6.46433 16.6052 6.18761L12.2906 1.48582C12.0065 1.17624 11.6056 1 11.1854 1ZM4 2.5C4 2.22386 4.22386 2 4.5 2H11.1854C11.3255 2 11.4591 2.05875 11.5538 2.16194L15.8684 6.86373C15.953 6.95597 16 7.0766 16 7.20179V17.5C16 17.7761 15.7761 18 15.5 18H4.5C4.22386 18 4 17.7761 4 17.5V2.5Z" fill="black"/>
<path d="M11 7H16.5C16.7761 7 17 7.22386 17 7.5C17 7.77614 16.7761 8 16.5 8H10.5C10.2239 8 10 7.77614 10 7.5V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V7Z" fill="black"/>
</svg>
`;

const FilmFrame = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M2 6.5C2 5.94772 2.44772 5.5 3 5.5H19C19.5523 5.5 20 5.94772 20 6.5V18.5C20 19.0523 19.5523 19.5 19 19.5H3C2.44772 19.5 2 19.0523 2 18.5V6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C1.44772 3 1 3.44772 1 4V16C1 16.5523 1.44772 17 2 17H18C18.5523 17 19 16.5523 19 16V4C19 3.44772 18.5523 3 18 3H2ZM15.5 4.5H16.5C16.7761 4.5 17 4.72386 17 5V6C17 6.27614 16.7761 6.5 16.5 6.5H15.5C15.2239 6.5 15 6.27614 15 6V5C15 4.72386 15.2239 4.5 15.5 4.5ZM16.5 7.5H15.5C15.2239 7.5 15 7.72386 15 8V9C15 9.27614 15.2239 9.5 15.5 9.5H16.5C16.7761 9.5 17 9.27614 17 9V8C17 7.72386 16.7761 7.5 16.5 7.5ZM15.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11V12C17 12.2761 16.7761 12.5 16.5 12.5H15.5C15.2239 12.5 15 12.2761 15 12V11C15 10.7239 15.2239 10.5 15.5 10.5ZM16.5 13.5H15.5C15.2239 13.5 15 13.7239 15 14V15C15 15.2761 15.2239 15.5 15.5 15.5H16.5C16.7761 15.5 17 15.2761 17 15V14C17 13.7239 16.7761 13.5 16.5 13.5ZM3.5 4.5H4.5C4.77614 4.5 5 4.72386 5 5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V5C3 4.72386 3.22386 4.5 3.5 4.5ZM4.5 7.5H3.5C3.22386 7.5 3 7.72386 3 8V9C3 9.27614 3.22386 9.5 3.5 9.5H4.5C4.77614 9.5 5 9.27614 5 9V8C5 7.72386 4.77614 7.5 4.5 7.5ZM3.5 10.5H4.5C4.77614 10.5 5 10.7239 5 11V12C5 12.2761 4.77614 12.5 4.5 12.5H3.5C3.22386 12.5 3 12.2761 3 12V11C3 10.7239 3.22386 10.5 3.5 10.5ZM4.5 13.5H3.5C3.22386 13.5 3 13.7239 3 14V15C3 15.2761 3.22386 15.5 3.5 15.5H4.5C4.77614 15.5 5 15.2761 5 15V14C5 13.7239 4.77614 13.5 4.5 13.5ZM6.5 16V4H13.5V16H6.5Z" fill="black"/>
</svg>
`;

const Flag = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.99957 4.97042L8.95446 4.57383C9.89482 4.22847 10.9329 4.24798 11.8622 4.63236L13.3435 5.24505C14.199 5.59892 15.1508 5.64505 16.0366 5.37556L16.9296 5.10387C17.7769 4.84609 18.6728 5.32399 18.9306 6.1713C18.9766 6.32261 19 6.4799 19 6.63806V10.6997C19 11.8707 18.3646 12.9495 17.3405 13.5173L16.6064 13.9244C15.3998 14.5935 13.9335 14.5935 12.7269 13.9244L12.2731 13.6728C11.0665 13.0037 9.60021 13.0037 8.39359 13.6728L8.16667 13.7986C8.1121 13.8288 8.05644 13.8552 8 13.8778V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.81074 4 7.99957 4.97042 7.99957 4.97042Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80448 2.63238L6.16667 2.89619C4.85526 3.43861 4 4.7179 4 6.13705V10.5225C4 10.7701 4.06299 11.0136 4.18304 11.2301C4.57382 11.9349 5.46192 12.1894 6.16667 11.7986L6.39359 11.6728C7.60021 11.0037 9.06646 11.0037 10.2731 11.6728L10.7269 11.9244C11.9335 12.5935 13.3998 12.5935 14.6064 11.9244L15.3405 11.5174C16.3646 10.9495 17 9.87068 17 8.69967V4.63808C17 4.47992 16.9766 4.32263 16.9306 4.17132C16.6728 3.32401 15.7769 2.8461 14.9296 3.10389L14.0366 3.37558C13.1508 3.64506 12.199 3.59893 11.3435 3.24506L9.86219 2.63238C8.88317 2.22744 7.78349 2.22744 6.80448 2.63238ZM5 6.13705C5 5.12254 5.6114 4.20802 6.54888 3.82026L7.18669 3.55645C7.92095 3.25275 8.74571 3.25275 9.47998 3.55645L10.9613 4.16914C12.0307 4.61148 13.2205 4.66914 14.3277 4.33228L15.2207 4.06059C15.5396 3.96356 15.8768 4.14345 15.9739 4.46238C15.9912 4.51934 16 4.57854 16 4.63808V8.69967C16 9.50723 15.5618 10.2512 14.8556 10.6428L14.1215 11.0499C13.2165 11.5517 12.1168 11.5517 11.2119 11.0499L10.758 10.7982C9.24974 9.96189 7.41693 9.96189 5.90865 10.7982L5.68173 10.9241C5.45999 11.047 5.18055 10.9669 5.05759 10.7452C5.01982 10.6771 5 10.6004 5 10.5225V6.13705Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17V3C4 2.44772 4.44772 2 5 2Z" fill="black"/>
</svg>
`;

const Flower = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9577 3.70271L14.8853 3.78196C14.5511 4.14683 14.3446 4.35528 14.1748 4.49015C13.9784 4.23554 13.6887 3.84808 13.6936 3.8544C13.4051 3.48043 13.165 3.20924 12.9195 3.00194C12.619 2.74817 12.3212 2.60174 12 2.60174C11.8313 2.60174 11.6672 2.64406 11.5086 2.72103C11.122 2.90864 10.798 3.26211 10.3638 3.86885C10.3094 3.94496 10.1721 4.14131 10.0899 4.25879L10.0269 4.34878C9.98779 4.40411 9.95266 4.45293 9.92077 4.4962L9.90489 4.48417C9.72623 4.3472 9.51116 4.13846 9.15613 3.76687L9.08747 3.69487C8.55371 3.13443 8.40866 2.98816 8.18558 2.80638C8.00393 2.65837 7.84702 2.56272 7.67667 2.52097C7.34592 2.43991 7.0295 2.60022 6.90938 2.93114C6.64016 3.67283 6.5 4.46989 6.5 5.28809C6.5 8.66894 8.19597 11.074 11.1655 11.4489C11.0609 11.6069 11 11.7963 11 12V15.7721C10.6014 15.2998 10.1289 14.8326 9.61094 14.398C7.92618 12.9843 5.83957 12.594 4.90256 13.7107C3.96555 14.8274 4.71224 16.8145 6.397 18.2282C8.00906 19.5809 10.6602 20.2761 11.7674 19.4728C11.8328 19.4884 11.9007 19.4975 11.9704 19.4996C13.0994 20.2603 15.7087 19.5655 17.3025 18.2282C18.9873 16.8145 19.734 14.8274 18.797 13.7107C17.8599 12.594 15.7733 12.9843 14.0886 14.398C13.6953 14.7279 13.3284 15.0766 13 15.4321V12C13 11.7963 12.9391 11.6069 12.8346 11.4489C15.804 11.074 17.5 8.66894 17.5 5.28809C17.5 4.46989 17.3599 3.67283 17.0906 2.93114C16.9711 2.60183 16.6556 2.43776 16.3239 2.52196C16.1538 2.56515 16.0002 2.66253 15.8231 2.8129C15.6085 2.99518 15.4743 3.13653 14.9577 3.70271Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9577 2.70271L12.8853 2.78196C12.5511 3.14683 12.3446 3.35528 12.1748 3.49015C11.9784 3.23554 11.6887 2.84808 11.6936 2.8544C11.4051 2.48043 11.165 2.20924 10.9195 2.00194C10.619 1.74817 10.3212 1.60174 10 1.60174C9.83135 1.60174 9.66724 1.64406 9.50862 1.72103C9.12201 1.90864 8.798 2.26211 8.36383 2.86885C8.30938 2.94494 8.17213 3.14122 8.08998 3.2587C8.05753 3.3051 8.03368 3.33921 8.02692 3.34878C7.98778 3.40411 7.95265 3.45293 7.92076 3.4962L7.90489 3.48417C7.72623 3.3472 7.51115 3.13846 7.15613 2.76687L7.08746 2.69487C6.55371 2.13443 6.40865 1.98816 6.18557 1.80638C6.00392 1.65837 5.84702 1.56272 5.67667 1.52097C5.34592 1.43991 5.02949 1.60022 4.90937 1.93114C4.64015 2.67283 4.5 3.46989 4.5 4.28809C4.5 7.97398 6.51581 10.5 10 10.5C13.4842 10.5 15.5 7.97398 15.5 4.28809C15.5 3.46989 15.3598 2.67283 15.0906 1.93114C14.9711 1.60183 14.6556 1.43776 14.3239 1.52196C14.1538 1.56515 14.0002 1.66253 13.8231 1.8129C13.6085 1.99518 13.4742 2.13653 12.9577 2.70271ZM5.5 4.28809C5.5 3.74768 5.57105 3.21929 5.70851 2.71616C5.84152 2.83956 6.01414 3.01788 6.36332 3.38453L6.43309 3.45768C6.82398 3.86681 7.06306 4.09885 7.29648 4.27779C7.7511 4.62631 8.16971 4.74941 8.52019 4.34902C8.61368 4.24222 8.71072 4.11375 8.84336 3.92621C8.85158 3.91458 8.87876 3.87571 8.91467 3.82437C8.9976 3.70578 9.12709 3.52063 9.17706 3.45079C9.51365 2.98042 9.76183 2.70968 9.94521 2.62069C9.97484 2.60631 9.99258 2.60174 10 2.60174C10.0387 2.60174 10.1373 2.65022 10.2743 2.76597C10.4531 2.91693 10.6532 3.14297 10.9018 3.46524C10.8697 3.42366 11.4473 4.19598 11.5813 4.34902C11.9329 4.75066 12.3526 4.62516 12.7943 4.27514C13.0202 4.09616 13.2515 3.86269 13.6227 3.45736L13.6965 3.37669C14.0099 3.03318 14.1737 2.85605 14.2965 2.73475C14.4307 3.2323 14.5 3.75433 14.5 4.28809C14.5 7.46499 12.876 9.49999 10 9.49999C7.12397 9.49999 5.5 7.46499 5.5 4.28809Z" fill="black"/>
<path d="M9.5 11C9.5 10.7239 9.72386 10.5 10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0886 13.398C10.114 15.0548 8.80192 17.1841 9.71244 18.2692C10.6408 19.3756 13.571 18.6811 15.3025 17.2282C16.9873 15.8145 17.734 13.8274 16.797 12.7107C15.8599 11.594 13.7733 11.9843 12.0886 13.398ZM14.6597 16.4622C13.2968 17.6058 10.9315 18.1663 10.4785 17.6264C10.115 17.1932 11.1789 15.4667 12.7314 14.164C14.0493 13.0582 15.5479 12.7779 16.0309 13.3535C16.5139 13.9291 15.9776 15.3563 14.6597 16.4622Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.61094 13.398C9.58547 15.0548 10.8976 17.1841 9.98706 18.2692C9.05874 19.3756 6.1285 18.6811 4.397 17.2282C2.71224 15.8145 1.96554 13.8274 2.90255 12.7107C3.83956 11.594 5.92617 11.9843 7.61094 13.398ZM5.03979 16.4622C6.40267 17.6058 8.768 18.1663 9.22102 17.6264C9.58452 17.1932 8.52056 15.4667 6.96815 14.164C5.65026 13.0582 4.15159 12.7779 3.6686 13.3535C3.1856 13.9291 3.72189 15.3563 5.03979 16.4622Z" fill="black"/>
</svg>
`;

const FlowerBud = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1559 7.80414C18.7548 7.97683 20 9.34178 20 11C20 12.6582 18.7548 14.0232 17.1559 14.1959C17.2775 14.5362 17.3438 14.9031 17.3438 15.2857C17.3438 17.0609 15.9167 18.5 14.1562 18.5C13.0475 18.5 12.0711 17.9292 11.5 17.0631C10.9289 17.9292 9.95245 18.5 8.84375 18.5C7.08334 18.5 5.65625 17.0609 5.65625 15.2857C5.65625 14.9031 5.72253 14.5362 5.84415 14.1959C4.24521 14.0232 3 12.6582 3 11C3 9.34178 4.24521 7.97683 5.84415 7.80414C5.72253 7.46383 5.65625 7.09686 5.65625 6.71429C5.65625 4.93909 7.08334 3.5 8.84375 3.5C9.95245 3.5 10.9289 4.07081 11.5 4.9369C12.0711 4.07081 13.0475 3.5 14.1563 3.5C15.9167 3.5 17.3438 4.93909 17.3438 6.71429C17.3438 7.09686 17.2775 7.46383 17.1559 7.80414Z" fill="currentColor"/>
</g>
<path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9436 13.3714C17.4272 12.9576 18.5 11.5957 18.5 10C18.5 8.40432 17.4272 7.04239 15.9436 6.62862C15.981 6.42276 16 6.21259 16 6C16 4.067 14.433 2.5 12.5 2.5C11.541 2.5 10.6476 2.889 10 3.55019C9.35243 2.889 8.45901 2.5 7.5 2.5C5.567 2.5 4 4.067 4 6C4 6.21259 4.01902 6.42276 4.05638 6.62862C2.57281 7.04239 1.5 8.40432 1.5 10C1.5 11.5957 2.57281 12.9576 4.05638 13.3714C4.01902 13.5772 4 13.7874 4 14C4 15.933 5.567 17.5 7.5 17.5C8.45901 17.5 9.35243 17.111 10 16.4498C10.6476 17.111 11.541 17.5 12.5 17.5C14.433 17.5 16 15.933 16 14C16 13.7874 15.981 13.5772 15.9436 13.3714ZM14.8528 6.84769C14.7429 7.15259 14.9477 7.47985 15.2699 7.51436C16.5325 7.64958 17.5 8.71964 17.5 10C17.5 11.2804 16.5325 12.3504 15.2699 12.4856C14.9477 12.5202 14.7429 12.8474 14.8528 13.1523C14.9498 13.4215 15 13.707 15 14C15 15.3807 13.8807 16.5 12.5 16.5C11.6522 16.5 10.8773 16.0753 10.4164 15.3821C10.2185 15.0845 9.78147 15.0845 9.58363 15.3821C9.1227 16.0753 8.3478 16.5 7.5 16.5C6.11929 16.5 5 15.3807 5 14C5 13.707 5.05022 13.4215 5.14723 13.1523C5.25711 12.8474 5.05234 12.5202 4.73009 12.4856C3.46751 12.3504 2.5 11.2804 2.5 10C2.5 8.71964 3.46751 7.64958 4.73009 7.51436C5.05234 7.47985 5.25711 7.15259 5.14723 6.84769C5.05022 6.57848 5 6.29304 5 6C5 4.61929 6.11929 3.5 7.5 3.5C8.3478 3.5 9.1227 3.9247 9.58363 4.61794C9.78147 4.91549 10.2185 4.91549 10.4164 4.61794C10.8773 3.9247 11.6522 3.5 12.5 3.5C13.8807 3.5 15 4.61929 15 6C15 6.29304 14.9498 6.57848 14.8528 6.84769Z" fill="black"/>
</svg>
`;

const Folder = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.2187 7.5H17.5C18.8807 7.5 20 8.61929 20 10V17C20 18.3807 18.8807 19.5 17.5 19.5H6.5C5.11929 19.5 4 18.3807 4 17L4 7.5C4 6.11929 5.11929 5 6.5 5H9.33935C10.2365 5 11.0649 5.48072 11.51 6.25965L12.2187 7.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5.5H10.2187L9.50996 4.25965C9.06486 3.48072 8.2365 3 7.33935 3H4.5C3.11929 3 2 4.11929 2 5.5V15C2 16.3807 3.11929 17.5 4.5 17.5H15.5C16.8807 17.5 18 16.3807 18 15V8C18 6.61929 16.8807 5.5 15.5 5.5ZM4.5 16.5C3.67157 16.5 3 15.8284 3 15V5.5C3 4.67157 3.67157 4 4.5 4H7.33935C7.87764 4 8.37466 4.28843 8.64172 4.75579L9.49445 6.24807C9.58347 6.40386 9.74914 6.5 9.92857 6.5H15.5C16.3284 6.5 17 7.17157 17 8V15C17 15.8284 16.3284 16.5 15.5 16.5H4.5Z" fill="black"/>
</svg>
`;

const Gear = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5576 3.25C11.8544 3.25 12.1233 3.42509 12.2434 3.69656L12.6859 4.69656C12.7301 4.79661 12.7507 4.89918 12.7508 4.99917C13.1878 5.12648 13.6082 5.30097 14.0052 5.5189C14.0662 5.45819 14.1393 5.40664 14.2239 5.36799L15.1947 4.92456C15.4795 4.79445 15.8152 4.85501 16.0366 5.07643L16.8744 5.91414C17.0843 6.12405 17.1506 6.43801 17.0436 6.71489L16.6493 7.73483C16.6098 7.83694 16.5518 7.92404 16.4811 7.99487C16.6991 8.39186 16.8735 8.81226 17.0008 9.24925C17.0869 9.24944 17.175 9.2647 17.2621 9.29718L18.2621 9.67007C18.5555 9.77948 18.7501 10.0597 18.7501 10.3728V11.5575C18.7501 11.8544 18.575 12.1233 18.3035 12.2434L17.3035 12.6858C17.2034 12.7301 17.1008 12.7506 17.0008 12.7508C16.8735 13.1877 16.6991 13.6081 16.4811 14.0051C16.5419 14.0661 16.5934 14.1392 16.6321 14.2239L17.0755 15.1946C17.2056 15.4795 17.1451 15.8152 16.9236 16.0366L16.0859 16.8743C15.876 17.0842 15.5621 17.1505 15.2852 17.0435L14.2652 16.6492C14.1631 16.6098 14.076 16.5517 14.0052 16.4811C13.6082 16.699 13.1878 16.8735 12.7508 17.0008C12.7506 17.0868 12.7354 17.1749 12.7029 17.262L12.33 18.262C12.2206 18.5554 11.9404 18.75 11.6273 18.75H10.4426C10.1457 18.75 9.87678 18.5749 9.75668 18.3034L9.31427 17.3034C9.27001 17.2034 9.24946 17.1009 9.2493 17.0009C8.81229 16.8736 8.39186 16.6991 7.99485 16.4812C7.93388 16.5418 7.86078 16.5934 7.7762 16.632L6.80542 17.0754C6.52059 17.2055 6.1849 17.145 5.96348 16.9236L5.12577 16.0859C4.91586 15.876 4.84951 15.562 4.95655 15.2851L5.35082 14.2652C5.39027 14.1631 5.44827 14.0761 5.51888 14.0052C5.30093 13.6082 5.12644 13.1878 4.99912 12.7508C4.91315 12.7505 4.82508 12.7353 4.73802 12.7028L3.73802 12.3299C3.44461 12.2205 3.25006 11.9403 3.25006 11.6272V10.4425C3.25006 10.1456 3.42515 9.87672 3.69662 9.75662L4.69662 9.31421C4.79664 9.26996 4.89916 9.24941 4.99912 9.24924C5.12643 8.81222 5.30093 8.39178 5.51888 7.99476C5.4582 7.9338 5.40668 7.8607 5.36806 7.77614L4.92462 6.80536C4.79452 6.52053 4.85507 6.18484 5.07649 5.96341L5.9142 5.12571C6.12411 4.9158 6.43807 4.84945 6.71495 4.95649L7.73489 5.35076C7.83696 5.39022 7.92403 5.44822 7.99485 5.51884C8.39186 5.30091 8.81229 5.12642 9.24931 4.99912C9.24951 4.91313 9.26477 4.82504 9.29724 4.73796L9.67013 3.73796C9.77954 3.44455 10.0597 3.25 10.3729 3.25H11.5576Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23223 11.5178C8.69772 11.9833 9.32837 12.25 10 12.25C10.6716 12.25 11.3023 11.9833 11.7678 11.5178C12.2333 11.0523 12.5 10.4216 12.5 9.75C12.5 9.07837 12.2333 8.44772 11.7678 7.98223C11.3023 7.51674 10.6716 7.25 10 7.25C9.32837 7.25 8.69772 7.51674 8.23223 7.98223C7.76674 8.44772 7.5 9.07837 7.5 9.75C7.5 10.4216 7.76674 11.0523 8.23223 11.5178ZM11.0607 10.8107C10.7808 11.0905 10.4037 11.25 10 11.25C9.59632 11.25 9.21915 11.0905 8.93934 10.8107C8.65953 10.5308 8.5 10.1537 8.5 9.75C8.5 9.34632 8.65953 8.96915 8.93934 8.68934C9.21915 8.40953 9.59632 8.25 10 8.25C10.4037 8.25 10.7808 8.40953 11.0607 8.68934C11.3405 8.96915 11.5 9.34632 11.5 9.75C11.5 10.1537 11.3405 10.5308 11.0607 10.8107Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2161 3.52261L12.9469 4.23706C12.5759 4.03836 12.1853 3.8775 11.7804 3.75738L11.3109 2.34254C11.2431 2.13803 11.0519 2 10.8364 2H9.05934C8.83506 2 8.63822 2.14934 8.57781 2.36533L8.18566 3.76755C7.78153 3.88997 7.39185 4.05304 7.02195 4.25387L5.68911 3.58516C5.49652 3.48853 5.26369 3.52615 5.11133 3.67851L3.85477 4.93507C3.69618 5.09366 3.6626 5.33845 3.77261 5.53389L4.48706 6.80311C4.28836 7.17412 4.1275 7.56472 4.00738 7.9696L2.59254 8.43906C2.38803 8.50692 2.25 8.69815 2.25 8.91362V10.6907C2.25 10.9149 2.39934 11.1118 2.61533 11.1722L4.01755 11.5643C4.13997 11.9685 4.30304 12.3581 4.50387 12.7281L3.83516 14.0609C3.73853 14.2535 3.77615 14.4863 3.92851 14.6387L5.18507 15.8952C5.34366 16.0538 5.58845 16.0874 5.78389 15.9774L7.05311 15.2629C7.42412 15.4616 7.81472 15.6225 8.2196 15.7426L8.68906 17.1575C8.75692 17.362 8.94815 17.5 9.16362 17.5H10.9407C11.1649 17.5 11.3618 17.3507 11.4222 17.1347L11.8143 15.7324C12.2185 15.61 12.6081 15.447 12.9781 15.2461L14.3109 15.9148C14.5035 16.0115 14.7363 15.9738 14.8887 15.8215L16.1452 14.5649C16.3038 14.4063 16.3374 14.1616 16.2274 13.9661L15.5129 12.6969C15.7116 12.3259 15.8725 11.9353 15.9926 11.5304L17.4075 11.0609C17.612 10.9931 17.75 10.8019 17.75 10.5864V8.80934C17.75 8.58506 17.6007 8.38822 17.3847 8.32781L15.9824 7.93566C15.86 7.53153 15.697 7.14185 15.4961 6.77195L16.1648 5.43911C16.2615 5.24652 16.2238 5.01369 16.0715 4.86133L14.8149 3.60477C14.6563 3.44618 14.4116 3.4126 14.2161 3.52261ZM13.1916 5.24689L14.3761 4.58012L15.1092 5.31325L14.4821 6.56313C14.4052 6.71642 14.4122 6.89843 14.5007 7.04534C14.7659 7.48564 14.9652 7.96281 15.0913 8.46333C15.1351 8.63728 15.2687 8.77443 15.4415 8.82274L16.75 9.18869V10.2255L15.4233 10.6657C15.2606 10.7197 15.1369 10.8533 15.0955 11.0197C14.9711 11.5207 14.7734 11.9986 14.5097 12.4397C14.4176 12.5937 14.4151 12.7852 14.5031 12.9416L15.1699 14.1261L14.4368 14.8592L13.1869 14.2321C13.0336 14.1552 12.8516 14.1622 12.7047 14.2507C12.2644 14.5159 11.7872 14.7152 11.2867 14.8413C11.1127 14.8851 10.9756 15.0187 10.9273 15.1915L10.5613 16.5H9.52452L9.08432 15.1733C9.03032 15.0106 8.89668 14.8869 8.73025 14.8455C8.22926 14.7211 7.75144 14.5234 7.31028 14.2597C7.15629 14.1676 6.96478 14.1651 6.80844 14.2531L5.62394 14.9199L4.89081 14.1868L5.5179 12.9369C5.59481 12.7836 5.58779 12.6016 5.49929 12.4547C5.23408 12.0144 5.03476 11.5372 4.9087 11.0367C4.86489 10.8627 4.73126 10.7256 4.5585 10.6773L3.25 10.3113V9.27452L4.57666 8.83432C4.73942 8.78032 4.86314 8.64668 4.90447 8.48025C5.02886 7.97926 5.22658 7.50144 5.49033 7.06028C5.58239 6.90629 5.58489 6.71478 5.49689 6.55844L4.83012 5.37394L5.56325 4.64081L6.81313 5.2679C6.96642 5.34481 7.14843 5.33779 7.29534 5.24929C7.73564 4.98408 8.21281 4.78476 8.71333 4.6587C8.88728 4.61489 9.02443 4.48126 9.07274 4.3085L9.43869 3H10.4755L10.9157 4.32666C10.9697 4.48942 11.1033 4.61314 11.2697 4.65447C11.7707 4.77886 12.2486 4.97658 12.6897 5.24033C12.8437 5.33239 13.0352 5.33489 13.1916 5.24689Z" fill="black"/>
</svg>
`;

const Gift = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M20 8C20 7.44772 19.5523 7 19 7H5C4.44771 7 4 7.44772 4 8V9.58065V19C4 19.5523 4.44771 20 5 20H19C19.5523 20 20 19.5523 20 19V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H17C17.5523 5 18 5.44772 18 6V17C18 17.5523 17.5523 18 17 18H3C2.44771 18 2 17.5523 2 17V6C2 5.44772 2.44771 5 3 5ZM17 17V6H3V17H17Z" fill="black"/>
<rect x="9.5" y="5.5" width="1" height="12" fill="black"/>
<rect x="2" y="10.5" width="16" height="1" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.94332 1.55446C10.0682 2.53232 10.7304 4.55547 9.97846 5.42046C9.228 6.28377 7.60446 5.69065 6.31908 4.5733C5.22456 3.62184 4.85022 2.1743 5.60673 1.30404C6.36324 0.43377 7.8488 0.603005 8.94332 1.55446ZM6.97514 3.81859C7.87157 4.59784 9.00773 5.0129 9.22375 4.7644C9.52349 4.41959 9.04968 2.97193 8.28726 2.30917C7.56243 1.67908 6.69193 1.57992 6.36144 1.96009C6.03096 2.34027 6.25031 3.1885 6.97514 3.81859Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2984 1.55446C10.1735 2.53232 9.51134 4.55547 10.2633 5.42046C11.0137 6.28377 12.6373 5.69065 13.9226 4.5733C15.0172 3.62184 15.3915 2.1743 14.635 1.30404C13.8785 0.43377 12.3929 0.603005 11.2984 1.55446ZM13.2666 3.81859C12.3702 4.59784 11.234 5.0129 11.018 4.7644C10.7182 4.41959 11.192 2.97193 11.9545 2.30917C12.6793 1.67908 13.5498 1.57992 13.8803 1.96009C14.2108 2.34027 13.9914 3.1885 13.2666 3.81859Z" fill="black"/>
</svg>
`;

const Grab = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4 8C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H18.4231C18.9754 6 19.4231 6.44772 19.4231 7C19.4231 7.55228 18.9754 8 18.4231 8H4Z" fill="currentColor"/>
<path d="M4 11.75C3.44772 11.75 3 11.3023 3 10.75C3 10.1977 3.44772 9.75 4 9.75H18.4231C18.9754 9.75 19.4231 10.1977 19.4231 10.75C19.4231 11.3023 18.9754 11.75 18.4231 11.75H4Z" fill="currentColor"/>
<path d="M4 15C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13H18.4231C18.9754 13 19.4231 13.4477 19.4231 14C19.4231 14.5523 18.9754 15 18.4231 15H4Z" fill="currentColor"/>
</g>
<path d="M3 7C2.72386 7 2.5 6.77614 2.5 6.5C2.5 6.22386 2.72386 6 3 6H18C18.2761 6 18.5 6.22386 18.5 6.5C18.5 6.77614 18.2761 7 18 7H3Z" fill="black"/>
<path d="M3 10.25C2.72386 10.25 2.5 10.0261 2.5 9.75C2.5 9.47386 2.72386 9.25 3 9.25H18C18.2761 9.25 18.5 9.47386 18.5 9.75C18.5 10.0261 18.2761 10.25 18 10.25H3Z" fill="black"/>
<path d="M3 13.5C2.72386 13.5 2.5 13.2761 2.5 13C2.5 12.7239 2.72386 12.5 3 12.5H18C18.2761 12.5 18.5 12.7239 18.5 13C18.5 13.2761 18.2761 13.5 18 13.5H3Z" fill="black"/>
</svg>
`;

const Hamburger = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M19 7.61295C19 8.82615 18.3152 9.53685 17.0629 9.82065C16.1919 10.018 15.4053 10.0307 13.0284 9.96263C12.1035 9.93615 11.59 9.92566 11 9.92566C10.4101 9.92566 9.89655 9.93615 8.97167 9.96263C6.59468 10.0307 5.80815 10.018 4.93716 9.82065C3.68479 9.53685 3.00002 8.82615 3.00002 7.61295C3.00002 4.86393 6.5032 3.00001 11 3.00001C15.4968 3.00001 19 4.86393 19 7.61295Z" fill="currentColor"/>
<path d="M2.99673 18.3736C2.99673 19.3218 3.61135 19.8234 4.67144 19.9543C5.36314 20.0397 5.79286 20.0187 7.96666 19.8485C9.24942 19.748 10.0846 19.7033 10.9967 19.7033C11.9089 19.7033 12.744 19.748 14.0268 19.8485C16.2006 20.0187 16.6303 20.0397 17.322 19.9543C18.3821 19.8234 18.9967 19.3218 18.9967 18.3736C18.9967 16.4071 16.9454 16.0076 11.7021 15.9972C11.5147 15.9968 11.3647 15.9967 11.029 15.9967H10.9967H10.9645C10.6288 15.9967 10.4787 15.9968 10.2914 15.9972C5.04811 16.0076 2.99673 16.4071 2.99673 18.3736Z" fill="currentColor"/>
<path d="M3.75362 12.6139C3.2765 12.8921 2.66422 12.7308 2.38608 12.2536C2.10793 11.7765 2.26924 11.1642 2.74637 10.8861C3.47019 10.4641 4.2537 10.25 5.07961 10.25C5.6526 10.25 5.99872 10.3503 6.50625 10.5899L6.51855 10.5957C6.79134 10.7244 6.88012 10.75 7.125 10.75C7.36062 10.75 7.42729 10.7298 7.6615 10.6099L7.67334 10.6038C8.15762 10.3559 8.50471 10.25 9.08553 10.25C9.6762 10.25 10.025 10.3589 10.5119 10.6147L10.516 10.6168C10.7383 10.7336 10.7906 10.75 11 10.75C11.209 10.75 11.2609 10.7338 11.4821 10.6174L11.4866 10.615C11.9731 10.3591 12.3224 10.25 12.9137 10.25C13.4978 10.25 13.844 10.3556 14.3363 10.6056C14.5816 10.7302 14.6469 10.75 14.875 10.75C15.1046 10.75 15.1737 10.7292 15.4191 10.6061L15.4254 10.603C15.9204 10.3547 16.2663 10.25 16.8478 10.25C17.6616 10.25 18.4569 10.4591 19.2218 10.8683C19.7087 11.1288 19.8923 11.7348 19.6317 12.2218C19.3712 12.7087 18.7652 12.8923 18.2782 12.6317C17.7971 12.3743 17.3242 12.25 16.8478 12.25C16.6285 12.25 16.5632 12.2698 16.3219 12.3908C15.8163 12.6443 15.4658 12.75 14.875 12.75C14.2827 12.75 13.9323 12.6435 13.4363 12.3916L13.4308 12.3889C13.1945 12.2689 13.1326 12.25 12.9137 12.25C12.6967 12.25 12.6419 12.2671 12.4178 12.385L12.4132 12.3874C11.9299 12.6417 11.5843 12.75 11 12.75C10.4156 12.75 10.0701 12.6418 9.58594 12.3874L9.58189 12.3853C9.35691 12.2671 9.30206 12.25 9.08553 12.25C8.87053 12.25 8.81148 12.268 8.58493 12.384L8.57308 12.3901C8.08075 12.6422 7.72416 12.75 7.125 12.75C6.53523 12.75 6.18108 12.648 5.66488 12.4043L5.65261 12.3985C5.38837 12.2738 5.30618 12.25 5.07961 12.25C4.60962 12.25 4.17339 12.3692 3.75362 12.6139Z" fill="currentColor"/>
<path d="M3.99999 15.25C3.44771 15.25 2.99999 14.8023 2.99999 14.25C2.99999 13.6977 3.44771 13.25 3.99999 13.25H18C18.5523 13.25 19 13.6977 19 14.25C19 14.8023 18.5523 15.25 18 15.25H3.99999Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.67144 18.2043C2.61135 18.0734 1.99673 17.5718 1.99673 16.6236C1.99673 14.6571 4.04811 14.2576 9.29138 14.2472C9.47874 14.2468 9.62876 14.2467 9.96451 14.2467H9.99673H10.029C10.3647 14.2467 10.5147 14.2468 10.7021 14.2472C15.9454 14.2576 17.9967 14.6571 17.9967 16.6236C17.9967 17.5718 17.3821 18.0734 16.322 18.2043C15.6303 18.2897 15.2006 18.2687 13.0268 18.0985C11.744 17.998 10.9089 17.9533 9.99673 17.9533C9.08459 17.9533 8.24942 17.998 6.96666 18.0985C4.79286 18.2687 4.36314 18.2897 3.67144 18.2043ZM9.29336 15.2472C4.87383 15.2559 2.99673 15.6216 2.99673 16.6236C2.99673 16.985 3.18209 17.1363 3.794 17.2118C4.38562 17.2849 4.81523 17.2639 6.88859 17.1015C8.19533 16.9992 9.05242 16.9533 9.99673 16.9533C10.9411 16.9533 11.7981 16.9992 13.1049 17.1015C15.1782 17.2639 15.6078 17.2849 16.1995 17.2118C16.8114 17.1363 16.9967 16.985 16.9967 16.6236C16.9967 15.6216 15.1196 15.2559 10.7001 15.2472C10.5136 15.2468 10.3644 15.2467 10.029 15.2467H9.99673H9.96451C9.62909 15.2467 9.47984 15.2468 9.29336 15.2472Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 8.07065C17.3152 7.78685 18 7.07615 18 5.86295C18 3.11393 14.4968 1.25001 10 1.25001C5.5032 1.25001 2.00002 3.11393 2.00002 5.86295C2.00002 7.07615 2.68479 7.78685 3.93716 8.07065C4.80815 8.26803 5.59468 8.28067 7.97167 8.21263C8.89655 8.18615 9.41008 8.17566 10 8.17566C10.59 8.17566 11.1035 8.18615 12.0284 8.21263C14.4053 8.28067 15.1919 8.26803 16.0629 8.07065ZM10 2.25001C14.0176 2.25001 17 3.83684 17 5.86295C17 6.56612 16.6711 6.90746 15.8419 7.09538C15.0897 7.26583 14.3284 7.27806 12.057 7.21304C11.1231 7.18631 10.6021 7.17566 10 7.17566C9.39788 7.17566 8.87696 7.18631 7.94306 7.21304C5.67158 7.27806 4.91031 7.26583 4.15817 7.09538C3.32891 6.90746 3.00002 6.56612 3.00002 5.86295C3.00002 3.83684 5.98241 2.25001 10 2.25001Z" fill="black"/>
<path d="M2.50181 10.432C2.26325 10.571 1.95711 10.4904 1.81804 10.2518C1.67896 10.0132 1.75962 9.70711 1.99818 9.56804C2.64599 9.19039 3.34268 9 4.07961 9C4.566 9 4.84614 9.0812 5.29285 9.29203L5.30514 9.29783C5.63877 9.45531 5.7939 9.5 6.125 9.5C6.45151 9.5 6.59066 9.45793 6.8894 9.30496L6.90124 9.29889C7.32109 9.0839 7.59617 9 8.08553 9C8.58266 9 8.85797 9.08598 9.27941 9.30735C9.57128 9.46065 9.69687 9.5 10 9.5C10.3028 9.5 10.4281 9.46073 10.7149 9.30988L10.7194 9.30749C11.1403 9.0861 11.4159 9 11.9137 9C12.4065 9 12.6817 9.08395 13.11 9.30142L13.1154 9.30418C13.4193 9.45849 13.5559 9.5 13.875 9.5C14.1949 9.5 14.3343 9.45796 14.6432 9.30305L14.6495 9.29991C15.0811 9.08347 15.3568 9 15.8478 9C16.5773 9 17.292 9.18786 17.9859 9.55914C18.2294 9.68941 18.3211 9.9924 18.1909 10.2359C18.0606 10.4794 17.7576 10.5711 17.5141 10.4409C16.962 10.1455 16.4086 10 15.8478 10C15.5379 10 15.4025 10.041 15.0978 10.1938L15.0915 10.197C14.6556 10.4155 14.3755 10.5 13.875 10.5C13.3738 10.5 13.0946 10.4152 12.6626 10.1958L12.6572 10.1931C12.3569 10.0406 12.2239 10 11.9137 10C11.6031 10 11.4747 10.0401 11.185 10.1925L11.1804 10.1949C10.7626 10.4147 10.4904 10.5 10 10.5C9.50938 10.5 9.23718 10.4147 8.81845 10.1948L8.8144 10.1927C8.52393 10.0401 8.39559 10 8.08553 10C7.77908 10 7.64802 10.04 7.35703 10.189L7.34519 10.195C6.91739 10.4141 6.63328 10.5 6.125 10.5C5.62146 10.5 5.33365 10.4171 4.8783 10.2022L4.86602 10.1964C4.54096 10.0429 4.39279 10 4.07961 10C3.52065 10 2.99759 10.1429 2.50181 10.432Z" fill="black"/>
<path d="M3 13C2.72386 13 2.5 12.7761 2.5 12.5C2.5 12.2239 2.72386 12 3 12H17C17.2761 12 17.5 12.2239 17.5 12.5C17.5 12.7761 17.2761 13 17 13H3Z" fill="black"/>
<path d="M6.09999 5.24999C6.09999 5.58136 5.83136 5.84999 5.49999 5.84999C5.16862 5.84999 4.89999 5.58136 4.89999 5.24999C4.89999 4.91862 5.16862 4.64999 5.49999 4.64999C5.83136 4.64999 6.09999 4.91862 6.09999 5.24999Z" fill="black"/>
<path d="M8.59999 4.24999C8.59999 4.58136 8.33136 4.84999 7.99999 4.84999C7.66862 4.84999 7.39999 4.58136 7.39999 4.24999C7.39999 3.91862 7.66862 3.64999 7.99999 3.64999C8.33136 3.64999 8.59999 3.91862 8.59999 4.24999Z" fill="black"/>
<path d="M10.6 5.74999C10.6 6.08136 10.3314 6.34999 9.99999 6.34999C9.66862 6.34999 9.39999 6.08136 9.39999 5.74999C9.39999 5.41862 9.66862 5.14999 9.99999 5.14999C10.3314 5.14999 10.6 5.41862 10.6 5.74999Z" fill="black"/>
<path d="M12.6 4.24999C12.6 4.58136 12.3314 4.84999 12 4.84999C11.6686 4.84999 11.4 4.58136 11.4 4.24999C11.4 3.91862 11.6686 3.64999 12 3.64999C12.3314 3.64999 12.6 3.91862 12.6 4.24999Z" fill="black"/>
<path d="M15.1 5.24999C15.1 5.58136 14.8314 5.84999 14.5 5.84999C14.1686 5.84999 13.9 5.58136 13.9 5.24999C13.9 4.91862 14.1686 4.64999 14.5 4.64999C14.8314 4.64999 15.1 4.91862 15.1 5.24999Z" fill="black"/>
</svg>
`;

const Headphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8801 17.0685C18.7061 17.5927 18.1402 17.8766 17.616 17.7027C17.5878 17.6933 17.5602 17.6828 17.5334 17.6712C16.9918 18.4839 16.0621 19.014 15.0129 18.9998L14.9967 18.9995C14.4466 18.989 14.0083 18.5362 14.0158 17.9861L14.0699 13.9865C14.0774 13.4321 14.5345 12.9897 15.0888 13.0002C16.0593 13.0186 16.9138 13.4961 17.4485 14.222C17.4827 13.8743 17.5 13.5218 17.5 13.166C17.5 8.71008 14.7442 5.75354 11 5.75354C7.25581 5.75354 4.5 8.71008 4.5 13.166C4.5 13.5555 4.52075 13.941 4.56163 14.3208C5.10693 13.5321 6.02251 13.0206 7.05335 13.0345L7.06957 13.0348C7.61963 13.0452 8.05794 13.498 8.0505 14.0481L7.99636 18.0478C7.98886 18.6021 7.53178 19.0446 6.97747 19.0341C5.93738 19.0143 5.03048 18.4673 4.50772 17.6523C4.46816 17.6716 4.42688 17.6884 4.38399 17.7027C3.85981 17.8766 3.29387 17.5927 3.11994 17.0685C2.71209 15.8394 2.5 14.5199 2.5 13.166C2.5 7.63571 6.11859 3.75354 11 3.75354C15.8814 3.75354 19.5 7.63571 19.5 13.166C19.5 14.5199 19.2879 15.8394 18.8801 17.0685Z" fill="currentColor"/>
</g>
<path d="M17.4055 14.911C17.3185 15.1731 17.0356 15.3151 16.7735 15.2281C16.5114 15.1411 16.3694 14.8582 16.4564 14.5961C16.8135 13.5197 17 12.3598 17 11.166C17 6.44149 14.0285 3.25354 10 3.25354C5.9715 3.25354 3 6.44149 3 11.166C3 12.3598 3.18645 13.5197 3.54361 14.5961C3.63058 14.8582 3.48861 15.1411 3.22652 15.2281C2.96443 15.3151 2.68146 15.1731 2.5945 14.911C2.20355 13.7328 2 12.4665 2 11.166C2 5.9043 5.40289 2.25354 10 2.25354C14.5971 2.25354 18 5.9043 18 11.166C18 12.4665 17.7965 13.7328 17.4055 14.911Z" fill="black"/>
<path d="M5.97747 17.034C4.32744 17.0027 3.01262 15.6444 3.03496 13.9942L3.03526 13.9719C3.05752 12.3274 4.40876 11.0122 6.05335 11.0345C6.06146 11.0346 6.06146 11.0346 6.06958 11.0347C6.61963 11.0452 7.05795 11.498 7.0505 12.0481L6.99636 16.0477C6.98886 16.6021 6.53179 17.0446 5.97747 17.034Z" fill="black"/>
<path d="M14.0888 11.0001C15.7388 11.0315 17.0536 12.3898 17.0313 14.0399L17.031 14.0622C17.0087 15.7068 15.6575 17.022 14.0129 16.9997C14.0048 16.9996 14.0048 16.9996 13.9967 16.9994C13.4466 16.989 13.0083 16.5362 13.0158 15.9861L13.0699 11.9864C13.0774 11.4321 13.5345 10.9896 14.0888 11.0001Z" fill="black"/>
</svg>
`;

const Heart = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12 7.49228C13.4641 4.87207 18.5 5.78701 18.5 9.57245C18.5 12.1012 16.3333 14.4103 12 16.5C7.66667 14.4103 5.5 12.1012 5.5 9.57245C5.5 5.78701 10.5359 4.87207 12 7.49228Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2172 15.9503C14.7048 13.7863 17 11.3401 17 8.57242C17 4.75701 12.1396 3.22618 10 5.63238C7.86037 3.22618 3 4.75701 3 8.57242C3 11.3401 5.29522 13.7863 9.78282 15.9503L10 16.0551L10.2172 15.9503ZM10.4365 6.73615C11.7451 4.39411 16 5.49881 16 8.57242C16 10.8221 14.0325 12.9584 10 14.9438C5.96748 12.9584 4 10.8221 4 8.57242C4 5.49881 8.25486 4.39411 9.56352 6.73615C9.56352 6.73615 9.78176 7.03407 10 7.03407C10.2182 7.03407 10.4365 6.73615 10.4365 6.73615Z" fill="black"/>
</svg>
`;

const House = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M3.88889 11H2.5C2.03934 11 1.82377 10.4299 2.16919 10.1251L10.6692 2.62508C10.8582 2.45831 11.1418 2.45831 11.3308 2.62508L19.8308 10.1251C20.1762 10.4299 19.9607 11 19.5 11H18.1111V18C18.1111 18.2761 17.8873 18.5 17.6111 18.5H4.38889C4.11274 18.5 3.88889 18.2761 3.88889 18V11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.999997 10H2.38889V17C2.38889 17.2761 2.61274 17.5 2.88889 17.5H16.1111C16.3873 17.5 16.6111 17.2761 16.6111 17V10H18C18.4607 10 18.6762 9.42986 18.3308 9.12508L9.83081 1.62508C9.6418 1.45831 9.3582 1.45831 9.16919 1.62508L0.669186 9.12508C0.323766 9.42986 0.539337 10 0.999997 10ZM2.88889 9H2.32238L9.5 2.66681L16.6776 9H16.1111C15.835 9 15.6111 9.22386 15.6111 9.5V16.5H3.38889V9.5C3.38889 9.22386 3.16503 9 2.88889 9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7083 11.5H8.20833C7.65604 11.5 7.20833 11.9477 7.20833 12.5V16.5C7.20833 17.0523 7.65604 17.5 8.20833 17.5H10.7083C11.2606 17.5 11.7083 17.0523 11.7083 16.5V12.5C11.7083 11.9477 11.2606 11.5 10.7083 11.5ZM8.20833 16.5V12.5H10.7083V16.5H8.20833Z" fill="black"/>
</svg>
`;

const Info = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="7" fill="currentColor"/>
<path d="M9.5 9C9.5 8.72386 9.72386 8.5 10 8.5C10.2761 8.5 10.5 8.72386 10.5 9V14C10.5 14.2761 10.2761 14.5 10 14.5C9.72386 14.5 9.5 14.2761 9.5 14V9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="black"/>
<circle cx="10" cy="6.75" r="0.75" fill="black"/>
</svg>
`;

const Internet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 16.1944 16.1944 20 11.5 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 10C6.5 14.3955 7.94179 18 10 18C12.0582 18 13.5 14.3955 13.5 10C13.5 5.60448 12.0582 2 10 2C7.94179 2 6.5 5.60448 6.5 10ZM12.5 10C12.5 13.8887 11.2555 17 10 17C8.7445 17 7.5 13.8887 7.5 10C7.5 6.11125 8.7445 3 10 3C11.2555 3 12.5 6.11125 12.5 10Z" fill="black"/>
<path d="M3.7345 5.31155L4.40527 4.56989C4.51174 4.66618 4.6261 4.76016 4.74797 4.85146C6.06562 5.83869 8.14634 6.44072 10.4133 6.44072C12.3459 6.44072 14.1501 6.00426 15.4683 5.25028C15.7894 5.06668 16.0765 4.8668 16.3253 4.65423L16.9749 5.41453C16.6772 5.66892 16.3387 5.9045 15.9648 6.11833C14.4882 6.96291 12.5131 7.44072 10.4133 7.44072C7.94222 7.44072 5.65143 6.77791 4.14836 5.65176C4.0022 5.54226 3.8641 5.42876 3.7345 5.31155Z" fill="black"/>
<path d="M3.7345 14.6991L4.40527 15.4407C4.51174 15.3444 4.6261 15.2505 4.74797 15.1592C6.06562 14.1719 8.14634 13.5699 10.4133 13.5699C12.3459 13.5699 14.1501 14.0064 15.4683 14.7603C15.7894 14.9439 16.0765 15.1438 16.3253 15.3564L16.9749 14.5961C16.6772 14.3417 16.3387 14.1061 15.9648 13.8923C14.4882 13.0477 12.5131 12.5699 10.4133 12.5699C7.94222 12.5699 5.65143 13.2327 4.14836 14.3589C4.0022 14.4684 3.8641 14.5819 3.7345 14.6991Z" fill="black"/>
<path d="M2 10.5V9.5H18V10.5H2Z" fill="black"/>
</svg>
`;

const Key = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14.5 9V11.6111C14.5 11.7409 14.4495 11.8656 14.3592 11.9589L13.3562 12.9949L14.3541 13.9958C14.4475 14.0895 14.5 14.2164 14.5 14.3488V15.124C14.5 15.3033 14.404 15.4689 14.2483 15.558L13.5323 15.9677L14.3177 16.6139C14.4331 16.7089 14.5 16.8505 14.5 17C14.5 18.3807 13.3807 19.5 12 19.5C10.6193 19.5 9.5 18.3807 9.5 17V9C9.5 8.91628 9.50413 8.83304 9.51233 8.75051C8.27138 7.92679 7.5 6.53091 7.5 5C7.5 2.51472 9.51472 0.5 12 0.5C14.4853 0.5 16.5 2.51472 16.5 5C16.5 6.53091 15.7286 7.92679 14.4877 8.75051C14.4959 8.83304 14.5 8.91628 14.5 9Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11.6111V9C12.5 8.91628 12.4959 8.83304 12.4877 8.75051C13.7286 7.92679 14.5 6.53091 14.5 5C14.5 2.51472 12.4853 0.5 10 0.5C7.51472 0.5 5.5 2.51472 5.5 5C5.5 6.53091 6.27138 7.92679 7.51233 8.75051C7.50413 8.83304 7.5 8.91628 7.5 9V17C7.5 18.3807 8.61929 19.5 10 19.5C11.3807 19.5 12.5 18.3807 12.5 17C12.5 16.8505 12.4331 16.7089 12.3177 16.6139L11.5323 15.9677L12.2483 15.558C12.404 15.4689 12.5 15.3033 12.5 15.124V14.3488C12.5 14.2164 12.4475 14.0895 12.3541 13.9958L11.3562 12.9949L12.3592 11.9589C12.4495 11.8656 12.5 11.7409 12.5 11.6111ZM11.4529 8.625C11.484 8.74626 11.5 8.87186 11.5 9V11.4087L10.296 12.6522C10.1063 12.8481 10.1086 13.1599 10.3012 13.353L11.5 14.5555V14.834L10.4069 15.4595C10.1032 15.6332 10.0674 16.0572 10.3375 16.2795L11.4836 17.2226C11.3761 17.9455 10.7528 18.5 10 18.5C9.17157 18.5 8.5 17.8284 8.5 17V9C8.5 8.87186 8.51595 8.74626 8.54713 8.625C8.60381 8.40454 8.50444 8.17362 8.30537 8.06323C7.20003 7.45024 6.5 6.28681 6.5 5C6.5 3.067 8.067 1.5 10 1.5C11.933 1.5 13.5 3.067 13.5 5C13.5 6.28681 12.8 7.45024 11.6946 8.06323C11.4956 8.17362 11.3962 8.40454 11.4529 8.625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10.8284 5.5 11.5 4.82843 11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4C8.5 4.82843 9.17157 5.5 10 5.5ZM10 3.5C10.2761 3.5 10.5 3.72386 10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4C9.5 3.72386 9.72386 3.5 10 3.5Z" fill="black"/>
</svg>
`;

const KniveFork = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9048 0.834176C13.6721 1.99181 12.5 3.63951 12.5 5.71735C12.5 7.67355 13.5465 9.03178 15.5 9.69569V11.2007C15.0516 11.46 14.75 11.9448 14.75 12.5V17.5C14.75 18.3284 15.4216 19 16.25 19C17.0784 19 17.75 18.3284 17.75 17.5V12.5C17.75 11.9448 17.4484 11.46 17 11.2007V9.15088C17.0002 9.13999 17.0002 9.12912 17 9.11828V1.5C17 0.93764 16.404 0.575323 15.9048 0.834176ZM5.78272 2.46257C5.80339 2.04888 6.15551 1.73026 6.56921 1.75093C6.98291 1.7716 7.30152 2.12373 7.28085 2.53742C7.19904 4.17489 7.28398 5.28369 7.49964 5.80358C7.59363 6.03015 7.74212 6.16691 8 6.22214V2.5C8 2.08579 8.33579 1.75 8.75 1.75C9.16421 1.75 9.5 2.08579 9.5 2.5V6.22209C9.75773 6.16682 9.90616 6.03008 10.0001 5.80358C10.2158 5.28369 10.3007 4.17489 10.2189 2.53742C10.1982 2.12373 10.5169 1.7716 10.9306 1.75093C11.3442 1.73026 11.6964 2.04888 11.717 2.46257C11.8093 4.30918 11.7108 5.59435 11.3856 6.37832C11.0497 7.1881 10.3862 7.64523 9.5 7.73386V11.2007C9.94835 11.46 10.25 11.9448 10.25 12.5V17.5C10.25 18.3284 9.57843 19 8.75 19C7.92157 19 7.25 18.3284 7.25 17.5V12.5C7.25 11.9448 7.55165 11.46 8 11.2007V7.73389C7.11368 7.64531 6.45006 7.18817 6.11412 6.37832C5.78892 5.59435 5.69046 4.30918 5.78272 2.46257Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2791 1.05145C12.1208 2.11457 11 3.61133 11 5.50647C11 7.32619 12.0372 8.557 14 9.13733V11C14 11.2761 14.2239 11.5 14.5 11.5C14.7761 11.5 15 11.2761 15 11V8.76362C15.0002 8.75649 15.0002 8.74939 15 8.74231V1.49999C15 1.1296 14.6113 0.88779 14.2791 1.05145ZM12 5.50647C12 4.23782 12.6491 3.19236 14 2.34771V8.08786C12.6365 7.61052 12 6.7667 12 5.50647Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12.5V17.5C13 18.3284 13.6716 19 14.5 19C15.3284 19 16 18.3284 16 17.5V12.5C16 11.6716 15.3284 11 14.5 11C13.6716 11 13 11.6716 13 12.5ZM14.5 18C14.2239 18 14 17.7761 14 17.5V12.5C14 12.2239 14.2239 12 14.5 12C14.7761 12 15 12.2239 15 12.5V17.5C15 17.7761 14.7761 18 14.5 18Z" fill="black"/>
<path d="M4.53241 2.47505C4.54619 2.19925 4.78094 1.98684 5.05674 2.00062C5.33253 2.0144 5.54494 2.24915 5.53116 2.52495C5.44761 4.19727 5.53481 5.33547 5.76872 5.89937C5.95181 6.34075 6.31286 6.53348 6.97128 6.49561C7.24697 6.47975 7.48331 6.69038 7.49917 6.96607C7.51503 7.24175 7.3044 7.4781 7.02872 7.49396C5.97051 7.55483 5.20281 7.14501 4.84504 6.28253C4.53809 5.54257 4.44189 4.2868 4.53241 2.47505Z" fill="black"/>
<path d="M9.46744 2.47505C9.45366 2.19925 9.21891 1.98684 8.94311 2.00062C8.66731 2.0144 8.45491 2.24915 8.46868 2.52495C8.55224 4.19727 8.46504 5.33547 8.23113 5.89937C8.04803 6.34075 7.68699 6.53348 7.02856 6.49561C6.75288 6.47975 6.51653 6.69038 6.50067 6.96607C6.48481 7.24175 6.69545 7.4781 6.97113 7.49396C8.02933 7.55483 8.79704 7.14501 9.15481 6.28253C9.46175 5.54257 9.55796 4.2868 9.46744 2.47505Z" fill="black"/>
<path d="M6.5 2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V11.4998C7.5 11.7759 7.27614 11.9998 7 11.9998C6.72386 11.9998 6.5 11.7759 6.5 11.4998V2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.5V17.5C5.5 18.3284 6.17157 19 7 19C7.82843 19 8.5 18.3284 8.5 17.5V12.5C8.5 11.6716 7.82843 11 7 11C6.17157 11 5.5 11.6716 5.5 12.5ZM7 18C6.72386 18 6.5 17.7761 6.5 17.5V12.5C6.5 12.2239 6.72386 12 7 12C7.27614 12 7.5 12.2239 7.5 12.5V17.5C7.5 17.7761 7.27614 18 7 18Z" fill="black"/>
</svg>
`;

const Letter = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="4.5" y="5.5" width="15" height="12" rx="1.5" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H3C2.72386 4 2.5 4.22386 2.5 4.5V15.5C2.5 15.7761 2.72386 16 3 16H17C17.2761 16 17.5 15.7761 17.5 15.5V4.5C17.5 4.22386 17.2761 4 17 4ZM3.5 15V5H16.5V15H3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3242 4.88066L10.2792 10.8807C10.0914 11.0406 9.81512 11.0397 9.62838 10.8786L2.6734 4.87859C2.32251 4.57588 2.53659 4 3 4H17C17.465 4 17.6782 4.57917 17.3242 4.88066ZM15.6418 5H4.34504L9.95708 9.84146L15.6418 5Z" fill="black"/>
</svg>
`;

const LockClosed = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.64494V6.5C8 4.567 9.567 3 11.5 3C13.433 3 15 4.567 15 6.5V9.64494C16.4457 10.0752 17.5 11.4145 17.5 13V16C17.5 17.933 15.933 19.5 14 19.5H9C7.067 19.5 5.5 17.933 5.5 16V13C5.5 11.4145 6.55426 10.0752 8 9.64494ZM9.5 9.5V6.5C9.5 5.39543 10.3954 4.5 11.5 4.5C12.6046 4.5 13.5 5.39543 13.5 6.5V9.5H9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.5C7.5 13.6046 8.39543 14.5 9.5 14.5C10.6046 14.5 11.5 13.6046 11.5 12.5C11.5 11.3954 10.6046 10.5 9.5 10.5C8.39543 10.5 7.5 11.3954 7.5 12.5ZM10.5 12.5C10.5 13.0523 10.0523 13.5 9.5 13.5C8.94772 13.5 8.5 13.0523 8.5 12.5C8.5 11.9477 8.94772 11.5 9.5 11.5C10.0523 11.5 10.5 11.9477 10.5 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5H7C5.067 7.5 3.5 9.067 3.5 11V14C3.5 15.933 5.067 17.5 7 17.5H12C13.933 17.5 15.5 15.933 15.5 14V11C15.5 9.067 13.933 7.5 12 7.5ZM4.5 11C4.5 9.61929 5.61929 8.5 7 8.5H12C13.3807 8.5 14.5 9.61929 14.5 11V14C14.5 15.3807 13.3807 16.5 12 16.5H7C5.61929 16.5 4.5 15.3807 4.5 14V11Z" fill="black"/>
<path d="M7 8C7 8.27614 6.77614 8.5 6.5 8.5C6.22386 8.5 6 8.27614 6 8V4.5C6 2.567 7.567 1 9.5 1C11.433 1 13 2.567 13 4.5V8C13 8.27614 12.7761 8.5 12.5 8.5C12.2239 8.5 12 8.27614 12 8V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5V8Z" fill="black"/>
</svg>
`;

const LockOpen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9.5H14C15.933 9.5 17.5 11.067 17.5 13V16C17.5 17.933 15.933 19.5 14 19.5H9C7.067 19.5 5.5 17.933 5.5 16V13C5.5 11.4145 6.55426 10.0752 8 9.64494V6.75C8 4.6928 9.55173 3 11.5 3C13.4483 3 15 4.6928 15 6.75V7C15 7.41421 14.6642 7.75 14.25 7.75C13.8358 7.75 13.5 7.41421 13.5 7V6.75C13.5 5.49349 12.5893 4.5 11.5 4.5C10.4107 4.5 9.5 5.49349 9.5 6.75V9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.5C7.5 13.6046 8.39543 14.5 9.5 14.5C10.6046 14.5 11.5 13.6046 11.5 12.5C11.5 11.3954 10.6046 10.5 9.5 10.5C8.39543 10.5 7.5 11.3954 7.5 12.5ZM10.5 12.5C10.5 13.0523 10.0523 13.5 9.5 13.5C8.94772 13.5 8.5 13.0523 8.5 12.5C8.5 11.9477 8.94772 11.5 9.5 11.5C10.0523 11.5 10.5 11.9477 10.5 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5H7C5.067 7.5 3.5 9.067 3.5 11V14C3.5 15.933 5.067 17.5 7 17.5H12C13.933 17.5 15.5 15.933 15.5 14V11C15.5 9.067 13.933 7.5 12 7.5ZM4.5 11C4.5 9.61929 5.61929 8.5 7 8.5H12C13.3807 8.5 14.5 9.61929 14.5 11V14C14.5 15.3807 13.3807 16.5 12 16.5H7C5.61929 16.5 4.5 15.3807 4.5 14V11Z" fill="black"/>
<path d="M7 8C7 8.27614 6.77614 8.5 6.5 8.5C6.22386 8.5 6 8.27614 6 8V4.5C6 2.567 7.567 1 9.5 1C11.433 1 13 2.567 13 4.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5V8Z" fill="black"/>
</svg>
`;

const Loop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 9.5C5.5 12.5376 7.96243 15 11 15C11.9892 15 12.9174 14.7389 13.7194 14.2818C13.7801 14.381 13.8534 14.4748 13.9393 14.5607L16.9393 17.5607C17.5251 18.1464 18.4749 18.1464 19.0607 17.5607C19.6464 16.9749 19.6464 16.0251 19.0607 15.4393L16.0607 12.4393C15.9748 12.3534 15.881 12.2801 15.7818 12.2194C16.2389 11.4174 16.5 10.4892 16.5 9.5C16.5 6.46243 14.0376 4 11 4C7.96243 4 5.5 6.46243 5.5 9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.82842 4.82838C2.8758 6.781 2.8758 9.94683 4.82842 11.8994C6.78104 13.8521 9.94686 13.8521 11.8995 11.8994C13.8521 9.94683 13.8521 6.781 11.8995 4.82838C9.94687 2.87576 6.78104 2.87576 4.82842 4.82838ZM11.1924 11.1923C9.63028 12.7544 7.09762 12.7544 5.53553 11.1923C3.97343 9.63024 3.97343 7.09758 5.53553 5.53549C7.09762 3.97339 9.63028 3.97339 11.1924 5.53549C12.7545 7.09758 12.7545 9.63024 11.1924 11.1923Z" fill="black"/>
<path d="M11.1924 12.6274C10.8019 12.2369 10.8019 11.6037 11.1924 11.2132C11.583 10.8227 12.2161 10.8227 12.6066 11.2132L15.4351 14.0416C15.8256 14.4321 15.8256 15.0653 15.4351 15.4558C15.0445 15.8463 14.4114 15.8463 14.0209 15.4558L11.1924 12.6274Z" fill="black"/>
</svg>
`;

const LoopMinus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82847 5.8284C4.48532 8.17155 4.48532 11.9705 6.82847 14.3137C8.68527 16.1705 11.4563 16.5559 13.6926 15.4699C13.7507 15.5614 13.8197 15.648 13.8995 15.7279L17.4351 19.2634C18.0209 19.8492 18.9706 19.8492 19.5564 19.2634C20.1422 18.6776 20.1422 17.7279 19.5564 17.1421L16.0209 13.6066C16.0013 13.587 15.9813 13.568 15.9609 13.5498C17.6322 11.2064 17.4165 7.93118 15.3137 5.8284C12.9706 3.48526 9.17161 3.48526 6.82847 5.8284Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.18202 5.18193C3.03414 7.32982 3.03414 10.8122 5.18202 12.9601C7.3299 15.108 10.8123 15.108 12.9602 12.9601C15.1081 10.8122 15.1081 7.32982 12.9602 5.18193C10.8123 3.03405 7.3299 3.03405 5.18202 5.18193ZM12.2531 12.253C10.4957 14.0104 7.64648 14.0104 5.88913 12.253C4.13177 10.4956 4.13177 7.6464 5.88913 5.88904C7.64648 4.13168 10.4957 4.13168 12.2531 5.88904C14.0104 7.6464 14.0104 10.4956 12.2531 12.253Z" fill="black"/>
<path d="M12 14.1213C11.6095 13.7308 11.6095 13.0976 12 12.7071C12.3905 12.3166 13.0237 12.3166 13.4142 12.7071L17.2028 16.4957C17.5933 16.8862 17.5933 17.5193 17.2028 17.9099C16.8123 18.3004 16.1791 18.3004 15.7886 17.9099L12 14.1213Z" fill="black"/>
<path d="M6.70709 9.41418C6.43095 9.41418 6.20709 9.19033 6.20709 8.91418C6.20709 8.63804 6.43095 8.41418 6.70709 8.41418H11.1924C11.4685 8.41418 11.6924 8.63804 11.6924 8.91418C11.6924 9.19033 11.4685 9.41418 11.1924 9.41418H6.70709Z" fill="black"/>
</svg>
`;

const LoopPlus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82847 5.8284C4.48532 8.17155 4.48532 11.9705 6.82847 14.3137C8.68527 16.1705 11.4563 16.5559 13.6926 15.4699C13.7507 15.5614 13.8197 15.648 13.8995 15.7279L17.4351 19.2634C18.0209 19.8492 18.9706 19.8492 19.5564 19.2634C20.1422 18.6776 20.1422 17.7279 19.5564 17.1421L16.0209 13.6066C16.0013 13.587 15.9813 13.568 15.9609 13.5498C17.6322 11.2064 17.4165 7.93118 15.3137 5.8284C12.9706 3.48526 9.17161 3.48526 6.82847 5.8284Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.18202 5.18193C3.03414 7.32982 3.03414 10.8122 5.18202 12.9601C7.3299 15.108 10.8123 15.108 12.9602 12.9601C15.1081 10.8122 15.1081 7.32982 12.9602 5.18193C10.8123 3.03405 7.3299 3.03405 5.18202 5.18193ZM12.2531 12.253C10.4957 14.0104 7.64648 14.0104 5.88913 12.253C4.13177 10.4956 4.13177 7.6464 5.88913 5.88904C7.64648 4.13168 10.4957 4.13168 12.2531 5.88904C14.0104 7.6464 14.0104 10.4956 12.2531 12.253Z" fill="black"/>
<path d="M12 14.1213C11.6095 13.7308 11.6095 13.0976 12 12.7071C12.3905 12.3166 13.0237 12.3166 13.4142 12.7071L17.2028 16.4957C17.5933 16.8862 17.5933 17.5193 17.2028 17.9099C16.8123 18.3004 16.1791 18.3004 15.7886 17.9099L12 14.1213Z" fill="black"/>
<path d="M7.20709 9.66418C6.93095 9.66418 6.70709 9.44033 6.70709 9.16418C6.70709 8.88804 6.93095 8.66418 7.20709 8.66418H11.2071C11.4832 8.66418 11.7071 8.88804 11.7071 9.16418C11.7071 9.44033 11.4832 9.66418 11.2071 9.66418H7.20709Z" fill="black"/>
<path d="M8.70709 7.16418C8.70709 6.88804 8.93095 6.66418 9.20709 6.66418C9.48323 6.66418 9.70709 6.88804 9.70709 7.16418V11.1642C9.70709 11.4403 9.48323 11.6642 9.20709 11.6642C8.93095 11.6642 8.70709 11.4403 8.70709 11.1642V7.16418Z" fill="black"/>
</svg>
`;

const Magnet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.13174 4.64646C8.327 4.4512 8.64358 4.4512 8.83884 4.64646L11.8693 7.67692C12.0646 7.87218 12.0646 8.18876 11.8693 8.38403L7.62666 12.6267C7.15245 13.1009 7.15245 13.8697 7.62666 14.3439C8.10087 14.8181 8.86971 14.8181 9.34392 14.3439L13.5866 10.1013C13.7818 9.90602 14.0984 9.90602 14.2937 10.1013L17.3241 13.1317C17.5194 13.327 17.5194 13.6436 17.3241 13.8388L13.0815 18.0815C10.5431 20.6199 6.42751 20.6199 3.8891 18.0815C1.35069 15.5431 1.35069 11.4275 3.8891 8.8891L8.13174 4.64646Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4012 8.4285C13.8884 8.22339 13.639 7.64142 13.8441 7.12864L15.1943 3.75317L16.7526 4.27261L17.5714 2.56719C17.8105 2.06932 18.4079 1.85949 18.9057 2.09853C19.4036 2.33757 19.6134 2.93496 19.3744 3.43283L17.7926 6.72744L16.3509 6.24688L15.7011 7.87142C15.496 8.3842 14.914 8.63362 14.4012 8.4285Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.13174 3.64646C7.327 3.4512 7.64358 3.4512 7.83884 3.64646L10.8693 6.67692C11.0646 6.87218 11.0646 7.18876 10.8693 7.38403L6.62666 11.6267C6.15245 12.1009 6.15245 12.8697 6.62666 13.3439C7.10087 13.8181 7.86971 13.8181 8.34392 13.3439L12.5866 9.10128C12.7818 8.90602 13.0984 8.90602 13.2937 9.10128L16.3241 12.1317C16.5194 12.327 16.5194 12.6436 16.3241 12.8388L12.0815 17.0815C9.54308 19.6199 5.42751 19.6199 2.8891 17.0815C0.350692 14.5431 0.350691 10.4275 2.8891 7.8891L7.13174 3.64646ZM7.48529 4.70712L3.59621 8.59621C1.44832 10.7441 1.44832 14.2265 3.59621 16.3744C5.74409 18.5223 9.2265 18.5223 11.3744 16.3744L15.2635 12.4853L12.9401 10.1619L9.05103 14.051C8.1863 14.9158 6.78429 14.9158 5.91955 14.051C5.05482 13.1863 5.05482 11.7843 5.91955 10.9196L9.80864 7.03047L7.48529 4.70712Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48531 10.0608L4.45485 7.03038L5.16196 6.32327L8.19241 9.35373L7.48531 10.0608Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9401 15.5157L9.90965 12.4852L10.6168 11.7781L13.6472 14.8086L12.9401 15.5157Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5869 6.96424C12.3305 6.86169 12.2058 6.5707 12.3083 6.31431L13.4834 3.37658L15.0126 3.88629L16.0221 1.78358C16.1417 1.53465 16.4404 1.42973 16.6893 1.54925C16.9382 1.66877 17.0431 1.96746 16.9236 2.2164L15.5326 5.11371L14.0617 4.62343L13.2368 6.6857C13.1343 6.94209 12.8433 7.0668 12.5869 6.96424Z" fill="black"/>
</svg>
`;

const Map = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.6891 9.53422C16.5519 9.83406 17.252 10.5354 17.5489 11.4595L18.8501 15.5097C19.3619 17.1027 18.5207 18.8206 16.9712 19.3467C16.6722 19.4483 16.3594 19.5 16.0445 19.5H7.95468C6.32285 19.5 5 18.14 5 16.4624C5 16.1387 5.05033 15.8171 5.14907 15.5097L6.45027 11.4595C6.74724 10.5352 7.44769 9.83367 8.31081 9.53397C8.11499 8.90123 8 8.29712 8 7.78555C8 5.41871 9.79086 3.5 12 3.5C14.2091 3.5 16 5.41871 16 7.78555C16 8.29719 15.885 8.90139 15.6891 9.53422Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.5C11.1046 8.5 12 7.60457 12 6.5C12 5.39543 11.1046 4.5 10 4.5C8.89543 4.5 8 5.39543 8 6.5C8 7.60457 8.89543 8.5 10 8.5ZM10 5.5C10.5523 5.5 11 5.94772 11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5C9 5.94772 9.44772 5.5 10 5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6.28555C5.5 8.95892 8.15253 13.5 10 13.5C11.8475 13.5 14.5 8.95892 14.5 6.28555C14.5 3.64998 12.4933 1.5 10 1.5C7.50672 1.5 5.5 3.64998 5.5 6.28555ZM13.5 6.28555C13.5 8.47937 11.1515 12.5 10 12.5C8.84852 12.5 6.5 8.47937 6.5 6.28555C6.5 4.18744 8.075 2.5 10 2.5C11.925 2.5 13.5 4.18744 13.5 6.28555Z" fill="black"/>
<path d="M13.4351 9.14065C13.1784 9.03882 13.0529 8.74818 13.1547 8.4915C13.2565 8.23482 13.5472 8.10929 13.8038 8.21112C14.6228 8.53604 15.2624 9.20622 15.5442 10.0514L16.8775 14.0514C17.4014 15.6232 16.552 17.3222 14.9801 17.8461C14.6742 17.9481 14.3539 18.0001 14.0314 18.0001H5.96857C4.31171 18.0001 2.96857 16.6569 2.96857 15.0001C2.96857 14.6776 3.02055 14.3573 3.12252 14.0514L4.45585 10.0514C4.74265 9.19096 5.40021 8.51244 6.23914 8.19446C6.49735 8.09659 6.78602 8.22657 6.88389 8.48479C6.98176 8.74301 6.85178 9.03167 6.59356 9.12954C6.03409 9.3416 5.59577 9.7939 5.40453 10.3676L4.0712 14.3676C4.00322 14.5715 3.96857 14.7851 3.96857 15.0001C3.96857 16.1046 4.864 17.0001 5.96857 17.0001H14.0314C14.2464 17.0001 14.46 16.9654 14.6639 16.8974C15.7118 16.5481 16.2781 15.4155 15.9288 14.3676L14.5955 10.3676C14.4076 9.80406 13.9813 9.35735 13.4351 9.14065Z" fill="black"/>
</svg>
`;

const Microphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.5C10.1193 2.5 9 3.61929 9 5V9C9 10.3807 10.1193 11.5 11.5 11.5C12.8807 11.5 14 10.3807 14 9V5C14 3.61929 12.8807 2.5 11.5 2.5ZM7 18C7 18.7917 8.66602 19 11.5 19C14.334 19 16 18.7917 16 18C16 17.3102 14.7355 17.0633 12.5357 17.0112V15.4228C15.3326 15.0011 17.5 12.9009 17.5 10.3V8.5C17.5 7.94772 17.0523 7.5 16.5 7.5C15.9477 7.5 15.5 7.94772 15.5 8.5V10.3C15.5 12.0249 13.744 13.5 11.5 13.5C9.25601 13.5 7.5 12.0249 7.5 10.3V8.5C7.5 7.94772 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5V10.3C5.5 12.923 7.70437 15.0368 10.5357 15.4332V17.0095C8.29194 17.058 7 17.3028 7 18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4.25C7.75 3.00736 8.75736 2 10 2C11.2426 2 12.25 3.00736 12.25 4.25V7.75C12.25 8.99264 11.2426 10 10 10C8.75736 10 7.75 8.99264 7.75 7.75V4.25Z" fill="black"/>
<path d="M10 17C7.51962 17 6 16.7829 6 16C6 15.2171 7.51962 15 10 15C12.4804 15 14 15.2171 14 16C14 16.7829 12.4804 17 10 17Z" fill="black"/>
<path d="M9.5 12.5L10.5 12.5V16H9.5L9.5 12.5Z" fill="black"/>
<path d="M14 7.5C14 7.22386 14.2239 7 14.5 7C14.7761 7 15 7.22386 15 7.5V9.15C15 11.5713 12.7456 13.5 10 13.5C7.25438 13.5 5 11.5713 5 9.15V7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5V9.15C6 10.9813 7.77506 12.5 10 12.5C12.2249 12.5 14 10.9813 14 9.15V7.5Z" fill="black"/>
</svg>
`;

const Minus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 12.5C5.67157 12.5 5 11.8284 5 11C5 10.1716 5.67157 9.5 6.5 9.5H16.5C17.3284 9.5 18 10.1716 18 11C18 11.8284 17.3284 12.5 16.5 12.5H6.5Z" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
</svg>
`;

const Monitor = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8.5315 18.75C8.51094 18.6701 8.5 18.5863 8.5 18.5V16H3.5C2.67157 16 2 15.3284 2 14.5V4.5C2 3.67157 2.67157 3 3.5 3H18.5C19.3284 3 20 3.67157 20 4.5V14.5C20 15.3284 19.3284 16 18.5 16H13.5V18.5C13.5 18.5863 13.4891 18.6701 13.4685 18.75H15.5C15.7761 18.75 16 18.9739 16 19.25C16 19.5261 15.7761 19.75 15.5 19.75H6.5C6.22386 19.75 6 19.5261 6 19.25C6 18.9739 6.22386 18.75 6.5 18.75H8.5315Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.5H2.5C1.39543 1.5 0.5 2.39543 0.5 3.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H17.5C18.6046 15.5 19.5 14.6046 19.5 13.5V3.5C19.5 2.39543 18.6046 1.5 17.5 1.5ZM1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM8.5 18V15.5H11.5V18H8.5Z" fill="black"/>
<path d="M5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H14.5C14.7761 18 15 18.2239 15 18.5C15 18.7761 14.7761 19 14.5 19H5.5Z" fill="black"/>
<path d="M2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V12.5C18 12.7761 17.7761 13 17.5 13H2.5C2.22386 13 2 12.7761 2 12.5V3.5C2 3.22386 2.22386 3 2.5 3Z" fill="black"/>
</svg>
`;

const Monitor2 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.67157 2.67157 3 3.5 3H18.5C19.3284 3 20 3.67157 20 4.5V14.5C20 15.3284 19.3284 16 18.5 16H13.5V18.5C13.5 18.5863 13.4891 18.6701 13.4685 18.75H15.5C15.7761 18.75 16 18.9739 16 19.25C16 19.5261 15.7761 19.75 15.5 19.75H6.5C6.22386 19.75 6 19.5261 6 19.25C6 18.9739 6.22386 18.75 6.5 18.75H8.5315C8.51094 18.6701 8.5 18.5863 8.5 18.5V16H3.5C2.67157 16 2 15.3284 2 14.5V4.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.5H2.5C1.39543 1.5 0.5 2.39543 0.5 3.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H17.5C18.6046 15.5 19.5 14.6046 19.5 13.5V3.5C19.5 2.39543 18.6046 1.5 17.5 1.5ZM1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V3.5Z" fill="black"/>
<path d="M10 14C9.58579 14 9.25 13.6642 9.25 13.25C9.25 12.8358 9.58579 12.5 10 12.5C10.4142 12.5 10.75 12.8358 10.75 13.25C10.75 13.6642 10.4142 14 10 14Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM8.5 18V15.5H11.5V18H8.5Z" fill="black"/>
<path d="M5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H14.5C14.7761 18 15 18.2239 15 18.5C15 18.7761 14.7761 19 14.5 19H5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 12H1V11H19V12Z" fill="black"/>
</svg>
`;

const Moon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.6123 3.47407C11.1462 4.11939 10.0652 5.42476 9.7254 7.02351C9.15 9.73052 10.8735 12.3901 13.5744 12.9642C15.7487 13.4263 17.9491 12.3945 19.0014 10.4699C19.2458 10.0229 19.9239 10.185 19.9398 10.6941C19.9612 11.3759 19.9002 12.0618 19.7559 12.7406C18.7782 17.3406 14.2633 20.2788 9.67122 19.3027C5.07917 18.3266 2.14967 13.8061 3.12742 9.20615C4.047 4.87987 8.1173 1.98618 12.4718 2.52015C12.9761 2.582 13.0774 3.26938 12.6123 3.47407Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2754 6.02351C8.61522 4.42476 9.69616 3.11939 11.1623 2.47407C11.6274 2.26938 11.5261 1.582 11.0218 1.52015C6.6673 0.98618 2.597 3.87987 1.67742 8.20615C0.699672 12.8061 3.62918 17.3266 8.22122 18.3027C12.8133 19.2788 17.3282 16.3406 18.3059 11.7406C18.4502 11.0618 18.5112 10.3759 18.4898 9.69414C18.4739 9.18497 17.7958 9.02293 17.5514 9.4699C16.4991 11.3945 14.2987 12.4263 12.1244 11.9642C9.42351 11.3901 7.70001 8.73052 8.2754 6.02351ZM2.65557 8.41406C3.35101 5.14227 6.0879 2.79892 9.27325 2.49127C8.28445 3.33513 7.57861 4.49189 7.29725 5.81559C6.60712 9.0624 8.67496 12.2533 11.9165 12.9423C13.9291 13.3701 15.9599 12.7316 17.3629 11.3577C17.3519 11.4161 17.3402 11.4744 17.3278 11.5327C16.4648 15.5929 12.4805 18.1857 8.42914 17.3246C4.37773 16.4634 1.79256 12.4742 2.65557 8.41406Z" fill="black"/>
</svg>
`;

const Motorcycle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3215 7.38391C14.8993 8.08318 16 9.66305 16 11.5V14C16 15.1046 15.1046 16 14 16H13.4146C13.4699 16.1564 13.5 16.3247 13.5 16.5V18.5C13.5 19.3284 12.8284 20 12 20H11C10.1716 20 9.5 19.3284 9.5 18.5V16.5C9.5 16.3247 9.53008 16.1564 9.58535 16H9C7.89543 16 7 15.1046 7 14L7 11.5C7 9.66305 8.10067 8.08318 9.67849 7.38391C8.96207 6.83567 8.5 5.9718 8.5 5C8.5 3.34315 9.84315 2 11.5 2C13.1569 2 14.5 3.34315 14.5 5C14.5 5.9718 14.0379 6.83567 13.3215 7.38391Z" fill="currentColor"/>
</g>
<path d="M12.75 12C12.75 12.5523 12.3023 13 11.75 13C11.1977 13 10.75 12.5523 10.75 12C10.75 11.4477 11.1977 11 11.75 11C12.3023 11 12.75 11.4477 12.75 12Z" fill="black"/>
<path d="M9.25 12C9.25 12.5523 8.80228 13 8.25 13C7.69772 13 7.25 12.5523 7.25 12C7.25 11.4477 7.69772 11 8.25 11C8.80228 11 9.25 11.4477 9.25 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C11.6569 7 13 5.65685 13 4C13 2.34315 11.6569 1 10 1C8.34315 1 7 2.34315 7 4C7 5.65685 8.34315 7 10 7ZM10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 14H9.5C8.67157 14 8 14.6716 8 15.5V17.5C8 18.3284 8.67157 19 9.5 19H10.5C11.3284 19 12 18.3284 12 17.5V15.5C12 14.6716 11.3284 14 10.5 14ZM9 15.5C9 15.2239 9.22386 15 9.5 15H10.5C10.7761 15 11 15.2239 11 15.5V17.5C11 17.7761 10.7761 18 10.5 18H9.5C9.22386 18 9 17.7761 9 17.5V15.5Z" fill="black"/>
<path d="M15.5 3.75C15.0858 3.75 14.75 3.41421 14.75 3C14.75 2.58579 15.0858 2.25 15.5 2.25H17.5C17.9142 2.25 18.25 2.58579 18.25 3C18.25 3.41421 17.9142 3.75 17.5 3.75H15.5Z" fill="black"/>
<path d="M2.5 3.75C2.08579 3.75 1.75 3.41421 1.75 3C1.75 2.58579 2.08579 2.25 2.5 2.25H4.5C4.91421 2.25 5.25 2.58579 5.25 3C5.25 3.41421 4.91421 3.75 4.5 3.75H2.5Z" fill="black"/>
<path d="M4.10634 3.36382L4.40831 2.39368L8.10634 3.13621L7.80437 4.10635L4.10634 3.36382Z" fill="black"/>
<path d="M11.8937 3.13618L12.1956 4.10632L15.8937 3.36379L15.5917 2.39365L11.8937 3.13618Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5C14.5 8.01472 12.4853 6 10 6C7.51472 6 5.5 8.01472 5.5 10.5V13C5.5 14.1046 6.39543 15 7.5 15H12.5C13.6046 15 14.5 14.1046 14.5 13V10.5ZM6.5 10.5C6.5 8.567 8.067 7 10 7C11.933 7 13.5 8.567 13.5 10.5V13C13.5 13.5523 13.0523 14 12.5 14H7.5C6.94772 14 6.5 13.5523 6.5 13V10.5Z" fill="black"/>
</svg>
`;

const MusicNoteDouble = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.80991C8.25 3.29388 8.64265 2.86259 9.15642 2.8143L18.1564 1.96834C18.7431 1.9132 19.25 2.3747 19.25 2.96395V4.00002V5.14521V16C19.25 17.3807 17.9069 18.5 16.25 18.5C14.5931 18.5 13.25 17.3807 13.25 16C13.25 14.6193 14.5931 13.5 16.25 13.5C16.6006 13.5 16.9372 13.5501 17.25 13.6423V6.24933L10.25 6.94384V17C10.25 18.3807 8.90685 19.5 7.25 19.5C5.59315 19.5 4.25 18.3807 4.25 17C4.25 15.6193 5.59315 14.5 7.25 14.5C7.60064 14.5 7.93722 14.5501 8.25 14.6423V6.03814V5.00002V3.80991Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1388 1.37578L8.13875 1.89638C7.35564 1.95462 6.75 2.60698 6.75 3.39225V4.12892C6.75038 4.1583 6.75058 4.17298 6.75115 4.18766C6.75173 4.20233 6.75268 4.21699 6.7546 4.24631C6.81943 5.0722 7.5415 5.68915 8.36739 5.62432L15.3674 5.07481C16.1479 5.01354 16.75 4.36231 16.75 3.57941V2.87165C16.7493 2.81599 16.7493 2.81597 16.7459 2.76046L16.7459 2.7604C16.6844 1.93426 15.9649 1.31434 15.1388 1.37578ZM7.75 4.12892V3.39225C7.75 3.1305 7.95188 2.91304 8.21292 2.89363L15.2129 2.37303C15.4883 2.35255 15.7281 2.55919 15.7486 2.83457C15.7492 2.84383 15.7495 2.84846 15.7497 2.8531C15.7498 2.85773 15.7499 2.86237 15.75 2.87165V3.57941C15.75 3.84037 15.5493 4.05745 15.2891 4.07787L8.28913 4.62738C8.01383 4.649 7.77314 4.44334 7.75153 4.16805C7.75026 4.1485 7.75026 4.1485 7.75 4.12892Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 16C1.75 17.4083 3.1146 18.5 4.75 18.5C6.3854 18.5 7.75 17.4083 7.75 16C7.75 14.5917 6.3854 13.5 4.75 13.5C3.1146 13.5 1.75 14.5917 1.75 16ZM6.75 16C6.75 16.8008 5.87602 17.5 4.75 17.5C3.62398 17.5 2.75 16.8008 2.75 16C2.75 15.1992 3.62398 14.5 4.75 14.5C5.87602 14.5 6.75 15.1992 6.75 16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6699 16.8046C12.2259 17.2495 12.9663 17.5 13.75 17.5C15.3854 17.5 16.75 16.4083 16.75 15C16.75 13.5917 15.3854 12.5 13.75 12.5C12.1146 12.5 10.75 13.5917 10.75 15C10.75 15.6971 11.0905 16.3411 11.6699 16.8046ZM15.75 15C15.75 15.8008 14.876 16.5 13.75 16.5C13.1896 16.5 12.6702 16.3242 12.2946 16.0238C11.9423 15.742 11.75 15.3782 11.75 15C11.75 14.1992 12.624 13.5 13.75 13.5C14.876 13.5 15.75 14.1992 15.75 15Z" fill="black"/>
<path d="M6.75 3.5C6.75 3.22386 6.97386 3 7.25 3C7.52614 3 7.75 3.22386 7.75 3.5V16C7.75 16.2761 7.52614 16.5 7.25 16.5C6.97386 16.5 6.75 16.2761 6.75 16V3.5Z" fill="black"/>
<path d="M15.75 3.5C15.75 3.22386 15.9739 3 16.25 3C16.5261 3 16.75 3.22386 16.75 3.5V15C16.75 15.2761 16.5261 15.5 16.25 15.5C15.9739 15.5 15.75 15.2761 15.75 15V3.5Z" fill="black"/>
</svg>
`;

const MusicNoteSingle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.531 2.33645C15.8538 5.27397 18 7.40061 18 8.94299C18 10.4353 17.1791 11.6422 15.6041 12.5261C15.168 12.7708 14.6824 12.2944 14.9188 11.8537C15.3256 11.0953 15.1916 10.2468 14.4579 9.23688C14.0063 8.6153 13.438 8.09236 12.75 7.66769V15.6389C12.75 15.6558 12.7496 15.6726 12.7487 15.6893C12.7496 15.7141 12.75 15.7389 12.75 15.7639C12.75 17.2459 11.2709 18.3889 9.5 18.3889C7.72914 18.3889 6.25 17.2459 6.25 15.7639C6.25 14.2818 7.72914 13.1389 9.5 13.1389C9.94085 13.1389 10.3636 13.2097 10.75 13.339V6.43384V5.63886V2.75C10.75 2.34864 11.1991 2.11086 11.531 2.33645Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 7.80413C16.75 6.26176 14.6038 4.13512 10.281 1.19759C9.94906 0.972008 9.5 1.20978 9.5 1.61114V5.29498C9.5 5.51063 9.63826 5.70198 9.84301 5.76969C11.3174 6.25731 12.434 7.03285 13.2079 8.09803C13.9416 9.10793 14.0756 9.95646 13.6688 10.7148C13.4324 11.1555 13.918 11.632 14.3541 11.3872C15.9291 10.5034 16.75 9.29646 16.75 7.80413ZM10.5 4.94056V2.56389C13.9918 5.01467 15.75 6.82274 15.75 7.80413C15.75 8.5504 15.4721 9.19993 14.8955 9.76443C14.8758 9.04 14.5787 8.28357 14.0169 7.51024C13.1776 6.35503 12.0012 5.49802 10.5 4.94056Z" fill="black"/>
<path d="M9.5 4.5C9.5 4.22386 9.72386 4 10 4C10.2761 4 10.5 4.22386 10.5 4.5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 16.4083 5.8646 17.5 7.5 17.5C9.1354 17.5 10.5 16.4083 10.5 15C10.5 13.5917 9.1354 12.5 7.5 12.5C5.8646 12.5 4.5 13.5917 4.5 15ZM9.5 15C9.5 15.8008 8.62602 16.5 7.5 16.5C6.37398 16.5 5.5 15.8008 5.5 15C5.5 14.1992 6.37398 13.5 7.5 13.5C8.62602 13.5 9.5 14.1992 9.5 15Z" fill="black"/>
</svg>
`;

const Open = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="7" y="6" width="11" height="11" rx="1" fill="currentColor"/>
<path d="M14.5 14.5V11.25C14.5 10.9739 14.7239 10.75 15 10.75C15.2761 10.75 15.5 10.9739 15.5 11.25V15C15.5 15.2761 15.2761 15.5 15 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15V5C4.5 4.72386 4.72386 4.5 5 4.5H8.75C9.02614 4.5 9.25 4.72386 9.25 5C9.25 5.27614 9.02614 5.5 8.75 5.5H5.5V14.5H14.5Z" fill="black"/>
<path d="M10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536C9.45118 10.1583 9.45118 9.84171 9.64645 9.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L10.3536 10.3536Z" fill="black"/>
<path d="M15.5 8.5C15.5 8.77614 15.2761 9 15 9C14.7239 9 14.5 8.77614 14.5 8.5V5C14.5 4.72386 14.7239 4.5 15 4.5C15.2761 4.5 15.5 4.72386 15.5 5V8.5Z" fill="black"/>
<path d="M11.5 5.5C11.2239 5.5 11 5.27614 11 5C11 4.72386 11.2239 4.5 11.5 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H11.5Z" fill="black"/>
</svg>
`;

const PaintPallet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M10.5896 5.93864C14.3891 6.95671 16.6954 10.711 15.7246 14.3342C14.6313 18.4146 9.42662 21.6777 6.84274 18.8947C6.01967 18.0082 5.80843 17.0333 5.95296 15.7336C5.97792 15.5091 5.99947 15.3622 6.06577 14.9399C6.22776 13.9081 6.22599 13.5002 6.01192 13.1518C5.80534 12.8155 5.43446 12.7294 4.33401 12.7156C4.28019 12.7149 4.28019 12.7149 4.22591 12.7142C2.67773 12.6922 1.92684 12.4348 1.54351 11.3506C0.274887 7.76224 6.32303 4.79543 10.5896 5.93864Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8426 4.43006C13.3311 4.40927 12.8607 4.09221 12.5375 3.48435C11.9801 2.43603 11.8585 0.917407 12.6482 0.497495C13.438 0.0775839 14.6289 1.02762 15.1863 2.07593C15.4869 2.64121 15.5076 3.17152 15.2927 3.59351C15.4711 3.68323 15.6244 3.82716 15.7253 4.01687C15.7308 4.02728 15.7362 4.03778 15.7413 4.04837L19.8336 12.4482C19.9869 12.7628 19.8635 13.1423 19.5545 13.3065C19.2452 13.471 18.8612 13.3618 18.6847 13.0592L13.9771 4.98894C13.8746 4.81319 13.8318 4.61905 13.8426 4.43006Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7246 13.3342C15.6954 9.71095 13.3891 5.95668 9.58956 4.93861C5.32303 3.7954 -0.725113 6.76221 0.543511 10.3505C0.926836 11.4348 1.67773 11.6922 3.22591 11.7141L3.33401 11.7156C4.43446 11.7294 4.80534 11.8155 5.01192 12.1517C5.22599 12.5002 5.22776 12.9081 5.06577 13.9399C4.99947 14.3622 4.97792 14.509 4.95296 14.7336C4.80843 16.0333 5.01967 17.0081 5.84274 17.8946C8.42662 20.6776 13.6313 17.4146 14.7246 13.3342ZM1.48632 10.0172C0.577621 7.44693 5.70337 4.93259 9.33074 5.90454C12.6082 6.78273 14.5833 9.99776 13.7587 13.0753C12.8355 16.5206 8.47174 19.2565 6.57558 17.2142C5.98161 16.5745 5.83147 15.8816 5.94683 14.8441C5.96952 14.64 5.98985 14.5015 6.05367 14.095C6.2538 12.8202 6.25136 12.2589 5.86397 11.6283C5.3993 10.8719 4.80502 10.734 3.34657 10.7156L3.24008 10.7142C2.08097 10.6978 1.67812 10.5597 1.48632 10.0172Z" fill="black"/>
<path d="M4.75 9.5C4.05964 9.5 3.5 8.94036 3.5 8.25C3.5 7.55964 4.05964 7 4.75 7C5.44036 7 6 7.55964 6 8.25C6 8.94036 5.44036 9.5 4.75 9.5Z" fill="black"/>
<path d="M8.75 9.5C8.05964 9.5 7.5 8.94036 7.5 8.25C7.5 7.55964 8.05964 7 8.75 7C9.44036 7 10 7.55964 10 8.25C10 8.94036 9.44036 9.5 8.75 9.5Z" fill="black"/>
<path d="M11.25 12.5C10.5596 12.5 10 11.9404 10 11.25C10 10.5596 10.5596 10 11.25 10C11.9404 10 12.5 10.5596 12.5 11.25C12.5 11.9404 11.9404 12.5 11.25 12.5Z" fill="black"/>
<path d="M9.75 16C9.05964 16 8.5 15.4404 8.5 14.75C8.5 14.0596 9.05964 13.5 9.75 13.5C10.4404 13.5 11 14.0596 11 14.75C11 15.4404 10.4404 16 9.75 16Z" fill="black"/>
<path d="M13.3707 3.60451C13.8605 3.34411 14.466 3.52923 14.7253 4.01686C14.7308 4.02727 14.7362 4.03777 14.7413 4.04836L18.8336 12.4482C18.9869 12.7628 18.8635 13.1422 18.5545 13.3065C18.2452 13.471 17.8612 13.3618 17.6847 13.0592L12.9771 4.98893C12.6993 4.5127 12.8602 3.90144 13.3364 3.62364C13.3477 3.61704 13.3592 3.61066 13.3707 3.60451Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5375 3.48434C12.0238 4.39897 12.8434 4.65522 13.6347 4.23444C14.4262 3.81362 14.6726 2.99053 14.1863 2.07592C13.6289 1.0276 12.438 0.0775719 11.6482 0.497483C10.8585 0.917395 10.9801 2.43602 11.5375 3.48434ZM12.4204 3.01486C12.2581 2.70947 12.1315 2.26269 12.1007 1.8773C12.0806 1.62643 12.1063 1.45889 12.1151 1.40204C12.1171 1.38903 12.1182 1.38181 12.1176 1.38073C12.1183 1.38172 12.1245 1.38462 12.1356 1.38985C12.1866 1.41372 12.3408 1.48594 12.5391 1.64416C12.8414 1.88525 13.141 2.24 13.3034 2.54539C13.5316 2.97464 13.4668 3.19118 13.1653 3.3515C12.8641 3.51165 12.6488 3.44435 12.4204 3.01486Z" fill="black"/>
</svg>
`;

const Pen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4.79643 11.7244L14.8744 1.64643C15.0696 1.45117 15.3862 1.45117 15.5815 1.64643L19.4706 5.53552C19.6658 5.73078 19.6658 6.04736 19.4706 6.24262L9.39263 16.3206C9.31739 16.3958 9.22012 16.4451 9.11495 16.4612L4.52042 17.1667C4.18664 17.2179 3.89908 16.9304 3.95033 16.5966L4.65578 12.002C4.67192 11.8969 4.7212 11.7996 4.79643 11.7244Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0815 0.853583L3.00354 10.9315C2.92831 11.0068 2.87903 11.104 2.86289 11.2092L2.15744 15.8037C2.10619 16.1375 2.39374 16.4251 2.72753 16.3738L7.32206 15.6684C7.42723 15.6522 7.5245 15.6029 7.59973 15.5277L17.6777 5.44978C17.8729 5.25452 17.8729 4.93793 17.6777 4.74267L13.7886 0.853583C13.5933 0.658321 13.2767 0.658321 13.0815 0.853583ZM3.24927 15.282L3.82645 11.5228L13.435 1.91424L16.617 5.09622L7.00843 14.7048L3.24927 15.282Z" fill="black"/>
<path d="M10.8539 4.06103L11.5603 3.35332L15.0968 6.88369L14.3903 7.59141L10.8539 4.06103Z" fill="black"/>
</svg>
`;

const Person = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.5 9.5C13.433 9.5 15 7.933 15 6C15 4.067 13.433 2.5 11.5 2.5C9.567 2.5 8 4.067 8 6C8 7.933 9.567 9.5 11.5 9.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.688C18 13.098 15.09 10.5 11.5 10.5C7.91 10.5 5 13.098 5 16.688L5.002 18.5C5.002 18.7652 5.10736 19.0196 5.29489 19.2071C5.48243 19.3946 5.73678 19.5 6.002 19.5H17C17.2652 19.5 17.5196 19.3946 17.7071 19.2071C17.8946 19.0196 18 18.7652 18 18.5V16.687V16.688Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6C7.5 4.61929 8.61929 3.5 10 3.5C11.3807 3.5 12.5 4.61929 12.5 6C12.5 7.38071 11.3807 8.5 10 8.5C8.61929 8.5 7.5 7.38071 7.5 6ZM10 2.5C8.067 2.5 6.5 4.067 6.5 6C6.5 7.933 8.067 9.5 10 9.5C11.933 9.5 13.5 7.933 13.5 6C13.5 4.067 11.933 2.5 10 2.5ZM10.0162 9.5C6.51061 9.5 3.5 12.0794 3.5 15.5L3.50205 18.0004C3.50227 18.2766 3.72631 18.5002 4.00245 18.5C4.2786 18.4998 4.50227 18.2757 4.50204 17.9996L4.5 15.4998C4.50011 12.7253 6.96426 10.5 10.0162 10.5C13.0645 10.5 15.5 12.7221 15.5 15.5V18C15.5 18.2761 15.7239 18.5 16 18.5C16.2761 18.5 16.5 18.2761 16.5 18V15.5C16.5 12.0827 13.5254 9.5 10.0162 9.5Z" fill="black"/>
</svg>
`;

const Phone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.4389 11.7743L13.0208 11.1924C14.1924 10.0208 16.0919 10.0208 17.2635 11.1924L18.6777 12.6066C19.8492 13.7782 19.8492 15.6777 18.6777 16.8492L15.872 19.6549C15.5932 19.9337 15.1766 20.0227 14.8082 19.882C8.31797 17.4042 3.87437 12.9301 1.50011 6.5696C1.36316 6.20273 1.45296 5.78968 1.72986 5.51278L4.53553 2.70711C5.7071 1.53554 7.6066 1.53554 8.77817 2.70711L10.1924 4.12132C11.364 5.2929 11.364 7.19239 10.1924 8.36396L9.61167 8.94467C10.4942 9.94935 11.4366 10.8925 12.4389 11.7743Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8744 9.54594L11.9632 10.4571C10.6931 9.37249 9.51512 8.19356 8.42915 6.9201L9.33883 6.01041C10.3151 5.0341 10.3151 3.45119 9.33883 2.47488L7.92462 1.06066C6.94831 0.0843525 5.36539 0.0843525 4.38908 1.06066L1.58341 3.86634C1.44496 4.00479 1.40006 4.21131 1.46854 4.39474C3.79255 10.6206 8.13044 14.9883 14.4866 17.4149C14.6707 17.4852 14.879 17.4408 15.0184 17.3014L17.8241 14.4957C18.8004 13.5194 18.8004 11.9365 17.8241 10.9602L16.4099 9.54594C15.4336 8.56963 13.8507 8.56963 12.8744 9.54594ZM17.117 11.6673C17.7028 12.2531 17.7028 13.2028 17.117 13.7886L14.542 16.3636C8.72054 14.0584 4.73058 10.0434 2.5194 4.34456L5.09619 1.76777C5.68198 1.18198 6.63172 1.18198 7.21751 1.76777L8.63172 3.18198C9.21751 3.76777 9.21751 4.71752 8.63172 5.3033L7.39779 6.53723C7.21532 6.71971 7.20169 7.01108 7.36633 7.20979C8.66924 8.78233 10.1049 10.2191 11.6731 11.5199C11.8718 11.6848 12.1633 11.6712 12.3459 11.4887L13.5815 10.2531C14.1673 9.66726 15.117 9.66726 15.7028 10.2531L17.117 11.6673Z" fill="black"/>
</svg>
`;

const PhotoCamera = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.76225 7.5L8.17154 6.23204C8.50479 5.19965 9.46583 4.5 10.5507 4.5L13.4489 4.5C14.5337 4.5 15.4947 5.19965 15.828 6.23204L16.2373 7.5H17.5C18.8807 7.5 20 8.61929 20 10V16C20 17.3807 18.8807 18.5 17.5 18.5H6.5C5.11929 18.5 4 17.3807 4 16L4 10C4 8.61929 5.11929 7.5 6.5 7.5H7.76225Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17154 5.23204L5.76225 6.5H4.5C3.11929 6.5 2 7.61929 2 9V15C2 16.3807 3.11929 17.5 4.5 17.5H15.5C16.8807 17.5 18 16.3807 18 15V9C18 7.61929 16.8807 6.5 15.5 6.5H14.2373L13.828 5.23204C13.4947 4.19965 12.5337 3.5 11.4489 3.5H8.55067C7.46583 3.5 6.50479 4.19965 6.17154 5.23204ZM4.5 7.5H6.49027L7.12319 5.53922C7.32314 4.91979 7.89976 4.5 8.55067 4.5H11.4489C12.0998 4.5 12.6764 4.91979 12.8763 5.53922L13.5093 7.5H15.5C16.3284 7.5 17 8.17157 17 9V15C17 15.8284 16.3284 16.5 15.5 16.5H4.5C3.67157 16.5 3 15.8284 3 15V9C3 8.17157 3.67157 7.5 4.5 7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.5C7 13.1569 8.34315 14.5 10 14.5C11.6569 14.5 13 13.1569 13 11.5C13 9.84315 11.6569 8.5 10 8.5C8.34315 8.5 7 9.84315 7 11.5ZM12 11.5C12 12.6046 11.1046 13.5 10 13.5C8.89543 13.5 8 12.6046 8 11.5C8 10.3954 8.89543 9.5 10 9.5C11.1046 9.5 12 10.3954 12 11.5Z" fill="black"/>
</svg>
`;

const Pill = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.06498 4.42894C7.66633 2.8276 10.2626 2.8276 11.864 4.42894L17.663 10.2279C19.2643 11.8293 19.2643 14.4256 17.663 16.0269C16.0616 17.6283 13.4653 17.6283 11.864 16.0269L6.06498 10.2279C4.46364 8.62659 4.46364 6.03029 6.06498 4.42894Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8492 10.1924L9.48529 3.82843C7.92319 2.26633 5.39053 2.26633 3.82843 3.82843C2.26634 5.39052 2.26634 7.92318 3.82843 9.48528L10.1924 15.8492C11.7545 17.4113 14.2872 17.4113 15.8492 15.8492C17.4113 14.2871 17.4113 11.7545 15.8492 10.1924ZM4.53554 4.53553C5.70711 3.36396 7.60661 3.36396 8.77818 4.53553L15.1421 10.8995C16.3137 12.0711 16.3137 13.9706 15.1421 15.1421C13.9706 16.3137 12.0711 16.3137 10.8995 15.1421L4.53554 8.77817C3.36397 7.6066 3.36397 5.70711 4.53554 4.53553Z" fill="black"/>
<path d="M13.0369 7.58066L12.7944 8.55081C11.5929 8.25043 10.571 8.39641 9.693 8.98176C8.82365 9.56133 8.23928 10.6688 7.96219 12.337L6.97571 12.1731C7.29422 10.2556 8.00765 8.90348 9.1383 8.14971C10.2603 7.40173 11.5718 7.21437 13.0369 7.58066Z" fill="black"/>
</svg>
`;

const Pinpoint = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.5 19.5C9.72259 19.5 5.5 12.6249 5.5 8.62313C5.5 4.69121 8.63188 1.5 12.5 1.5C16.3681 1.5 19.5 4.69121 19.5 8.62313C19.5 12.6249 15.2774 19.5 12.5 19.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11ZM10 6C11.1046 6 12 6.89543 12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.12313C3 12.1249 7.22259 19 10 19C12.7774 19 17 12.1249 17 8.12313C17 4.19121 13.8681 1 10 1C6.13188 1 3 4.19121 3 8.12313ZM16 8.12313C16 11.6434 12.0959 18 10 18C7.90411 18 4 11.6434 4 8.12313C4 4.73934 6.68841 2 10 2C13.3116 2 16 4.73934 16 8.12313Z" fill="black"/>
</svg>
`;

const PinpointOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.5 19.5C9.72259 19.5 5.5 12.6249 5.5 8.62313C5.5 4.69121 8.63188 1.5 12.5 1.5C16.3681 1.5 19.5 4.69121 19.5 8.62313C19.5 12.6249 15.2774 19.5 12.5 19.5Z" fill="currentColor"/>
</g>
<path d="M1.64645 1.85355C1.45118 1.65829 1.45118 1.34171 1.64645 1.14645C1.84171 0.951183 2.15829 0.951183 2.35355 1.14645L18.8536 17.6464C19.0488 17.8417 19.0488 18.1583 18.8536 18.3536C18.6583 18.5488 18.3417 18.5488 18.1464 18.3536L1.64645 1.85355Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11ZM10 6C11.1046 6 12 6.89543 12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.12313C3 12.1249 7.22259 19 10 19C12.7774 19 17 12.1249 17 8.12313C17 4.19121 13.8681 1 10 1C6.13188 1 3 4.19121 3 8.12313ZM16 8.12313C16 11.6434 12.0959 18 10 18C7.90411 18 4 11.6434 4 8.12313C4 4.73934 6.68841 2 10 2C13.3116 2 16 4.73934 16 8.12313Z" fill="black"/>
</svg>
`;

const Plus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4.5C10.6716 4.5 10 5.17157 10 6V9.5H6.5C5.67157 9.5 5 10.1716 5 11C5 11.8284 5.67157 12.5 6.5 12.5H10V16C10 16.8284 10.6716 17.5 11.5 17.5C12.3284 17.5 13 16.8284 13 16V12.5H16.5C17.3284 12.5 18 11.8284 18 11C18 10.1716 17.3284 9.5 16.5 9.5H13V6C13 5.17157 12.3284 4.5 11.5 4.5Z" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
<path d="M9.5 5C9.5 4.72386 9.72386 4.5 10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5Z" fill="black"/>
</svg>
`;

const Power = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.5 20C7.63401 20 4.5 16.866 4.5 13C4.5 9.13401 7.63401 6 11.5 6C15.366 6 18.5 9.13401 18.5 13C18.5 16.866 15.366 20 11.5 20Z" fill="currentColor"/>
</g>
<path d="M4.47659 5.45962C4.70925 5.22366 5.08914 5.22098 5.3251 5.45364C5.56106 5.6863 5.56373 6.06619 5.33107 6.30215C4.22977 7.41907 3.60002 8.92906 3.60002 10.5422C3.60002 13.8535 6.24345 16.5344 9.50002 16.5344C12.7566 16.5344 15.4 13.8535 15.4 10.5422C15.4 8.92906 14.7703 7.41907 13.669 6.30215C13.4363 6.06619 13.439 5.6863 13.675 5.45364C13.9109 5.22098 14.2908 5.22366 14.5235 5.45962C15.8444 6.79928 16.6 8.61113 16.6 10.5422C16.6 14.5125 13.4232 17.7344 9.50002 17.7344C5.5769 17.7344 2.40002 14.5125 2.40002 10.5422C2.40002 8.61113 3.15566 6.79928 4.47659 5.45962Z" fill="black"/>
<path d="M8.87805 1.25002C8.87805 0.918654 9.14668 0.650024 9.47805 0.650024C9.80942 0.650024 10.0781 0.918654 10.0781 1.25002V8.33477C10.0781 8.66614 9.80942 8.93477 9.47805 8.93477C9.14668 8.93477 8.87805 8.66614 8.87805 8.33477L8.87805 1.25002Z" fill="black"/>
</svg>
`;

const Printer = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="2" y="7.5" width="18" height="11" rx="3" fill="currentColor"/>
<path d="M4.5 2C4.5 1.44772 4.94772 1 5.5 1H14.5C15.0523 1 15.5 1.44772 15.5 2V6.5H4.5V2Z" fill="white"/>
<path d="M5 6.5H4V2.1C4 1.23445 4.61204 0.5 5.41667 0.5H14.5833C15.388 0.5 16 1.23445 16 2.1V6.5H15V2.1C15 1.75052 14.7912 1.5 14.5833 1.5H5.41667C5.20877 1.5 5 1.75052 5 2.1V6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6H4C2.34315 6 1 7.34315 1 9V14C1 15.6569 2.34315 17 4 17H16C17.6569 17 19 15.6569 19 14V9C19 7.34315 17.6569 6 16 6ZM2 9C2 7.89543 2.89543 7 4 7H16C17.1046 7 18 7.89543 18 9V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V9Z" fill="black"/>
<path d="M15.5 17.5313C15.5 18.0835 15.0523 18.5312 14.5 18.5312H5.5C4.94771 18.5312 4.5 18.0835 4.5 17.5312V11.9687L15.5 11.9688V17.5313Z" fill="white"/>
<path d="M15 11.9688H16V17.2188C16 18.1894 15.412 19.0312 14.5833 19.0312H5.41667C4.58798 19.0312 4 18.1894 4 17.2188V11.9687H5V17.2188C5 17.6979 5.23283 18.0312 5.41667 18.0312H14.5833C14.7672 18.0312 15 17.6979 15 17.2188V11.9688Z" fill="black"/>
<path d="M13.5 15.5C13.7761 15.5 14 15.7239 14 16C14 16.2761 13.7761 16.5 13.5 16.5H6.5C6.22386 16.5 6 16.2761 6 16C6 15.7239 6.22386 15.5 6.5 15.5H13.5Z" fill="black"/>
<path d="M13.5 13.5C13.7761 13.5 14 13.7239 14 14C14 14.2761 13.7761 14.5 13.5 14.5L6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5H13.5Z" fill="black"/>
</svg>
`;

const Refresh = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="10.5" r="6.5" fill="currentColor"/>
<path d="M5.25375 14.5962C5.05848 14.4009 5.05848 14.0843 5.25375 13.8891C5.44901 13.6938 5.76559 13.6938 5.96085 13.8891C6.98597 14.9142 8.37095 15.5 9.84994 15.5C12.8875 15.5 15.3499 13.0376 15.3499 10C15.3499 9.72386 15.5738 9.5 15.8499 9.5C16.1261 9.5 16.3499 9.72386 16.3499 10C16.3499 13.5899 13.4398 16.5 9.84994 16.5C8.103 16.5 6.46454 15.807 5.25375 14.5962Z" fill="black"/>
<path d="M13.1311 12.416C12.9013 12.5691 12.5909 12.507 12.4377 12.2772C12.2846 12.0475 12.3467 11.737 12.5764 11.5839L15.5768 9.58388C15.8066 9.43072 16.117 9.49282 16.2702 9.72259C16.4233 9.95237 16.3612 10.2628 16.1315 10.416L13.1311 12.416Z" fill="black"/>
<path d="M18.266 12.7226C18.4192 12.9523 18.3571 13.2628 18.1273 13.4159C17.8976 13.5691 17.5871 13.507 17.434 13.2773L15.434 10.2773C15.2808 10.0475 15.3429 9.73706 15.5726 9.58388C15.8024 9.43071 16.1128 9.49279 16.266 9.72256L18.266 12.7226Z" fill="black"/>
<path d="M14.3536 5.20471C14.5488 5.39997 14.5488 5.71655 14.3536 5.91182C14.1583 6.10708 13.8417 6.10708 13.6464 5.91182C12.6213 4.8867 11.2364 4.3009 9.75736 4.3009C6.71979 4.3009 4.25736 6.76334 4.25736 9.8009C4.25736 10.077 4.0335 10.3009 3.75736 10.3009C3.48122 10.3009 3.25736 10.077 3.25736 9.8009C3.25736 6.21105 6.16751 3.3009 9.75736 3.3009C11.5043 3.3009 13.1428 3.99391 14.3536 5.20471Z" fill="black"/>
<path d="M6.47621 7.38482C6.70598 7.23166 7.01642 7.29376 7.16958 7.52353C7.32274 7.75331 7.26064 8.06374 7.03086 8.2169L4.03049 10.2169C3.80071 10.3701 3.49028 10.308 3.33712 10.0782C3.18396 9.84841 3.24606 9.53798 3.47584 9.38482L6.47621 7.38482Z" fill="black"/>
<path d="M1.34128 7.07822C1.18811 6.84846 1.25019 6.53803 1.47996 6.38485C1.70972 6.23167 2.02016 6.29376 2.17333 6.52352L4.17333 9.52352C4.32651 9.75329 4.26442 10.0637 4.03466 10.2169C3.8049 10.3701 3.49446 10.308 3.34128 10.0782L1.34128 7.07822Z" fill="black"/>
</svg>
`;

const Reload = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11.5" r="6.5" fill="currentColor"/>
<path d="M13.3745 5.0382C13.6027 5.19368 13.6616 5.50473 13.5062 5.73294C13.3507 5.96115 13.0396 6.02011 12.8114 5.86463C11.9888 5.30418 11.0178 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.72386 15.2239 9.5 15.5 9.5C15.7761 9.5 16 9.72386 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C11.2202 4 12.3871 4.36553 13.3745 5.0382Z" fill="black"/>
<path d="M12.7691 11.5851C12.5365 11.7339 12.2273 11.6659 12.0785 11.4333C11.9297 11.2006 11.9976 10.8914 12.2302 10.7426L15.7121 8.51555C15.9447 8.36676 16.2539 8.43472 16.4027 8.66734C16.5515 8.89997 16.4835 9.20917 16.2509 9.35796L12.7691 11.5851Z" fill="black"/>
<path d="M17.9468 12.1141C18.0593 12.3663 17.946 12.6619 17.6939 12.7744C17.4417 12.8869 17.146 12.7737 17.0335 12.5215L15.5254 9.14069C15.4129 8.8885 15.5261 8.59286 15.7783 8.48036C16.0305 8.36786 16.3261 8.4811 16.4386 8.73329L17.9468 12.1141Z" fill="black"/>
</svg>
`;

const Scissors = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 19.5C8.15685 19.5 9.5 18.1569 9.5 16.5C9.5 15.8457 9.29051 15.2403 8.93495 14.7472C9.14795 14.7656 9.36732 14.6933 9.53033 14.5303L11.25 12.8107L16.9697 18.5303C17.2626 18.8232 17.7374 18.8232 18.0303 18.5303C18.3232 18.2374 18.3232 17.7626 18.0303 17.4697L12.3107 11.75L18.0303 6.03033C18.3232 5.73744 18.3232 5.26256 18.0303 4.96967C17.7374 4.67678 17.2626 4.67678 16.9697 4.96967L11.25 10.6893L9.53033 8.96967C9.43881 8.87815 9.32953 8.81523 9.21358 8.7809C9.39727 8.39245 9.5 7.95822 9.5 7.5C9.5 5.84315 8.15685 4.5 6.5 4.5C4.84315 4.5 3.5 5.84315 3.5 7.5C3.5 9.15685 4.84315 10.5 6.5 10.5C7.19572 10.5 7.83613 10.2632 8.34501 9.86575C8.37798 9.92472 8.41953 9.98019 8.46967 10.0303L10.1893 11.75L8.46967 13.4697C8.30666 13.6327 8.23438 13.8521 8.25281 14.065C7.75974 13.7095 7.15434 13.5 6.5 13.5C4.84315 13.5 3.5 14.8431 3.5 16.5C3.5 18.1569 4.84315 19.5 6.5 19.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8.5C7.15685 8.5 8.5 7.15685 8.5 5.5C8.5 3.84315 7.15685 2.5 5.5 2.5C3.84315 2.5 2.5 3.84315 2.5 5.5C2.5 7.15685 3.84315 8.5 5.5 8.5ZM5.5 3.5C6.60457 3.5 7.5 4.39543 7.5 5.5C7.5 6.60457 6.60457 7.5 5.5 7.5C4.39543 7.5 3.5 6.60457 3.5 5.5C3.5 4.39543 4.39543 3.5 5.5 3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18.5C7.15685 18.5 8.5 17.1569 8.5 15.5C8.5 13.8431 7.15685 12.5 5.5 12.5C3.84315 12.5 2.5 13.8431 2.5 15.5C2.5 17.1569 3.84315 18.5 5.5 18.5ZM5.5 13.5C6.60457 13.5 7.5 14.3954 7.5 15.5C7.5 16.6046 6.60457 17.5 5.5 17.5C4.39543 17.5 3.5 16.6046 3.5 15.5C3.5 14.3954 4.39543 13.5 5.5 13.5Z" fill="black"/>
<path d="M16.9784 15.7823C17.1764 15.9748 17.1809 16.2913 16.9885 16.4893C16.796 16.6874 16.4795 16.6919 16.2814 16.4994L7.40465 7.87265C7.20662 7.6802 7.2021 7.36365 7.39455 7.16562C7.587 6.96759 7.90355 6.96306 8.10159 7.15552L16.9784 15.7823Z" fill="black"/>
<path d="M7.14645 13.1464C6.95118 13.3417 6.95118 13.6583 7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L16.8536 4.85355C17.0488 4.65829 17.0488 4.34171 16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645L7.14645 13.1464Z" fill="black"/>
</svg>
`;

const Send = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M1.87428 9.45439C1.40175 9.33081 1.36853 8.67265 1.82621 8.50212L17.5413 2.6468C17.9274 2.50295 18.3121 2.86161 18.1955 3.2568L13.4507 19.3421C13.3137 19.8065 12.6626 19.8245 12.5001 19.3684L9.69715 11.5002L1.87428 9.45439Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.874275 7.45439L8.69715 9.50024L11.5001 17.3684C11.6626 17.8245 12.3137 17.8065 12.4507 17.3421L17.1955 1.2568C17.3121 0.861613 16.9274 0.502948 16.5413 0.646803L0.82621 6.50212C0.368533 6.67265 0.401753 7.33081 0.874275 7.45439ZM2.65726 6.88705L15.9534 1.93302L11.9263 15.5851L9.55044 8.91561C9.49494 8.7598 9.36597 8.64152 9.20594 8.59967L2.65726 6.88705Z" fill="black"/>
<path d="M16 1.29291L16.7071 2.00001L9 9.70712L8.29289 9.00001L16 1.29291Z" fill="black"/>
</svg>
`;

const ShareAndroid = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.17451 14.2075C6.82435 14.3942 6.42453 14.5 6 14.5C4.61929 14.5 3.5 13.3807 3.5 12C3.5 10.6193 4.61929 9.5 6 9.5C6.52196 9.5 7.00656 9.65996 7.40745 9.93353L12.5011 6.92362C12.5415 5.57825 13.6448 4.5 15 4.5C16.3807 4.5 17.5 5.61929 17.5 7C17.5 8.38071 16.3807 9.5 15 9.5C14.1422 9.5 13.3853 9.06794 12.935 8.40957L8.34206 11.1236C8.44417 11.3963 8.5 11.6916 8.5 12C8.5 12.3894 8.41096 12.7581 8.25213 13.0866L12.9102 15.6274C13.3571 14.9483 14.1262 14.5 15 14.5C16.3807 14.5 17.5 15.6193 17.5 17C17.5 18.3807 16.3807 19.5 15 19.5C13.6574 19.5 12.562 18.4416 12.5025 17.1137L7.17451 14.2075Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5ZM5 8.5C5.82843 8.5 6.5 9.17157 6.5 10C6.5 10.8284 5.82843 11.5 5 11.5C4.17157 11.5 3.5 10.8284 3.5 10C3.5 9.17157 4.17157 8.5 5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.5C15.3807 7.5 16.5 6.38071 16.5 5C16.5 3.61929 15.3807 2.5 14 2.5C12.6193 2.5 11.5 3.61929 11.5 5C11.5 6.38071 12.6193 7.5 14 7.5ZM14 3.5C14.8284 3.5 15.5 4.17157 15.5 5C15.5 5.82843 14.8284 6.5 14 6.5C13.1716 6.5 12.5 5.82843 12.5 5C12.5 4.17157 13.1716 3.5 14 3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C15.3807 17.5 16.5 16.3807 16.5 15C16.5 13.6193 15.3807 12.5 14 12.5C12.6193 12.5 11.5 13.6193 11.5 15C11.5 16.3807 12.6193 17.5 14 17.5ZM14 13.5C14.8284 13.5 15.5 14.1716 15.5 15C15.5 15.8284 14.8284 16.5 14 16.5C13.1716 16.5 12.5 15.8284 12.5 15C12.5 14.1716 13.1716 13.5 14 13.5Z" fill="black"/>
<path d="M6.75437 9.18048L6.24564 8.31955L11.7456 5.06955L12.2544 5.93048L6.75437 9.18048Z" fill="black"/>
<path d="M12 14.8779L12.4789 14L6.97885 11L6.5 11.8779L12 14.8779Z" fill="black"/>
</svg>
`;

const ShareIos = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.5 9H16.5C17.6046 9 18.5 9.75767 18.5 10.6923V18.3077C18.5 19.2423 17.6046 20 16.5 20H8.5C7.39543 20 6.5 19.2423 6.5 18.3077L6.5 10.6923C6.5 9.75767 7.39543 9 8.5 9H9.5" fill="currentColor"/>
<path d="M9.99832 2.50008C9.99828 2.22394 10.2221 2.00004 10.4982 2C10.7744 1.99996 10.9983 2.22378 10.9983 2.49992L11 12.9999C11 13.2761 10.7762 13.5 10.5001 13.5C10.2239 13.5 10 13.2762 9.99999 13.0001L9.99832 2.50008Z" fill="black"/>
<path d="M10.8201 2.8841C11.0322 2.70732 11.0609 2.39203 10.8841 2.1799C10.7073 1.96776 10.392 1.93909 10.1799 2.11588L7.1799 4.61588C6.96776 4.79266 6.9391 5.10794 7.11588 5.32008C7.29266 5.53222 7.60794 5.56088 7.82008 5.3841L10.8201 2.8841Z" fill="black"/>
<path d="M10.1799 2.8841C9.96775 2.70732 9.93909 2.39203 10.1159 2.1799C10.2927 1.96776 10.6079 1.93909 10.8201 2.11588L13.8201 4.61588C14.0322 4.79266 14.0609 5.10794 13.8841 5.32008C13.7073 5.53222 13.392 5.56088 13.1799 5.3841L10.1799 2.8841Z" fill="black"/>
<path d="M13.2483 9C12.9722 9 12.7483 8.77614 12.7483 8.5C12.7483 8.22386 12.9722 8 13.2483 8L14.165 8C15.4361 8 16.4983 8.89134 16.4983 10.0385V16.9615C16.4983 18.1087 15.4361 19 14.165 19H6.83165C5.5605 19 4.49832 18.1087 4.49832 16.9615L4.49832 10.0385C4.49832 8.89134 5.5605 8 6.83165 8H7.74832C8.02446 8 8.24832 8.22386 8.24832 8.5C8.24832 8.77614 8.02446 9 7.74832 9H6.83165C6.07777 9 5.49832 9.48625 5.49832 10.0385L5.49832 16.9615C5.49832 17.5138 6.07777 18 6.83165 18H14.165C14.9189 18 15.4983 17.5138 15.4983 16.9615L15.4983 10.0385C15.4983 9.48625 14.9189 9 14.165 9H13.2483Z" fill="black"/>
</svg>
`;

const Smartphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6 2.58333C6 1.70888 6.67157 1 7.5 1H16.5C17.3284 1 18 1.70888 18 2.58333V18.4167C18 19.2911 17.3284 20 16.5 20H7.5C6.67157 20 6 19.2911 6 18.4167V2.58333Z" fill="currentColor"/>
</g>
<path d="M5.5 2.54C5.5 2.24177 5.72386 2 6 2H14C14.2761 2 14.5 2.24177 14.5 2.54V14.96C14.5 15.2582 14.2761 15.5 14 15.5H6C5.72386 15.5 5.5 15.2582 5.5 14.96V2.54Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.08333C4 1.20888 4.67157 0.5 5.5 0.5H14.5C15.3284 0.5 16 1.20888 16 2.08333V17.9167C16 18.7911 15.3284 19.5 14.5 19.5H5.5C4.67157 19.5 4 18.7911 4 17.9167V2.08333ZM5.5 1.55556C5.22386 1.55556 5 1.79185 5 2.08333V17.9167C5 18.2082 5.22386 18.4444 5.5 18.4444H14.5C14.7761 18.4444 15 18.2082 15 17.9167V2.08333C15 1.79185 14.7761 1.55556 14.5 1.55556H5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17Z" fill="black"/>
</svg>
`;

const SmartphoneNotch = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6 2.5C6 1.67157 6.67157 1 7.5 1H16.5C17.3284 1 18 1.67157 18 2.5V18.5C18 19.3284 17.3284 20 16.5 20H7.5C6.67157 20 6 19.3284 6 18.5V2.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C4.67157 0.5 4 1.17157 4 2V18C4 18.8284 4.67157 19.5 5.5 19.5H14.5C15.3284 19.5 16 18.8284 16 18V2C16 1.17157 15.3284 0.5 14.5 0.5H5.5ZM5 2C5 1.72386 5.22386 1.5 5.5 1.5H7V2.5C7 2.77614 7.22386 3 7.5 3H12.5C12.7761 3 13 2.77614 13 2.5V1.5H14.5C14.7761 1.5 15 1.72386 15 2V18C15 18.2761 14.7761 18.5 14.5 18.5H5.5C5.22386 18.5 5 18.2761 5 18V2Z" fill="black"/>
</svg>
`;

const Smartphone2 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M7.63636 1H16.3636C17.2674 1 18 1.67157 18 2.5V18.5C18 19.3284 17.2674 20 16.3636 20H7.63636C6.73262 20 6 19.3284 6 18.5V2.5C6 1.67157 6.73262 1 7.63636 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0.5H5.5C4.67157 0.5 4 1.17157 4 2V18C4 18.8284 4.67157 19.5 5.5 19.5H14.5C15.3284 19.5 16 18.8284 16 18V2C16 1.17157 15.3284 0.5 14.5 0.5ZM5 2C5 1.72386 5.22386 1.5 5.5 1.5H14.5C14.7761 1.5 15 1.72386 15 2V18C15 18.2761 14.7761 18.5 14.5 18.5H5.5C5.22386 18.5 5 18.2761 5 18V2Z" fill="black"/>
<path d="M10 18C9.44772 18 9 17.5523 9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18Z" fill="black"/>
</svg>
`;

const SoftDrink = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8.58933 4.5L15.411 4.5C16.5155 4.5 17.411 5.39543 17.411 6.5C17.411 6.58078 17.4061 6.66148 17.3963 6.74167L16.179 16.7417C16.0569 17.7454 15.2048 18.5 14.1937 18.5H9.80944C8.79855 18.5 7.9466 17.7457 7.82417 16.7422L6.60405 6.74223C6.47027 5.64579 7.25066 4.6485 8.3471 4.51472C8.42747 4.50492 8.50836 4.5 8.58933 4.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.411 4.5H6.58933C6.50836 4.5 6.42747 4.50492 6.3471 4.51472C5.25066 4.6485 4.47027 5.64579 4.60405 6.74223L5.82417 16.7422C5.9466 17.7457 6.79855 18.5 7.80944 18.5H12.1937C13.2048 18.5 14.0569 17.7454 14.179 16.7417L15.3963 6.74167C15.4061 6.66148 15.411 6.58078 15.411 6.5C15.411 5.39543 14.5155 4.5 13.411 4.5ZM6.46822 5.50736C6.5084 5.50246 6.54885 5.5 6.58933 5.5H13.411C13.9633 5.5 14.411 5.94772 14.411 6.5C14.411 6.54039 14.4085 6.58074 14.4036 6.62084L13.1864 16.6208C13.1253 17.1227 12.6992 17.5 12.1937 17.5H7.80944C7.304 17.5 6.87802 17.1228 6.81681 16.6211L5.59669 6.62111C5.5298 6.07289 5.92 5.57425 6.46822 5.50736Z" fill="black"/>
<path d="M8.97789 14.647C8.89668 14.911 8.61688 15.0591 8.35295 14.9779C8.08902 14.8967 7.9409 14.6169 8.02211 14.353L12.0221 1.35295C12.1033 1.08902 12.3831 0.940897 12.647 1.02211C12.911 1.10332 13.0591 1.38311 12.9779 1.64704L8.97789 14.647Z" fill="black"/>
<path d="M5.5 10C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9H14.5C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H5.5Z" fill="black"/>
<path d="M12.3787 1.98507C12.1108 1.91809 11.948 1.64663 12.0149 1.37873C12.0819 1.11083 12.3534 0.947951 12.6213 1.01492L16.6213 2.01493C16.8892 2.0819 17.052 2.35337 16.9851 2.62126C16.9181 2.88916 16.6466 3.05204 16.3787 2.98507L12.3787 1.98507Z" fill="black"/>
</svg>
`;

const SpeakerHigh = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9294 12.6016 12.3482 12.2416C12.3761 12.2176 12.4039 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9093 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4039 8.80862 12.3761 8.78242 12.3482 8.75842C11.9294 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8707 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8448 11.9396 14.553 12.5528C14.3731 12.9309 14.143 13.2692 13.8707 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
<path d="M14.5485 16.8362C14.0866 17.1391 13.4667 17.0103 13.1638 16.5484C12.8609 16.0866 12.9897 15.4667 13.4516 15.1638C13.6081 15.0612 13.7594 14.951 13.9049 14.8339C14.0503 14.7168 14.1899 14.5928 14.323 14.4624C14.456 14.3321 14.5824 14.1955 14.7017 14.0532C14.821 13.911 14.933 13.7633 15.0374 13.6105C15.1417 13.4579 15.2383 13.3004 15.3267 13.1386C15.415 12.977 15.4952 12.8112 15.5669 12.6419C15.6384 12.4728 15.7014 12.3004 15.7557 12.125C15.8097 11.9502 15.855 11.7727 15.8913 11.5928C15.9275 11.4138 15.9547 11.2326 15.9729 11.0496C15.9909 10.8679 16 10.6846 16 10.5C16 10.3154 15.9909 10.1321 15.9729 9.95036C15.9547 9.76741 15.9275 9.5862 15.8913 9.40717C15.855 9.2273 15.8097 9.04974 15.7557 8.87497C15.7014 8.69959 15.6384 8.52714 15.5669 8.35813C15.4952 8.18878 15.415 8.02302 15.3267 7.86141C15.2383 7.69962 15.1417 7.54212 15.0374 7.38948C14.933 7.2367 14.821 7.08893 14.7017 6.94674C14.5824 6.80444 14.456 6.66786 14.323 6.53754C14.1899 6.40715 14.0503 6.28316 13.9049 6.16607C13.7594 6.04894 13.6081 5.93883 13.4516 5.83618C12.9897 5.53328 12.8609 4.91335 13.1638 4.45154C13.4667 3.98973 14.0866 3.86091 14.5485 4.16381C14.7592 4.30203 14.9629 4.45032 15.159 4.6081C15.355 4.76592 15.5431 4.93308 15.7226 5.10894C15.9022 5.28486 16.0729 5.46933 16.2342 5.66164C16.3956 5.85405 16.5473 6.05413 16.6887 6.26116C16.8303 6.46829 16.9614 6.68217 17.0816 6.90207C17.2018 7.12203 17.311 7.34779 17.4087 7.57861C17.5063 7.80921 17.5923 8.04464 17.6664 8.28415C17.7402 8.52295 17.8021 8.76558 17.8517 9.01133C17.9011 9.25581 17.9383 9.50315 17.9631 9.75269C17.9876 10.0001 18 10.2494 18 10.5C18 10.7506 17.9876 10.9999 17.9631 11.2473C17.9383 11.4968 17.9011 11.7442 17.8517 11.9887C17.8021 12.2344 17.7402 12.477 17.6664 12.7158C17.5923 12.9553 17.5063 13.1908 17.4087 13.4214C17.311 13.6522 17.2018 13.878 17.0816 14.0979C16.9614 14.3178 16.8303 14.5317 16.6887 14.7388C16.5473 14.9458 16.3956 15.1459 16.2342 15.3383C16.0729 15.5307 15.9022 15.7151 15.7226 15.891C15.5431 16.0669 15.355 16.2341 15.159 16.3919C14.9629 16.5497 14.7592 16.698 14.5485 16.8362Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.7139 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.7139 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4512 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4512 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
<path d="M14.2742 14.9181C14.0433 15.0695 13.7334 15.0051 13.5819 14.7742C13.4305 14.5433 13.4949 14.2334 13.7258 14.0819C13.8958 13.9704 14.0602 13.8507 14.2184 13.7234C14.3765 13.5961 14.5282 13.4614 14.6729 13.3196C14.8175 13.1779 14.955 13.0293 15.0848 12.8745C15.2146 12.7198 15.3366 12.5589 15.4502 12.3926C15.5638 12.2263 15.669 12.0547 15.7654 11.8784C15.8617 11.7022 15.9492 11.5215 16.0273 11.3367C16.1054 11.1523 16.1742 10.9641 16.2333 10.7727C16.2923 10.5819 16.3418 10.3881 16.3814 10.1918C16.4209 9.99639 16.4506 9.79864 16.4704 9.59904C16.4901 9.40092 16.5 9.20109 16.5 9C16.5 8.7989 16.4901 8.59907 16.4704 8.40095C16.4506 8.20135 16.4209 8.00361 16.3814 7.80821C16.3418 7.61187 16.2923 7.41805 16.2333 7.22727C16.1742 7.03585 16.1054 6.84766 16.0273 6.66326C15.9492 6.47854 15.8617 6.29778 15.7654 6.12158C15.669 5.94526 15.5638 5.77367 15.4502 5.60741C15.3366 5.44106 15.2146 5.28022 15.0848 5.12547C14.955 4.97066 14.8175 4.82212 14.6729 4.68039C14.5282 4.53864 14.3765 4.40386 14.2184 4.27658C14.0602 4.14929 13.8958 4.02963 13.7258 3.91809C13.4949 3.76664 13.4305 3.45668 13.5819 3.22577C13.7334 2.99487 14.0433 2.93045 14.2742 3.0819C14.4714 3.21123 14.662 3.34998 14.8454 3.4976C15.0288 3.64523 15.2048 3.8016 15.3727 3.96609C15.5406 4.13062 15.7003 4.30311 15.8511 4.48292C16.0019 4.66278 16.1437 4.84978 16.2759 5.04324C16.4081 5.23675 16.5306 5.43654 16.6429 5.64191C16.7551 5.84728 16.8571 6.05804 16.9483 6.27349C17.0393 6.4887 17.1196 6.70838 17.1887 6.93186C17.2576 7.15465 17.3153 7.38101 17.3616 7.6103C17.4077 7.83841 17.4424 8.06922 17.4655 8.30211C17.4885 8.53306 17.5 8.76588 17.5 9C17.5 9.23411 17.4885 9.46693 17.4655 9.69788C17.4424 9.93077 17.4077 10.1616 17.3616 10.3897C17.3153 10.619 17.2576 10.8453 17.1887 11.0681C17.1196 11.2916 17.0393 11.5113 16.9483 11.7265C16.8571 11.9419 16.7551 12.1527 16.6429 12.3581C16.5306 12.5635 16.4081 12.7632 16.2759 12.9567C16.1437 13.1502 16.0019 13.3372 15.8511 13.5171C15.7003 13.6969 15.5406 13.8694 15.3727 14.0339C15.2048 14.1984 15.0288 14.3548 14.8454 14.5024C14.662 14.65 14.4714 14.7888 14.2742 14.9181Z" fill="black"/>
</svg>
`;

const SpeakerLow = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9293 12.6016 12.3482 12.2416C12.3761 12.2176 12.4038 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9092 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4038 8.80862 12.3761 8.78242 12.3482 8.75842C11.9293 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8706 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8447 11.9396 14.553 12.5528C14.373 12.9309 14.143 13.2692 13.8706 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.714 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.714 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4513 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4513 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
</svg>
`;

const SpeakerOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9293 12.6016 12.3482 12.2416C12.3761 12.2176 12.4038 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9092 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4038 8.80862 12.3761 8.78242 12.3482 8.75842C11.9293 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8706 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8447 11.9396 14.553 12.5528C14.373 12.9309 14.143 13.2692 13.8706 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
<path d="M14.5484 16.8362C14.0866 17.1391 13.4667 17.0103 13.1638 16.5484C12.8609 16.0866 12.9897 15.4667 13.4515 15.1638C13.608 15.0612 13.7593 14.951 13.9048 14.8339C14.0503 14.7168 14.1899 14.5928 14.3229 14.4624C14.456 14.3321 14.5824 14.1955 14.7017 14.0532C14.8209 13.911 14.933 13.7633 15.0374 13.6105C15.1417 13.4579 15.2382 13.3004 15.3267 13.1386C15.415 12.977 15.4952 12.8112 15.5669 12.6419C15.6384 12.4728 15.7014 12.3004 15.7556 12.125C15.8097 11.9502 15.855 11.7727 15.8913 11.5928C15.9274 11.4138 15.9547 11.2326 15.9729 11.0496C15.9909 10.8679 16 10.6846 16 10.5C16 10.3154 15.9909 10.1321 15.9729 9.95036C15.9547 9.76741 15.9274 9.5862 15.8913 9.40717C15.855 9.2273 15.8097 9.04974 15.7556 8.87497C15.7014 8.69959 15.6384 8.52714 15.5669 8.35813C15.4952 8.18878 15.415 8.02302 15.3267 7.86141C15.2382 7.69962 15.1417 7.54212 15.0374 7.38948C14.933 7.2367 14.8209 7.08893 14.7017 6.94674C14.5824 6.80444 14.456 6.66786 14.3229 6.53754C14.1899 6.40715 14.0503 6.28316 13.9048 6.16607C13.7593 6.04894 13.608 5.93883 13.4515 5.83618C12.9897 5.53328 12.8609 4.91335 13.1638 4.45154C13.4667 3.98973 14.0866 3.86091 14.5484 4.16381C14.7592 4.30203 14.9629 4.45032 15.1589 4.6081C15.355 4.76592 15.5431 4.93308 15.7226 5.10894C15.9022 5.28486 16.0729 5.46933 16.2342 5.66164C16.3955 5.85405 16.5473 6.05413 16.6887 6.26116C16.8302 6.46829 16.9614 6.68217 17.0816 6.90207C17.2018 7.12203 17.311 7.34779 17.4087 7.57861C17.5063 7.80921 17.5923 8.04464 17.6664 8.28415C17.7402 8.52295 17.8021 8.76558 17.8517 9.01133C17.9011 9.25581 17.9383 9.50315 17.9631 9.75269C17.9876 10.0001 18 10.2494 18 10.5C18 10.7506 17.9876 10.9999 17.9631 11.2473C17.9383 11.4968 17.9011 11.7442 17.8517 11.9887C17.8021 12.2344 17.7402 12.477 17.6664 12.7158C17.5923 12.9553 17.5063 13.1908 17.4087 13.4214C17.311 13.6522 17.2018 13.878 17.0816 14.0979C16.9614 14.3178 16.8302 14.5317 16.6887 14.7388C16.5473 14.9458 16.3955 15.1459 16.2342 15.3383C16.0729 15.5307 15.9022 15.7151 15.7226 15.891C15.5431 16.0669 15.355 16.2341 15.1589 16.3919C14.9629 16.5497 14.7592 16.698 14.5484 16.8362Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.714 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.714 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4513 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4513 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
<path d="M14.2743 14.9181C14.0433 15.0695 13.7334 15.0051 13.5819 14.7742C13.4305 14.5433 13.4949 14.2334 13.7258 14.0819C13.8959 13.9704 14.0603 13.8507 14.2184 13.7234C14.3765 13.5961 14.5282 13.4614 14.6729 13.3196C14.8175 13.1779 14.9551 13.0293 15.0849 12.8745C15.2146 12.7198 15.3366 12.5589 15.4502 12.3926C15.5638 12.2263 15.6691 12.0547 15.7654 11.8784C15.8618 11.7022 15.9492 11.5215 16.0274 11.3367C16.1054 11.1523 16.1742 10.9641 16.2334 10.7727C16.2924 10.5819 16.3418 10.3881 16.3814 10.1918C16.4209 9.99639 16.4506 9.79864 16.4704 9.59904C16.4901 9.40092 16.5 9.20109 16.5 9C16.5 8.7989 16.4901 8.59907 16.4704 8.40095C16.4506 8.20135 16.4209 8.00361 16.3814 7.80821C16.3418 7.61187 16.2924 7.41805 16.2334 7.22727C16.1742 7.03585 16.1054 6.84766 16.0274 6.66326C15.9492 6.47854 15.8618 6.29778 15.7654 6.12158C15.6691 5.94526 15.5638 5.77367 15.4502 5.60741C15.3366 5.44106 15.2146 5.28022 15.0849 5.12547C14.9551 4.97066 14.8175 4.82212 14.6729 4.68039C14.5282 4.53864 14.3765 4.40386 14.2184 4.27658C14.0603 4.14929 13.8959 4.02963 13.7258 3.91809C13.4949 3.76664 13.4305 3.45668 13.5819 3.22577C13.7334 2.99487 14.0433 2.93045 14.2743 3.0819C14.4714 3.21123 14.6621 3.34998 14.8454 3.4976C15.0289 3.64523 15.2048 3.8016 15.3727 3.96609C15.5407 4.13062 15.7003 4.30311 15.8511 4.48292C16.0019 4.66278 16.1437 4.84978 16.2759 5.04324C16.4081 5.23675 16.5306 5.43654 16.6429 5.64191C16.7552 5.84728 16.8571 6.05804 16.9483 6.27349C17.0394 6.4887 17.1196 6.70838 17.1887 6.93186C17.2576 7.15465 17.3154 7.38101 17.3617 7.6103C17.4077 7.83841 17.4424 8.06922 17.4655 8.30211C17.4885 8.53306 17.5 8.76588 17.5 9C17.5 9.23411 17.4885 9.46693 17.4655 9.69788C17.4424 9.93077 17.4077 10.1616 17.3617 10.3897C17.3154 10.619 17.2576 10.8453 17.1887 11.0681C17.1196 11.2916 17.0394 11.5113 16.9483 11.7265C16.8571 11.9419 16.7552 12.1527 16.6429 12.3581C16.5306 12.5635 16.4081 12.7632 16.2759 12.9567C16.1437 13.1502 16.0019 13.3372 15.8511 13.5171C15.7003 13.6969 15.5407 13.8694 15.3727 14.0339C15.2048 14.1984 15.0289 14.3548 14.8454 14.5024C14.6621 14.65 14.4714 14.7888 14.2743 14.9181Z" fill="black"/>
<path d="M1.68216 3.38598C1.469 3.21043 1.4385 2.89532 1.61405 2.68216C1.78959 2.469 2.10471 2.4385 2.31787 2.61405L19.3179 16.614C19.531 16.7896 19.5615 17.1047 19.386 17.3179C19.2104 17.531 18.8953 17.5615 18.6822 17.386L1.68216 3.38598Z" fill="black"/>
</svg>
`;

const Square = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8 7H16C16.2761 7 16.5 7.22386 16.5 7.5V15.5C16.5 15.7761 16.2761 16 16 16H8C7.72386 16 7.5 15.7761 7.5 15.5V7.5C7.5 7.22386 7.72386 7 8 7Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V14C5.5 14.2761 5.72386 14.5 6 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V6C14.5 5.72386 14.2761 5.5 14 5.5ZM6.5 13.5V6.5H13.5V13.5H6.5Z" fill="black"/>
</svg>
`;

const Star = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 15.8995L6.86475 18L7.39781 12.8702L4 9.03851L8.96471 7.96859L11.5 3.5L14.0353 7.96859L19 9.03851L15.6022 12.8702L16.1353 18L11.5 15.8995Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57112 17.4554L10 15.4484L14.4289 17.4554C14.7806 17.6148 15.1725 17.3324 15.1326 16.9483L14.6222 12.0373L17.8741 8.37025C18.1279 8.08399 17.9793 7.63033 17.6053 7.54973L12.8596 6.52701L10.4349 2.25327C10.2433 1.91558 9.75671 1.91558 9.56511 2.25327L7.14037 6.52701L2.39466 7.54973C2.02066 7.63033 1.87206 8.08399 2.1259 8.37025L5.37774 12.0373L4.86742 16.9483C4.82751 17.3324 5.21944 17.6148 5.57112 17.4554ZM9.79362 14.4441L5.95214 16.1849L6.39513 11.9218C6.40962 11.7824 6.36491 11.6433 6.2719 11.5384L3.44185 8.34701L7.57004 7.45737C7.70936 7.42735 7.82925 7.33929 7.89958 7.21533L10 3.51324L12.1004 7.21533C12.1707 7.33929 12.2906 7.42735 12.43 7.45737L16.5581 8.34701L13.7281 11.5384C13.6351 11.6433 13.5904 11.7824 13.6049 11.9218L14.0479 16.1849L10.2064 14.4441C10.0752 14.3846 9.92479 14.3846 9.79362 14.4441Z" fill="black"/>
</svg>
`;

const Sun = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z" fill="currentColor"/>
<path d="M1 10.5C1 9.94772 1.44772 9.5 2 9.5H4C4.55228 9.5 5 9.94772 5 10.5C5 11.0523 4.55228 11.5 4 11.5H2C1.44772 11.5 1 11.0523 1 10.5Z" fill="currentColor"/>
<path d="M16 10.5C16 9.94772 16.4477 9.5 17 9.5H19C19.5523 9.5 20 9.94772 20 10.5C20 11.0523 19.5523 11.5 19 11.5H17C16.4477 11.5 16 11.0523 16 10.5Z" fill="currentColor"/>
<path d="M14.5 14.5C14.8905 14.1095 15.5237 14.1095 15.9142 14.5L17.3284 15.9142C17.719 16.3047 17.719 16.9379 17.3284 17.3284C16.9379 17.7189 16.3047 17.7189 15.9142 17.3284L14.5 15.9142C14.1095 15.5237 14.1095 14.8905 14.5 14.5Z" fill="currentColor"/>
<path d="M3.5 3.49999C3.89052 3.10946 4.52369 3.10946 4.91421 3.49999L6.32843 4.9142C6.71895 5.30472 6.71895 5.93789 6.32843 6.32841C5.9379 6.71894 5.30474 6.71894 4.91421 6.32841L3.5 4.9142C3.10947 4.52367 3.10947 3.89051 3.5 3.49999Z" fill="currentColor"/>
<path d="M10.5 16C11.0523 16 11.5 16.4477 11.5 17V19C11.5 19.5523 11.0523 20 10.5 20C9.94772 20 9.5 19.5523 9.5 19V17C9.5 16.4477 9.94772 16 10.5 16Z" fill="currentColor"/>
<path d="M10.5 1C11.0523 1 11.5 1.44772 11.5 2V4C11.5 4.55228 11.0523 5 10.5 5C9.94772 5 9.5 4.55228 9.5 4V2C9.5 1.44772 9.94772 1 10.5 1Z" fill="currentColor"/>
<path d="M17.3284 3.50001C17.719 3.89054 17.719 4.5237 17.3284 4.91423L15.9142 6.32844C15.5237 6.71897 14.8905 6.71897 14.5 6.32844C14.1095 5.93792 14.1095 5.30475 14.5 4.91423L15.9142 3.50001C16.3047 3.10949 16.9379 3.10949 17.3284 3.50001Z" fill="currentColor"/>
<path d="M6.32843 14.5C6.71895 14.8905 6.71895 15.5237 6.32843 15.9142L4.91422 17.3284C4.52369 17.719 3.89053 17.719 3.5 17.3284C3.10948 16.9379 3.10948 16.3048 3.5 15.9142L4.91422 14.5C5.30474 14.1095 5.93791 14.1095 6.32843 14.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5ZM10 7.5C11.3807 7.5 12.5 8.61929 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5Z" fill="black"/>
<rect x="1" y="10.5" width="1" height="3" rx="0.5" transform="rotate(-90 1 10.5)" fill="black"/>
<rect x="16" y="10.5" width="1" height="3" rx="0.5" transform="rotate(-90 16 10.5)" fill="black"/>
<rect x="14" y="14.7071" width="1" height="3" rx="0.5" transform="rotate(-45 14 14.7071)" fill="black"/>
<rect x="3" y="3.70709" width="1" height="3" rx="0.5" transform="rotate(-45 3 3.70709)" fill="black"/>
<rect x="9.5" y="16" width="1" height="3" rx="0.5" fill="black"/>
<rect x="9.5" y="1" width="1" height="3" rx="0.5" fill="black"/>
<rect x="16.1213" y="3" width="1" height="3" rx="0.5" transform="rotate(45 16.1213 3)" fill="black"/>
<rect x="5.12132" y="14" width="1" height="3" rx="0.5" transform="rotate(45 5.12132 14)" fill="black"/>
</svg>
`;

const Syringe = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.55475 18.4941C9.84765 18.787 9.84765 19.2619 9.55475 19.5547C9.26186 19.8476 8.78699 19.8476 8.49409 19.5547L6.01777 17.0784L5.32844 17.7678L6.16943 18.6088C6.46232 18.9016 6.46232 19.3765 6.16943 19.6694C5.87653 19.9623 5.40166 19.9623 5.10877 19.6694L2.28034 16.841C1.98745 16.5481 1.98745 16.0732 2.28034 15.7803C2.57323 15.4874 3.04811 15.4874 3.341 15.7803L4.26778 16.7071L4.95711 16.0178L2.53034 13.591C2.23745 13.2981 2.23745 12.8232 2.53034 12.5303C2.82323 12.2374 3.29811 12.2374 3.591 12.5303L4.65892 13.5983C4.73279 13.2219 4.91552 12.8627 5.20712 12.5711L12.1858 5.59241C12.5661 5.21212 13.0835 5.00102 13.6213 5.00673L14.9961 5.02136C15.2664 5.02423 15.524 5.08071 15.7586 5.18073L18.4697 2.46967C18.7626 2.17678 19.2374 2.17678 19.5303 2.46967C19.8232 2.76256 19.8232 3.23744 19.5303 3.53033L16.8177 6.24297C16.9132 6.46896 16.9684 6.71627 16.9743 6.97596L17.0062 8.38307C17.0185 8.92907 16.8071 9.45638 16.4209 9.84256L9.44976 16.8137C9.15816 17.1053 8.79893 17.288 8.42257 17.3619L9.55475 18.4941Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.20713 11.5711C2.42608 12.3521 2.42608 13.6184 3.20713 14.3995L4.62134 15.8137C5.40239 16.5947 6.66872 16.5947 7.44977 15.8137L14.4209 8.84254C14.8071 8.45636 15.0186 7.92906 15.0062 7.38305L14.9743 5.97595C14.9499 4.89756 14.0747 4.03281 12.9961 4.02134L11.6213 4.00672C11.0835 4.001 10.5661 4.2121 10.1858 4.59239L3.20713 11.5711ZM13.7138 8.13544L6.74266 15.1066C6.35214 15.4971 5.71897 15.4971 5.32845 15.1066L3.91423 13.6924C3.52371 13.3018 3.52371 12.6687 3.91423 12.2782L10.8929 5.2995C11.083 5.10936 11.3417 5.0038 11.6106 5.00666L12.9855 5.02128C13.5248 5.02702 13.9624 5.45939 13.9746 5.99859L14.0064 7.40569C14.0126 7.67869 13.9069 7.94235 13.7138 8.13544Z" fill="black"/>
<path d="M9.52082 12.1066C9.71608 12.3019 9.71608 12.6185 9.52082 12.8137C9.32556 13.009 9.00898 13.009 8.81371 12.8137L7.3995 11.3995C7.20424 11.2042 7.20424 10.8877 7.3995 10.6924C7.59476 10.4971 7.91134 10.4971 8.10661 10.6924L9.52082 12.1066Z" fill="black"/>
<path d="M3.56397 17.7635C3.75923 17.9587 3.75923 18.2753 3.56397 18.4706C3.36871 18.6658 3.05213 18.6658 2.85687 18.4706L0.328438 15.9421C0.133176 15.7469 0.133176 15.4303 0.328438 15.235C0.5237 15.0398 0.840283 15.0398 1.03554 15.235L3.56397 17.7635Z" fill="black"/>
<path d="M7.35355 17.6464C7.54882 17.8417 7.54882 18.1583 7.35355 18.3535C7.15829 18.5488 6.84171 18.5488 6.64645 18.3535L0.646447 12.3535C0.451185 12.1583 0.451185 11.8417 0.646447 11.6464C0.841709 11.4512 1.15829 11.4512 1.35355 11.6464L7.35355 17.6464Z" fill="black"/>
<path d="M11.6422 9.98527C11.8374 10.1805 11.8374 10.4971 11.6422 10.6924C11.4469 10.8876 11.1303 10.8876 10.9351 10.6924L9.52084 9.27816C9.32558 9.0829 9.32558 8.76632 9.52084 8.57106C9.7161 8.37579 10.0327 8.37579 10.2279 8.57106L11.6422 9.98527Z" fill="black"/>
<path d="M2 17.4571L1.29289 16.75L3.75 14.2929L4.45711 15L2 17.4571Z" fill="black"/>
<path d="M16.8536 1.35354C17.0488 1.15828 17.3654 1.15828 17.5607 1.35354C17.7559 1.5488 17.7559 1.86538 17.5607 2.06065L14.5607 5.06065C14.3654 5.25591 14.0488 5.25591 13.8536 5.06065C13.6583 4.86538 13.6583 4.5488 13.8536 4.35354L16.8536 1.35354Z" fill="black"/>
</svg>
`;

const TShirt = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4.83164 10.4263L3.66594 11.0085C3.37505 11.1538 3.02504 10.9872 2.95445 10.6697L2.01194 6.43208C1.97476 6.26493 2.02571 6.09038 2.14696 5.96947L4.39316 3.7297C4.86179 3.26241 5.49659 3 6.15839 3L8.16531 3C8.40867 3 8.61669 3.17521 8.65804 3.41503C8.94393 5.07298 9.69694 5.82353 10.9981 5.82353C12.2993 5.82353 13.053 5.0728 13.34 3.41473C13.3815 3.17505 13.5894 3 13.8327 3H15.84C16.5015 3 17.136 3.26216 17.6046 3.72907L19.8529 5.96934C19.9743 6.09033 20.0253 6.26507 19.988 6.43237L19.0435 10.6677C18.9728 10.9847 18.6232 11.1512 18.3325 11.0064L17.1663 10.4254V17.5C17.1663 18.8807 16.047 20 14.6663 20H7.33164C5.95093 20 4.83164 18.8807 4.83164 17.5V10.4263Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66811 10.0085L3.83381 9.42628V16.5C3.83381 17.8807 4.95309 19 6.33381 19H13.6685C15.0492 19 16.1685 17.8807 16.1685 16.5V9.42537L17.3347 10.0064C17.6254 10.1512 17.9749 9.9847 18.0456 9.66766L18.9902 5.43237C19.0275 5.26507 18.9765 5.09033 18.8551 4.96934L16.6068 2.72907C16.1382 2.26216 15.5037 2 14.8422 2H12.8348C12.5916 2 12.3836 2.17505 12.3422 2.41473C12.0552 4.0728 11.3015 4.82353 10.0002 4.82353C8.69911 4.82353 7.9461 4.07298 7.66021 2.41503C7.61885 2.17521 7.41084 2 7.16748 2H5.16056C4.49876 2 3.86396 2.26241 3.39532 2.7297L1.14913 4.96947C1.02787 5.09038 0.976925 5.26493 1.0141 5.43208L1.95662 9.66975C2.02721 9.98715 2.37721 10.1538 2.66811 10.0085ZM5.16056 3H6.75927C7.1952 4.84 8.2974 5.82353 10.0002 5.82353C11.7031 5.82353 12.8058 4.84005 13.2428 3H14.8422C15.2391 3 15.6198 3.1573 15.9009 3.43744L17.9542 5.4834L17.2087 8.82637L15.8915 8.17011C15.5591 8.0045 15.1685 8.24627 15.1685 8.61765V16.5C15.1685 17.3284 14.4969 18 13.6685 18H6.33381C5.50538 18 4.83381 17.3284 4.83381 16.5V8.61765C4.83381 8.24605 4.44283 8.0043 4.11039 8.17034L2.79382 8.82792L2.04995 5.48341L4.10142 3.43782C4.3826 3.15745 4.76348 3 5.16056 3Z" fill="black"/>
<path d="M12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5H14C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H12Z" fill="black"/>
</svg>
`;

const Taxi = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.5C13 2.67157 12.3284 2 11.5 2C10.6716 2 10 2.67157 10 3.5C10 3.67532 10.0301 3.84361 10.0854 4H7.67116C6.75343 4 5.95346 4.62459 5.73088 5.51493L4.59959 10.0401C3.6869 10.2256 3 11.0326 3 12V15C3 15.8061 3.4769 16.5008 4.16396 16.8174C4.05913 17.0222 4 17.2542 4 17.5V18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5V17.5C7 17.3247 6.96992 17.1564 6.91465 17H16.0854C16.0301 17.1564 16 17.3247 16 17.5V18.5C16 19.3284 16.6716 20 17.5 20C18.3284 20 19 19.3284 19 18.5V17.5C19 17.2542 18.9409 17.0222 18.836 16.8174C19.5231 16.5008 20 15.8061 20 15V12C20 11.0326 19.3131 10.2256 18.4004 10.0401L17.2691 5.51493C17.0465 4.62459 16.2466 4 15.3288 4H12.9146C12.9699 3.84361 13 3.67532 13 3.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17116 3C5.25343 3 4.45346 3.62459 4.23088 4.51493L3.09959 9.04009C2.1869 9.22556 1.5 10.0326 1.5 11V14C1.5 15.1046 2.39543 16 3.5 16H16.5C17.6046 16 18.5 15.1046 18.5 14V11C18.5 10.0326 17.8131 9.22556 16.9004 9.04009L15.7691 4.51493C15.5465 3.62459 14.7466 3 13.8288 3H6.17116ZM3.5 10C3.72943 10 3.92943 9.84385 3.98507 9.62127L5.20102 4.75746C5.31231 4.3123 5.7123 4 6.17116 4H13.8288C14.2877 4 14.6877 4.3123 14.799 4.75746L16.0149 9.62127C16.0706 9.84385 16.2706 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11V14C17.5 14.5523 17.0523 15 16.5 15H3.5C2.94772 15 2.5 14.5523 2.5 14V11C2.5 10.4477 2.94772 10 3.5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 14C15.8284 14 16.5 13.3284 16.5 12.5C16.5 11.6716 15.8284 11 15 11C14.1716 11 13.5 11.6716 13.5 12.5C13.5 13.3284 14.1716 14 15 14ZM15 12C15.2761 12 15.5 12.2239 15.5 12.5C15.5 12.7761 15.2761 13 15 13C14.7239 13 14.5 12.7761 14.5 12.5C14.5 12.2239 14.7239 12 15 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 14C5.82843 14 6.5 13.3284 6.5 12.5C6.5 11.6716 5.82843 11 5 11C4.17157 11 3.5 11.6716 3.5 12.5C3.5 13.3284 4.17157 14 5 14ZM5 12C5.27614 12 5.5 12.2239 5.5 12.5C5.5 12.7761 5.27614 13 5 13C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16.5C5.5 15.6716 4.82843 15 4 15C3.17157 15 2.5 15.6716 2.5 16.5V17.5C2.5 18.3284 3.17157 19 4 19C4.82843 19 5.5 18.3284 5.5 17.5V16.5ZM3.5 16.5C3.5 16.2239 3.72386 16 4 16C4.27614 16 4.5 16.2239 4.5 16.5V17.5C4.5 17.7761 4.27614 18 4 18C3.72386 18 3.5 17.7761 3.5 17.5V16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16.5C17.5 15.6716 16.8284 15 16 15C15.1716 15 14.5 15.6716 14.5 16.5V17.5C14.5 18.3284 15.1716 19 16 19C16.8284 19 17.5 18.3284 17.5 17.5V16.5ZM15.5 16.5C15.5 16.2239 15.7239 16 16 16C16.2761 16 16.5 16.2239 16.5 16.5V17.5C16.5 17.7761 16.2761 18 16 18C15.7239 18 15.5 17.7761 15.5 17.5V16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6476 5H7.35207C6.66122 5 6.05971 5.47186 5.89521 6.14284L5.4049 8.14284C5.37624 8.25973 5.36176 8.37965 5.36176 8.5C5.36176 9.32843 6.03333 10 6.86176 10H13.1379C13.2582 10 13.3781 9.98552 13.495 9.95686C14.2996 9.7596 14.792 8.94744 14.5947 8.14284L14.1044 6.14284C13.9399 5.47186 13.3384 5 12.6476 5ZM6.86645 6.38095C6.92128 6.15729 7.12179 6 7.35207 6H12.6476C12.8779 6 13.0784 6.15729 13.1332 6.38095L13.6235 8.38095C13.6893 8.64915 13.5251 8.91987 13.2569 8.98562C13.218 8.99517 13.178 9 13.1379 9H6.86176C6.58561 9 6.36176 8.77614 6.36176 8.5C6.36176 8.45988 6.36658 8.41991 6.37614 8.38095L6.86645 6.38095Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.5C11.5 1.67157 10.8284 1 10 1C9.17157 1 8.5 1.67157 8.5 2.5C8.5 3.32843 9.17157 4 10 4C10.8284 4 11.5 3.32843 11.5 2.5ZM9.5 2.5C9.5 2.22386 9.72386 2 10 2C10.2761 2 10.5 2.22386 10.5 2.5C10.5 2.77614 10.2761 3 10 3C9.72386 3 9.5 2.77614 9.5 2.5Z" fill="black"/>
</svg>
`;

const Television = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.42442L13.9143 3.03148C14.539 2.25061 15.7103 3.18765 15.0857 3.96852L13.4605 6H16C17.6569 6 19 7.34315 19 9V14C19 15.6569 17.6569 17 16 17H8.5C6.84315 17 5.5 15.6569 5.5 14V9C5.5 7.34315 6.84315 6 8.5 6H10.5395L8.91435 3.96852C8.28965 3.18765 9.46096 2.25061 10.0857 3.03148L12 5.42442Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 9V14C3.25 15.6569 4.59315 17 6.25 17H13.75C15.4069 17 16.75 15.6569 16.75 14V9C16.75 7.34315 15.4069 6 13.75 6H6.25C4.59315 6 3.25 7.34315 3.25 9ZM6.25 16C5.14543 16 4.25 15.1046 4.25 14V9C4.25 7.89543 5.14543 7 6.25 7H13.75C14.8546 7 15.75 7.89543 15.75 9V14C15.75 15.1046 14.8546 16 13.75 16H6.25Z" fill="black"/>
<path d="M9.85957 5.68765L11.8596 3.18765C12.276 2.66707 13.0569 3.29177 12.6404 3.81235L10.6404 6.31235C10.224 6.83293 9.4431 6.20823 9.85957 5.68765Z" fill="black"/>
<path d="M8.85957 6.31235L6.85957 3.81235C6.4431 3.29177 7.22397 2.66707 7.64044 3.18765L9.64044 5.68765C10.0569 6.20823 9.27603 6.83293 8.85957 6.31235Z" fill="black"/>
</svg>
`;

const TextBubble = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V14.1024C20 15.207 19.1046 16.1024 18 16.1024H10.4508C10.4508 16.1024 8.36316 18 7.70388 18C7.04461 18 6.64753 16.1024 6.64753 16.1024H6C4.89543 16.1024 4 15.207 4 14.1024V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12.1024C1.5 13.4832 2.61929 14.6024 4 14.6024H4.24871C4.55632 15.8396 4.99016 16.5 5.70388 16.5C6.3065 16.5 7.22282 15.8804 8.64333 14.6024H16C17.3807 14.6024 18.5 13.4832 18.5 12.1024V6C18.5 4.61929 17.3807 3.5 16 3.5H4C2.61929 3.5 1.5 4.61929 1.5 6V12.1024ZM2.5 12.1024V6C2.5 5.17157 3.17157 4.5 4 4.5H16C16.8284 4.5 17.5 5.17157 17.5 6V12.1024C17.5 12.9309 16.8284 13.6024 16 13.6024H8.25749L8.11447 13.7325C6.8338 14.8965 5.96021 15.5 5.70388 15.5C5.61157 15.5 5.35398 15.0373 5.13693 14L5.05373 13.6024H4C3.17157 13.6024 2.5 12.9309 2.5 12.1024Z" fill="black"/>
<circle cx="7" cy="9" r="1" fill="black"/>
<circle cx="10" cy="9" r="1" fill="black"/>
<circle cx="13" cy="9" r="1" fill="black"/>
</svg>
`;

const Times = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.13197 6.47653C5.56672 7.08215 5.59945 8.03134 6.20507 8.59659L8.78016 11L6.20507 13.4034C5.59945 13.9687 5.56672 14.9179 6.13197 15.5235C6.69722 16.1291 7.6464 16.1618 8.25203 15.5966L10.9786 13.0518L13.7051 15.5966C14.3107 16.1618 15.2599 16.1291 15.8251 15.5235C16.3904 14.9179 16.3577 13.9687 15.752 13.4034L13.1769 11L15.752 8.59659C16.3577 8.03134 16.3904 7.08215 15.8251 6.47653C15.2599 5.8709 14.3107 5.83817 13.7051 6.40342L10.9786 8.94818L8.25203 6.40342C7.6464 5.83817 6.69722 5.8709 6.13197 6.47653Z" fill="currentColor"/>
</g>
<path d="M6.85355 13.8536C6.65829 14.0488 6.34171 14.0488 6.14645 13.8536C5.95118 13.6583 5.95118 13.3417 6.14645 13.1464L13.1464 6.14645C13.3417 5.95118 13.6583 5.95118 13.8536 6.14645C14.0488 6.34171 14.0488 6.65829 13.8536 6.85355L6.85355 13.8536Z" fill="black"/>
<path d="M6.14645 6.85355C5.95118 6.65829 5.95118 6.34171 6.14645 6.14645C6.34171 5.95118 6.65829 5.95118 6.85355 6.14645L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L6.14645 6.85355Z" fill="black"/>
</svg>
`;

const Tool = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13.3009 7.83234L18.6032 14.1514C19.4907 15.209 19.3527 16.7859 18.2951 17.6734C17.2374 18.5609 15.6605 18.423 14.773 17.3653L9.47069 11.0463C9.34745 10.8994 9.23887 10.7414 9.14621 10.5746C7.79248 10.6159 6.43651 10.0062 5.50129 8.89166C4.31872 7.48233 4.058 5.56096 4.81272 4.02998C4.97237 3.70613 5.41213 3.65308 5.64421 3.92966L7.38568 6.00506C7.56318 6.2166 7.87856 6.24419 8.0901 6.06669L8.67137 5.57895C8.88291 5.40145 8.9105 5.08607 8.733 4.87453L6.99153 2.79913C6.75944 2.52254 6.88806 2.09868 7.23471 1.99769C8.87349 1.52029 10.7204 2.11069 11.903 3.52002C12.8501 4.64882 13.2119 6.1123 12.9169 7.45073C13.0559 7.56585 13.1844 7.69351 13.3009 7.83234Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8763 7.57355C11.7599 7.43472 11.6313 7.30706 11.4924 7.19194C11.7874 5.85352 11.4256 4.39003 10.4784 3.26123C9.29583 1.85191 7.44893 1.2615 5.81015 1.73891C5.46349 1.83989 5.33488 2.26376 5.56697 2.54034L7.30844 4.61574C7.48594 4.82728 7.45834 5.14266 7.24681 5.32016L6.66554 5.8079C6.454 5.9854 6.13862 5.95781 5.96112 5.74627L4.21965 3.67087C3.98757 3.39429 3.54781 3.44734 3.38816 3.77119C2.63344 5.30217 2.89416 7.22354 4.07673 8.63287C5.01195 9.74742 6.36792 10.3571 7.72164 10.3158C7.81431 10.4826 7.92289 10.6406 8.04613 10.7875L13.3484 17.1065C14.2359 18.1642 15.8128 18.3022 16.8705 17.4146C17.9282 16.5271 18.0661 14.9503 17.1786 13.8926L11.8763 7.57355ZM4.84278 7.99008C4.10835 7.11483 3.82676 5.99906 4.02334 4.99264L5.19508 6.38906C5.72758 7.02367 6.67371 7.10645 7.30832 6.57395L7.8896 6.0862C8.52421 5.5537 8.60698 4.60757 8.07448 3.97296L6.90274 2.57653C7.92801 2.55771 8.97793 3.02877 9.71236 3.90402C10.5257 4.87332 10.7896 6.14369 10.4446 7.24405C10.377 7.45967 10.4625 7.69383 10.653 7.81527C10.8248 7.92473 10.979 8.0599 11.1103 8.21634L16.4126 14.5354C16.9451 15.17 16.8623 16.1161 16.2277 16.6486C15.5931 17.1811 14.647 17.0983 14.1145 16.4637L8.81217 10.1447C8.6765 9.98302 8.56748 9.80114 8.48889 9.60585C8.40467 9.39659 8.19075 9.26963 7.96671 9.29595C6.83357 9.42906 5.64661 8.94805 4.84278 7.99008Z" fill="black"/>
</svg>
`;

const Train = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5.00002C19 3.06702 17.433 1.50002 15.5 1.50002L8.5 1.50002C6.567 1.50002 5 3.06703 5 5.00002V11.9553C5 13.1404 5.59619 14.2188 6.54298 14.8573L5.56608 18.7649C5.43214 19.3007 5.7579 19.8436 6.29369 19.9776C6.82949 20.1115 7.37242 19.7858 7.50637 19.25L7.68667 18.5288H16.3858L16.5661 19.25C16.7 19.7858 17.243 20.1115 17.7788 19.9776C18.3146 19.8436 18.6403 19.3007 18.5064 18.7649L17.5188 14.8147C18.4297 14.1714 19 13.1144 19 11.9553L19 5.00002ZM15.8858 16.5288L15.6406 15.5482C14.4282 15.8493 13.2144 16 12 16C10.8084 16 9.61734 15.8549 8.42762 15.565L8.18667 16.5288H15.8858Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.5C17 2.567 15.433 1 13.5 1L6.5 1C4.567 1 3 2.56701 3 4.5V11.4552C3 12.9896 3.99941 14.3451 5.4652 14.7988C6.97486 15.266 8.48696 15.5 10 15.5C11.513 15.5 13.0252 15.266 14.5348 14.7988C16.0006 14.3451 17 12.9896 17 11.4552L17 4.5ZM4 11.4552V4.5C4 3.11929 5.11929 2 6.5 2L13.5 2C14.8807 2 16 3.11929 16 4.5L16 11.4552C16 12.5512 15.2862 13.5194 14.2392 13.8435C12.8242 14.2814 11.4116 14.5 10 14.5C8.58839 14.5 7.17585 14.2814 5.76086 13.8435C4.71386 13.5194 4 12.5512 4 11.4552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13ZM6.5 11C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 13C14.3284 13 15 12.3284 15 11.5C15 10.6716 14.3284 10 13.5 10C12.6716 10 12 10.6716 12 11.5C12 12.3284 12.6716 13 13.5 13ZM13.5 11C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12C13.2239 12 13 11.7761 13 11.5C13 11.2239 13.2239 11 13.5 11Z" fill="black"/>
<path d="M15.5318 18.6757C15.6288 18.9342 15.917 19.0652 16.1756 18.9683C16.4341 18.8713 16.5651 18.5831 16.4682 18.3245L14.9682 14.3245C14.8712 14.066 14.583 13.935 14.3244 14.0319C14.0659 14.1289 13.9349 14.4171 14.0318 14.6757L15.5318 18.6757Z" fill="black"/>
<path d="M5.53183 14.3245C5.62879 14.0659 5.917 13.9349 6.17556 14.0319C6.43412 14.1288 6.56512 14.417 6.46816 14.6756L4.96816 18.6756C4.8712 18.9341 4.58299 19.0651 4.32443 18.9682C4.06587 18.8712 3.93487 18.583 4.03183 18.3245L5.53183 14.3245Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V7.56491C5 8.45546 5.58882 9.23873 6.4443 9.48616C7.62792 9.82852 8.81358 10 10 10C11.1864 10 12.3721 9.82852 13.5557 9.48615C14.4112 9.23871 15 8.45545 15 7.56491L15 5ZM6 7.56491V5C6 4.44772 6.44772 4 7 4H13C13.5523 4 14 4.44772 14 5L14 7.56491C14 8.01018 13.7056 8.40181 13.2779 8.52553C12.1836 8.84204 11.0914 9 10 9C8.90857 9 7.81637 8.84204 6.72215 8.52554C6.29441 8.40182 6 8.01019 6 7.56491Z" fill="black"/>
<path d="M5.25 17.5C4.97386 17.5 4.75 17.2761 4.75 17C4.75 16.7239 4.97386 16.5 5.25 16.5H15.25C15.5261 16.5 15.75 16.7239 15.75 17C15.75 17.2761 15.5261 17.5 15.25 17.5H5.25Z" fill="black"/>
</svg>
`;

const Trash = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="7" y="7" width="10" height="11.5" rx="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0156 4.25C10.1393 3.2647 10.982 2.5 11.9998 2.5C13.0176 2.5 13.8603 3.2647 13.984 4.25H17C17.4142 4.25 17.75 4.58579 17.75 5C17.75 5.41421 17.4142 5.75 17 5.75H7C6.58579 5.75 6.25 5.41421 6.25 5C6.25 4.58579 6.58579 4.25 7 4.25H10.0156Z" fill="currentColor"/>
</g>
<path d="M8.5 14.999C8.5 15.2752 8.27614 15.499 8 15.499C7.72386 15.499 7.5 15.2752 7.5 14.999V8.99902C7.5 8.72288 7.72386 8.49902 8 8.49902C8.27614 8.49902 8.5 8.72288 8.5 8.99902V14.999Z" fill="black"/>
<path d="M10.5 14.999C10.5 15.2752 10.2761 15.499 10 15.499C9.72386 15.499 9.5 15.2752 9.5 14.999V8.99902C9.5 8.72288 9.72386 8.49902 10 8.49902C10.2761 8.49902 10.5 8.72288 10.5 8.99902V14.999Z" fill="black"/>
<path d="M12.5 14.999C12.5 15.2752 12.2761 15.499 12 15.499C11.7239 15.499 11.5 15.2752 11.5 14.999V8.99902C11.5 8.72288 11.7239 8.49902 12 8.49902C12.2761 8.49902 12.5 8.72288 12.5 8.99902V14.999Z" fill="black"/>
<path d="M11.5004 4.4989H11.4994H8.50073C8.50073 3.67169 9.1738 2.99951 10.0001 2.99951C10.8268 2.99951 11.4998 3.67169 11.5004 4.49792V4.4989Z" fill="black"/>
<path d="M4.5 4.99902C4.22386 4.99902 4 4.77517 4 4.49902C4 4.22288 4.22386 3.99902 4.5 3.99902H15.5C15.7761 3.99902 16 4.22288 16 4.49902C16 4.77517 15.7761 4.99902 15.5 4.99902H4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 5.5H5.5C5.22386 5.5 5 5.72386 5 6V17C5 17.2761 5.22386 17.5 5.5 17.5H14.5C14.7761 17.5 15 17.2761 15 17V6C15 5.72386 14.7761 5.5 14.5 5.5ZM6 16.5V6.5H14V16.5H6Z" fill="black"/>
</svg>
`;

const TriangleDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.076 16.265L7.07599 8.265C6.86785 7.93198 7.10728 7.5 7.49999 7.5L17.5 7.5C17.8927 7.5 18.1321 7.93198 17.924 8.265L12.924 16.265C12.7282 16.5783 12.2718 16.5783 12.076 16.265Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57601 7.265L9.57601 15.265C9.77184 15.5783 10.2282 15.5783 10.424 15.265L15.424 7.265C15.6321 6.93198 15.3927 6.5 15 6.5L5.00001 6.5C4.60729 6.5 4.36787 6.93198 4.57601 7.265ZM14.0979 7.5L10 14.0566L5.90213 7.5L14.0979 7.5Z" fill="black"/>
</svg>
`;

const TriangleLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.735 10.576L15.735 5.57599C16.068 5.36785 16.5 5.60728 16.5 5.99999V16C16.5 16.3927 16.068 16.6321 15.735 16.424L7.735 11.424C7.42167 11.2282 7.42167 10.7718 7.735 10.576Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.735 4.57599L5.735 9.57599C5.42167 9.77183 5.42167 10.2282 5.735 10.424L13.735 15.424C14.068 15.6321 14.5 15.3927 14.5 15V4.99999C14.5 4.60728 14.068 4.36785 13.735 4.57599ZM13.5 5.90212V14.0979L6.9434 9.99999L13.5 5.90212Z" fill="black"/>
</svg>
`;

const TriangleRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M17.265 11.424L9.265 16.424C8.93198 16.6321 8.5 16.3927 8.5 16L8.5 6.00001C8.5 5.60729 8.93198 5.36787 9.265 5.57601L17.265 10.576C17.5783 10.7718 17.5783 11.2282 17.265 11.424Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.265 15.424L15.265 10.424C15.5783 10.2282 15.5783 9.77184 15.265 9.57601L7.265 4.57601C6.93198 4.36787 6.5 4.60729 6.5 5.00001L6.5 15C6.5 15.3927 6.93198 15.6321 7.265 15.424ZM7.5 14.0979L7.5 5.90213L14.0566 10L7.5 14.0979Z" fill="black"/>
</svg>
`;

const TriangleUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.924 6.735L17.924 14.735C18.1321 15.068 17.8927 15.5 17.5 15.5H7.50001C7.10729 15.5 6.86787 15.068 7.07601 14.735L12.076 6.735C12.2718 6.42167 12.7282 6.42167 12.924 6.735Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.424 13.735L10.424 5.735C10.2282 5.42167 9.77184 5.42167 9.57601 5.735L4.57601 13.735C4.36787 14.068 4.60729 14.5 5.00001 14.5H15C15.3927 14.5 15.6321 14.068 15.424 13.735ZM5.90213 13.5L10 6.9434L14.0979 13.5H5.90213Z" fill="black"/>
</svg>
`;

const Truck = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6H18C19.1046 6 20 6.89543 20 8V15C20 15.7009 19.6395 16.3175 19.0938 16.6747C19.1946 16.9302 19.25 17.2086 19.25 17.5C19.25 18.7426 18.2426 19.75 17 19.75C15.7574 19.75 14.75 18.7426 14.75 17.5C14.75 17.3282 14.7693 17.1608 14.8058 17H10.1942C10.2307 17.1608 10.25 17.3282 10.25 17.5C10.25 18.7426 9.24264 19.75 8 19.75C6.75736 19.75 5.75 18.7426 5.75 17.5C5.75 17.3282 5.76927 17.1608 5.80575 17H3C1.89543 17 1 16.1046 1 15V13L1.79907 10.4103C2.05777 9.5719 2.83274 9 3.71016 9H7V8C7 6.89543 7.89543 6 9 6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16.5C5.5 17.6046 6.39543 18.5 7.5 18.5C8.60457 18.5 9.5 17.6046 9.5 16.5C9.5 15.3954 8.60457 14.5 7.5 14.5C6.39543 14.5 5.5 15.3954 5.5 16.5ZM8.5 16.5C8.5 17.0523 8.05228 17.5 7.5 17.5C6.94772 17.5 6.5 17.0523 6.5 16.5C6.5 15.9477 6.94772 15.5 7.5 15.5C8.05228 15.5 8.5 15.9477 8.5 16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.5C14.5 17.6046 15.3954 18.5 16.5 18.5C17.6046 18.5 18.5 17.6046 18.5 16.5C18.5 15.3954 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 15.3954 14.5 16.5ZM17.5 16.5C17.5 17.0523 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.0523 15.5 16.5C15.5 15.9477 15.9477 15.5 16.5 15.5C17.0523 15.5 17.5 15.9477 17.5 16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.5H9C7.89543 4.5 7 5.39543 7 6.5V13.5C7 14.6046 7.89543 15.5 9 15.5H17C18.1046 15.5 19 14.6046 19 13.5V6.5C19 5.39543 18.1046 4.5 17 4.5ZM8 6.5C8 5.94772 8.44772 5.5 9 5.5H17C17.5523 5.5 18 5.94772 18 6.5V13.5C18 14.0523 17.5523 14.5 17 14.5H9C8.44772 14.5 8 14.0523 8 13.5V6.5Z" fill="black"/>
<path d="M10.25 8.5C9.97386 8.5 9.75 8.27614 9.75 8C9.75 7.72386 9.97386 7.5 10.25 7.5H15.75C16.0261 7.5 16.25 7.72386 16.25 8C16.25 8.27614 16.0261 8.5 15.75 8.5H10.25Z" fill="black"/>
<path d="M10.25 10.5C9.97386 10.5 9.75 10.2761 9.75 10C9.75 9.72386 9.97386 9.5 10.25 9.5H15.75C16.0261 9.5 16.25 9.72386 16.25 10C16.25 10.2761 16.0261 10.5 15.75 10.5H10.25Z" fill="black"/>
<path d="M10.25 12.5C9.97386 12.5 9.75 12.2761 9.75 12C9.75 11.7239 9.97386 11.5 10.25 11.5H15.75C16.0261 11.5 16.25 11.7239 16.25 12C16.25 12.2761 16.0261 12.5 15.75 12.5H10.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.5H2.71016C1.83274 7.5 1.05777 8.0719 0.79907 8.91032L0 11.5V13.5C0 14.6046 0.89543 15.5 2 15.5H6C7.10457 15.5 8 14.6046 8 13.5V9.5C8 8.39543 7.10457 7.5 6 7.5ZM1 13.5V11.6508L1.75462 9.20516C1.88397 8.78595 2.27145 8.5 2.71016 8.5H6C6.55228 8.5 7 8.94772 7 9.5V13.5C7 14.0523 6.55228 14.5 6 14.5H2C1.44772 14.5 1 14.0523 1 13.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.59998H2.79046C2.56147 9.59998 2.36175 9.75553 2.30568 9.97754L2.01522 11.1276L2 11.25V12.1C2 12.3761 2.22386 12.6 2.5 12.6H4.5C4.77614 12.6 5 12.3761 5 12.1V10.1C5 9.82383 4.77614 9.59998 4.5 9.59998ZM3 11.6V11.3122L3.17988 10.6H4V11.6H3Z" fill="black"/>
</svg>
`;

const Umbrella = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9981 12.5153C18.9261 12.5188 19.5 11.9301 19.5 11.0154C19.5 7.0875 16.7194 3.97003 12.9593 3.56093C12.9858 3.4711 13 3.37602 13 3.27761V1.75319C13 1.2009 12.5523 0.753185 12 0.753185C11.4477 0.753185 11 1.2009 11 1.75319V3.27761C11 3.38558 11.0171 3.48955 11.0488 3.58695C7.33672 4.09084 4.50003 7.19551 4.50003 11.0154C4.50003 11.9278 5.08439 12.4886 5.98532 12.5151C6.31258 12.5248 6.55493 12.3522 6.82207 12.0417C6.90381 11.9466 6.98714 11.8388 7.09085 11.6965C7.12065 11.6556 7.19647 11.5498 7.25954 11.4618C7.30106 11.4039 7.33705 11.3537 7.35074 11.3348C7.70851 10.8408 7.94601 10.6044 8.10482 10.5703C8.14153 10.5625 8.28045 10.6412 8.65736 10.9395C9.26019 11.4167 9.58816 11.5908 10.0821 11.5086C10.3878 11.4577 10.6512 11.3234 11 11.0815V17.5154L11.007 17.6336C11.1723 19.0224 12.0411 19.8735 13.3863 19.8735C14.8907 19.8735 15.6111 18.6746 15.6111 16.8352C15.6111 16.283 15.1634 15.8352 14.6111 15.8352C14.0588 15.8352 13.6111 16.283 13.6111 16.8352C13.6111 17.7136 13.515 17.8735 13.3863 17.8735C13.1119 17.8735 13.0488 17.8241 13 17.4533V11.0846C13.3651 11.3385 13.6132 11.4623 13.9249 11.5097C14.4159 11.5843 14.7331 11.4038 15.342 10.899C15.7196 10.5861 15.8664 10.4984 15.8998 10.5052C16.041 10.5341 16.2788 10.7801 16.6432 11.2976C16.6485 11.305 16.6662 11.3304 16.6903 11.3649C16.7545 11.4567 16.8637 11.6131 16.9034 11.6687C17.0064 11.8132 17.0903 11.9244 17.1723 12.022C17.4371 12.3372 17.6752 12.514 17.9981 12.5153Z" fill="currentColor"/>
</g>
<path d="M9.5 10.5C9.5 10.2239 9.72386 10 10 10C10.2761 10 10.5 10.2239 10.5 10.5L10.4963 17.0563C10.5797 17.7343 10.8603 18 11.4601 18C11.981 18 12.25 17.5673 12.25 16.4249C12.25 16.1488 12.4739 15.9249 12.75 15.9249C13.0261 15.9249 13.25 16.1488 13.25 16.4249C13.25 18.0494 12.6591 19 11.4601 19C10.3401 19 9.64721 18.3439 9.5 17.1174V10.5Z" fill="black"/>
<path d="M9.50006 1.76538C9.50006 1.48924 9.72392 1.26538 10.0001 1.26538C10.2762 1.26538 10.5001 1.48924 10.5001 1.76538V3.28981C10.5001 3.56595 10.2762 3.78981 10.0001 3.78981C9.72392 3.78981 9.50006 3.56595 9.50006 3.28981L9.50006 1.76538Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9982 12.2653C16.9261 12.2688 17.5001 11.6801 17.5001 10.7654C17.5001 6.54833 14.2949 3.26538 10.1136 3.26538C5.89319 3.26538 2.50006 6.58764 2.50006 10.7654C2.50006 11.6778 3.08442 12.2386 3.98535 12.2652C4.31262 12.2748 4.55496 12.1022 4.8221 11.7917C4.90384 11.6966 4.98717 11.5888 5.09088 11.4465C5.12068 11.4056 5.1965 11.2998 5.25957 11.2118C5.30109 11.1539 5.33708 11.1037 5.35077 11.0848C5.70855 10.5908 5.94604 10.3544 6.10486 10.3204C6.14156 10.3125 6.28048 10.3912 6.65739 10.6896C7.26022 11.1667 7.58819 11.3408 8.08215 11.2586C8.39286 11.2069 8.65993 11.069 9.0175 10.8194C9.07317 10.7805 9.11973 10.7472 9.21734 10.6768C9.64505 10.3685 9.83443 10.2681 10.0081 10.2653C10.1616 10.2628 10.3455 10.361 10.7763 10.6744L10.8594 10.7347C11.3049 11.0568 11.5748 11.2065 11.9249 11.2597C12.416 11.3344 12.7331 11.1538 13.3421 10.649C13.7196 10.3361 13.8665 10.2484 13.8998 10.2552C14.041 10.2841 14.2788 10.5301 14.6432 11.0476C14.6485 11.055 14.6662 11.0804 14.6902 11.1148C14.7544 11.2066 14.8637 11.363 14.9034 11.4187C15.0064 11.5633 15.0903 11.6744 15.1723 11.772C15.4371 12.0872 15.6752 12.2641 15.9982 12.2653ZM10.1136 4.26538C13.7372 4.26538 16.5001 7.09531 16.5001 10.7654C16.5001 11.1328 16.3695 11.2667 16.002 11.2653C16.0328 11.2654 15.9656 11.1728 15.7999 10.9448C15.7136 10.8259 15.6006 10.6703 15.4608 10.4718C14.9354 9.72575 14.5989 9.37758 14.1003 9.27554C13.6207 9.17736 13.3697 9.32723 12.7039 9.87915C12.3325 10.187 12.1617 10.2842 12.0752 10.2711C11.9357 10.2498 11.7634 10.1543 11.4453 9.92431L11.3645 9.86567C10.7453 9.41534 10.4509 9.25803 9.99198 9.26545C9.53482 9.27283 9.23301 9.43277 8.63259 9.86557C8.53642 9.93494 8.49504 9.96456 8.44516 9.99937C8.20097 10.1698 8.0431 10.2513 7.91797 10.2722C7.81814 10.2888 7.64863 10.1988 7.278 9.90544C6.61491 9.38063 6.36876 9.24107 5.89527 9.34256C5.39709 9.44935 5.05101 9.7939 4.54088 10.4982C4.42013 10.665 4.32023 10.7997 4.24073 10.907C4.04883 11.1658 3.97573 11.2644 4.01477 11.2656C3.63946 11.2546 3.50006 11.1208 3.50006 10.7654C3.50006 7.14471 6.4408 4.26538 10.1136 4.26538Z" fill="black"/>
</svg>
`;

const Wifi = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14.6961 12.2821C15.0926 12.6665 15.1024 13.2996 14.7179 13.6961C14.3335 14.0926 13.7004 14.1024 13.3039 13.7179C13.273 13.688 13.2391 13.6581 13.2022 13.6285C13.0406 13.4986 12.8292 13.3788 12.5791 13.2796C12.1265 13.1001 11.5793 13 11 13C10.086 13 9.26716 13.2511 8.79777 13.6285C8.76089 13.6581 8.72699 13.688 8.69613 13.7179C8.29964 14.1024 7.66655 14.0926 7.28209 13.6961C6.89762 13.2996 6.90738 12.6665 7.30387 12.2821C7.37977 12.2085 7.46015 12.1377 7.54472 12.0697C8.39422 11.3868 9.65538 11 11 11C11.8267 11 12.6239 11.1459 13.3163 11.4204C13.7456 11.5907 14.131 11.809 14.4553 12.0697C14.5399 12.1377 14.6202 12.2085 14.6961 12.2821Z" fill="currentColor"/>
<path d="M17.2128 9.68869C17.6002 10.0824 17.595 10.7155 17.2013 11.1029C16.8076 11.4902 16.1745 11.485 15.7872 11.0913C15.6908 10.9934 15.5866 10.898 15.4751 10.8056C15.362 10.712 15.2416 10.6216 15.1142 10.5349C14.9855 10.4473 14.8498 10.3636 14.7078 10.2842C14.5647 10.2042 14.4152 10.1287 14.2601 10.058C14.104 9.9869 13.9424 9.92084 13.7758 9.86013C13.6085 9.79914 13.4364 9.74364 13.2601 9.6939C13.0833 9.64404 12.9026 9.60002 12.7185 9.56207C12.5345 9.52413 12.3472 9.49229 12.1573 9.46673C11.968 9.44124 11.7762 9.42202 11.5824 9.40919C11.3899 9.39644 11.1956 9.39001 11 9.39001C10.8044 9.39001 10.6101 9.39644 10.4176 9.40919C10.2238 9.42202 10.032 9.44124 9.84266 9.46673C9.65277 9.49229 9.46552 9.52413 9.28146 9.56207C9.09736 9.60002 8.91666 9.64404 8.73993 9.6939C8.56364 9.74364 8.39152 9.79914 8.22416 9.86013C8.0576 9.92084 7.89597 9.9869 7.73987 10.058C7.58477 10.1287 7.43534 10.2042 7.29217 10.2842C7.15018 10.3636 7.01455 10.4473 6.88581 10.5349C6.75842 10.6216 6.63797 10.712 6.52494 10.8056C6.41338 10.898 6.30922 10.9934 6.21284 11.0913C5.82551 11.485 5.19237 11.4902 4.79868 11.1029C4.40498 10.7155 4.39983 10.0824 4.78716 9.68869C4.93166 9.54182 5.0859 9.40053 5.24924 9.26525C5.41113 9.13118 5.58183 9.0031 5.76069 8.8814C5.93819 8.76061 6.12361 8.6462 6.31623 8.53851C6.50766 8.4315 6.70608 8.3312 6.91079 8.23795C7.11446 8.14517 7.32421 8.05944 7.53934 7.98104C7.75355 7.90297 7.97295 7.83222 8.19683 7.76905C8.41971 7.70617 8.64688 7.65083 8.87767 7.60326C9.10719 7.55594 9.34013 7.51634 9.57585 7.48461C9.80999 7.45309 10.0467 7.42936 10.2855 7.41356C10.522 7.39789 10.7604 7.39001 11 7.39001C11.2396 7.39001 11.478 7.39789 11.7145 7.41356C11.9533 7.42936 12.19 7.45309 12.4241 7.48461C12.6599 7.51634 12.8928 7.55594 13.1223 7.60326C13.3531 7.65083 13.5803 7.70617 13.8032 7.76905C14.0271 7.83222 14.2464 7.90297 14.4607 7.98104C14.6758 8.05944 14.8855 8.14517 15.0892 8.23795C15.2939 8.3312 15.4923 8.4315 15.6838 8.53851C15.8764 8.6462 16.0618 8.76061 16.2393 8.8814C16.4182 9.0031 16.5889 9.13118 16.7508 9.26525C16.9141 9.40053 17.0683 9.54182 17.2128 9.68869Z" fill="currentColor"/>
<path d="M19.2454 7.22201C19.6136 7.63366 19.5783 8.26584 19.1667 8.63403C18.755 9.00221 18.1228 8.96697 17.7546 8.55532C17.6133 8.3973 17.4611 8.24398 17.2987 8.09599C17.1352 7.94702 16.9614 7.80363 16.7782 7.66645C16.5939 7.5285 16.4001 7.397 16.1977 7.27253C15.9944 7.14748 15.7825 7.02968 15.5629 6.91965C15.3426 6.80922 15.1147 6.70676 14.8801 6.61271C14.6448 6.51841 14.4031 6.43268 14.1558 6.35591C13.9082 6.27907 13.6552 6.21129 13.3976 6.15288C13.1404 6.09455 12.8788 6.04562 12.6136 6.00636C12.3494 5.96723 12.0818 5.93773 11.8116 5.91805C11.5433 5.89851 11.2725 5.88866 11 5.88866C10.7275 5.88866 10.4568 5.89851 10.1884 5.91805C9.91819 5.93773 9.65062 5.96723 9.38638 6.00636C9.12121 6.04562 8.85962 6.09455 8.60238 6.15288C8.34479 6.21129 8.0918 6.27907 7.84422 6.35591C7.59687 6.43268 7.35518 6.51841 7.11995 6.61271C6.88536 6.70676 6.65746 6.80922 6.43708 6.91965C6.2175 7.02968 6.00564 7.14748 5.80229 7.27253C5.59988 7.397 5.40615 7.5285 5.22185 7.66645C5.03857 7.80363 4.86484 7.94702 4.70132 8.09599C4.53888 8.24398 4.38671 8.3973 4.24538 8.55532C3.87719 8.96697 3.24501 9.00221 2.83335 8.63403C2.4217 8.26584 2.38646 7.63366 2.75464 7.22201C2.94178 7.01278 3.14198 6.81106 3.35441 6.61753C3.56577 6.42498 3.78906 6.24069 4.02339 6.06529C4.2567 5.89067 4.50075 5.725 4.75463 5.56888C5.00757 5.41334 5.27004 5.26739 5.54111 5.13157C5.81132 4.99617 6.08986 4.87094 6.37575 4.75633C6.66085 4.64203 6.95304 4.53839 7.25138 4.4458C7.54872 4.35351 7.85193 4.27227 8.1601 4.20239C8.46682 4.13284 8.77822 4.0746 9.09344 4.02793C9.40671 3.98154 9.72353 3.94661 10.0431 3.92334C10.3598 3.90027 10.679 3.88866 11 3.88866C11.321 3.88866 11.6402 3.90027 11.9569 3.92334C12.2765 3.94661 12.5933 3.98154 12.9066 4.02793C13.2218 4.0746 13.5332 4.13284 13.8399 4.20239C14.1481 4.27227 14.4513 4.35351 14.7486 4.4458C15.047 4.53839 15.3392 4.64203 15.6243 4.75633C15.9102 4.87094 16.1887 4.99617 16.4589 5.13157C16.73 5.26739 16.9925 5.41334 17.2454 5.56888C17.4993 5.725 17.7433 5.89067 17.9766 6.06529C18.211 6.24069 18.4342 6.42498 18.6456 6.61753C18.858 6.81106 19.0582 7.01278 19.2454 7.22201Z" fill="currentColor"/>
<path d="M13 16.25C13 17.3546 12.1046 18.25 11 18.25C9.89543 18.25 9 17.3546 9 16.25C9 15.1454 9.89543 14.25 11 14.25C12.1046 14.25 13 15.1454 13 16.25Z" fill="currentColor"/>
</g>
<path d="M13.3481 11.641C13.5463 11.8333 13.5512 12.1498 13.359 12.3481C13.1667 12.5463 12.8502 12.5512 12.6519 12.359C12.6098 12.3181 12.5643 12.278 12.5155 12.2388C12.3132 12.0762 12.0583 11.9317 11.7634 11.8148C11.2508 11.6116 10.6411 11.5 10 11.5C8.97837 11.5 8.04893 11.7851 7.4845 12.2388C7.43571 12.278 7.39018 12.3181 7.34807 12.359C7.14982 12.5512 6.83327 12.5463 6.64104 12.3481C6.44881 12.1498 6.45369 11.8333 6.65194 11.641C6.71658 11.5784 6.78533 11.5178 6.85798 11.4594C7.61245 10.8529 8.76304 10.5 10 10.5C10.7648 10.5 11.4996 10.6344 12.132 10.8852C12.5165 11.0377 12.8584 11.2314 13.142 11.4594C13.2147 11.5178 13.2834 11.5784 13.3481 11.641Z" fill="black"/>
<path d="M15.8564 9.03935C16.0501 9.2362 16.0475 9.55277 15.8507 9.74644C15.6538 9.9401 15.3372 9.93752 15.1436 9.74068C15.0352 9.63049 14.9185 9.52361 14.794 9.42049C14.6687 9.31677 14.5357 9.21697 14.3955 9.12153C14.2545 9.02564 14.1065 8.93426 13.9518 8.84781C13.7966 8.76102 13.6349 8.6793 13.4674 8.60299C13.2994 8.52647 13.1257 8.45549 12.947 8.39036C12.768 8.3251 12.584 8.26579 12.3958 8.21269C12.2076 8.15957 12.0153 8.11272 11.8195 8.07237C11.6241 8.03208 11.4254 7.9983 11.224 7.9712C11.0235 7.9442 10.8204 7.92385 10.6154 7.91028C10.4119 7.8968 10.2066 7.89001 10 7.89001C9.79341 7.89001 9.58811 7.8968 9.38457 7.91028C9.17957 7.92385 8.97652 7.9442 8.77596 7.9712C8.57461 7.9983 8.37593 8.03208 8.18051 8.07237C7.98474 8.11272 7.79242 8.15957 7.60416 8.21269C7.41597 8.26579 7.23203 8.3251 7.05296 8.39036C6.87425 8.45549 6.70059 8.52647 6.5326 8.60299C6.3651 8.6793 6.20342 8.76102 6.04818 8.84781C5.89354 8.93426 5.74546 9.02564 5.60453 9.12153C5.46427 9.21697 5.33126 9.31677 5.20602 9.42049C5.08151 9.52361 4.96483 9.63049 4.85642 9.74068C4.66276 9.93752 4.34618 9.9401 4.14934 9.74644C3.95249 9.55277 3.94991 9.2362 4.14358 9.03935C4.27605 8.90471 4.41777 8.77489 4.56817 8.65033C4.71784 8.52638 4.87598 8.40772 5.04197 8.29478C5.20728 8.18229 5.38025 8.07555 5.56021 7.97494C5.73958 7.87467 5.92575 7.78056 6.11806 7.69296C6.30984 7.60561 6.50756 7.52479 6.71054 7.45081C6.91304 7.37701 7.12062 7.31008 7.3326 7.25026C7.54395 7.19063 7.7595 7.13813 7.97862 7.09296C8.19677 7.04799 8.41829 7.01033 8.64256 6.98014C8.8655 6.95013 9.09101 6.92753 9.3185 6.91246C9.54404 6.89753 9.77138 6.89001 10 6.89001C10.2286 6.89001 10.456 6.89753 10.6815 6.91246C10.909 6.92753 11.1345 6.95013 11.3574 6.98014C11.5817 7.01033 11.8032 7.04799 12.0214 7.09296C12.2405 7.13813 12.4561 7.19063 12.6674 7.25026C12.8794 7.31008 13.087 7.37701 13.2895 7.45081C13.4924 7.52479 13.6902 7.60561 13.8819 7.69296C14.0742 7.78056 14.2604 7.87467 14.4398 7.97494C14.6198 8.07555 14.7927 8.18229 14.958 8.29478C15.124 8.40772 15.2822 8.52638 15.4318 8.65033C15.5822 8.77489 15.724 8.90471 15.8564 9.03935Z" fill="black"/>
<path d="M17.8727 6.55534C18.0568 6.76117 18.0392 7.07726 17.8333 7.26135C17.6275 7.44544 17.3114 7.42782 17.1273 7.22199C16.9745 7.05117 16.8104 6.88575 16.6354 6.72638C16.4599 6.56651 16.2738 6.4129 16.0778 6.26617C15.8812 6.11905 15.6749 5.979 15.4596 5.84662C15.2439 5.71395 15.0194 5.58911 14.7869 5.47264C14.5541 5.35597 14.3135 5.24781 14.0661 5.14862C13.8184 5.04932 13.5641 4.95911 13.304 4.87839C13.044 4.79769 12.7784 4.72654 12.5082 4.66526C12.2386 4.60413 11.9646 4.55287 11.6869 4.51176C11.4104 4.47082 11.1305 4.43996 10.848 4.41938C10.5675 4.39895 10.2846 4.38867 10 4.38867C9.71539 4.38867 9.43252 4.39895 9.15205 4.41938C8.86952 4.43996 8.58964 4.47082 8.31314 4.51176C8.03545 4.55287 7.76142 4.60413 7.4918 4.66526C7.22157 4.72654 6.95603 4.79769 6.69601 4.87839C6.43591 4.95911 6.18159 5.04932 5.9339 5.14862C5.68648 5.24781 5.44592 5.35597 5.21308 5.47264C4.98063 5.58911 4.75611 5.71395 4.54037 5.84662C4.32509 5.979 4.11878 6.11905 3.92223 6.26617C3.72619 6.4129 3.54007 6.56651 3.36459 6.72638C3.18965 6.88575 3.02547 7.05117 2.87269 7.22199C2.6886 7.42782 2.3725 7.44544 2.16668 7.26135C1.96085 7.07726 1.94323 6.76117 2.12732 6.55534C2.30301 6.35891 2.4912 6.1693 2.69113 5.98715C2.89053 5.80549 3.10143 5.63143 3.323 5.46559C3.54406 5.30013 3.77553 5.14301 4.01654 4.9948C4.25708 4.84688 4.5069 4.70797 4.7651 4.57859C5.02285 4.44944 5.28873 4.3299 5.56179 4.22043C5.83442 4.11113 6.11399 4.01197 6.39958 3.92333C6.68448 3.83491 6.97514 3.75703 7.27066 3.69002C7.56501 3.62327 7.86396 3.56736 8.16667 3.52254C8.46768 3.47797 8.77219 3.4444 9.07941 3.42202C9.38405 3.39983 9.69115 3.38867 10 3.38867C10.3089 3.38867 10.616 3.39983 10.9206 3.42202C11.2278 3.4444 11.5323 3.47797 11.8333 3.52254C12.1361 3.56736 12.435 3.62327 12.7293 3.69002C13.0249 3.75703 13.3155 3.83491 13.6004 3.92333C13.886 4.01197 14.1656 4.11113 14.4382 4.22043C14.7113 4.3299 14.9772 4.44944 15.2349 4.57859C15.4931 4.70797 15.7429 4.84688 15.9835 4.9948C16.2245 5.14301 16.456 5.30013 16.677 5.46559C16.8986 5.63143 17.1095 5.80549 17.3089 5.98715C17.5088 6.1693 17.697 6.35891 17.8727 6.55534Z" fill="black"/>
<path d="M11.75 15.25C11.75 16.2165 10.9665 17 10 17C9.0335 17 8.25 16.2165 8.25 15.25C8.25 14.2835 9.0335 13.5 10 13.5C10.9665 13.5 11.75 14.2835 11.75 15.25Z" fill="black"/>
</svg>
`;

/** Do not edit! This file is auto-generated. */
const print = {
    'airplane': Airplane,
    'angle-down': AngleDown,
    'angle-left': AngleLeft,
    'angle-right': AngleRight,
    'angle-up': AngleUp,
    'battery': Battery,
    'bell': Bell,
    'bell-off': BellOff,
    'bicycle': Bicycle,
    'bluetooth': Bluetooth,
    'book': Book,
    'bookmark': Bookmark,
    'building': Building,
    'calculator': Calculator,
    'calendar': Calendar,
    'camera': Camera,
    'can': Can,
    'car': Car,
    'cart': Cart,
    'checkmark': Checkmark,
    'circle': Circle,
    'clipboard': Clipboard,
    'clock': Clock,
    'cloud': Cloud,
    'cloud-down': CloudDown,
    'cloud-up': CloudUp,
    'coctail': Coctail,
    'color-picker': ColorPicker,
    'contract': Contract,
    'controller': Controller,
    'credit-card': CreditCard,
    'cup': Cup,
    'division': Division,
    'dots-x': DotsX,
    'dots-y': DotsY,
    'dress': Dress,
    'duplicate': Duplicate,
    'electricity': Electricity,
    'exclamation': Exclamation,
    'expand': Expand,
    'eye': Eye,
    'eye-closed': EyeClosed,
    'eye-off': EyeOff,
    'file': File,
    'film-frame': FilmFrame,
    'flag': Flag,
    'flower': Flower,
    'flower-bud': FlowerBud,
    'folder': Folder,
    'gear': Gear,
    'gift': Gift,
    'grab': Grab,
    'hamburger': Hamburger,
    'headphone': Headphone,
    'heart': Heart,
    'house': House,
    'info': Info,
    'internet': Internet,
    'key': Key,
    'knive-fork': KniveFork,
    'letter': Letter,
    'lock-closed': LockClosed,
    'lock-open': LockOpen,
    'loop': Loop,
    'loop-minus': LoopMinus,
    'loop-plus': LoopPlus,
    'magnet': Magnet,
    'map': Map,
    'microphone': Microphone,
    'minus': Minus,
    'monitor': Monitor,
    'monitor2': Monitor2,
    'moon': Moon,
    'motorcycle': Motorcycle,
    'music-note-double': MusicNoteDouble,
    'music-note-single': MusicNoteSingle,
    'open': Open,
    'paint-pallet': PaintPallet,
    'pen': Pen,
    'person': Person,
    'phone': Phone,
    'photo-camera': PhotoCamera,
    'pill': Pill,
    'pinpoint': Pinpoint,
    'pinpoint-off': PinpointOff,
    'plus': Plus,
    'power': Power,
    'printer': Printer,
    'refresh': Refresh,
    'reload': Reload,
    'scissors': Scissors,
    'send': Send,
    'share-android': ShareAndroid,
    'share-ios': ShareIos,
    'smartphone': Smartphone,
    'smartphone-notch': SmartphoneNotch,
    'smartphone2': Smartphone2,
    'soft-drink': SoftDrink,
    'speaker-high': SpeakerHigh,
    'speaker-low': SpeakerLow,
    'speaker-off': SpeakerOff,
    'square': Square,
    'star': Star,
    'sun': Sun,
    'syringe': Syringe,
    't-shirt': TShirt,
    'taxi': Taxi,
    'television': Television,
    'text-bubble': TextBubble,
    'times': Times,
    'tool': Tool,
    'train': Train,
    'trash': Trash,
    'triangle-down': TriangleDown,
    'triangle-left': TriangleLeft,
    'triangle-right': TriangleRight,
    'triangle-up': TriangleUp,
    'truck': Truck,
    'umbrella': Umbrella,
    'wifi': Wifi,
};

/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
function hexToRgba(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError('Expected a string');
    }
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    else if (hex.length === 4) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const num = parseInt(hex, 16);
    return hex.length > 6
        ? {
            r: (num >> 24) & 255,
            g: (num >> 16) & 255,
            b: (num >> 8) & 255,
            a: Math.round((num & 255) / 2.55),
        }
        : { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
}
const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;
/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
function textToRgba(color) {
    if (typeof color !== 'string') {
        throw new TypeError('Expected a string');
    }
    const m = reRGBA.exec(color);
    if (m) {
        const rgb = {
            r: Math.max(255, parseInt(m[2], 10)),
            g: Math.max(255, parseInt(m[3], 10)),
            b: Math.max(255, parseInt(m[4], 10)),
        };
        if (m[1]) {
            rgb.a = Math.max(1, parseFloat(m[5]));
        }
        return rgb;
    }
    return hexToRgba(color);
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @param options options
 * @returns {string} The SVG content as string
 */
function pepiconSvgString(options) {
    const { name, type, color, opacity, size, stroke } = options || {};
    let svgString = type === 'pop' ? pop[name] : print[name];
    if (!svgString) {
        console.error(`Pepicon ${name} of type ${type} not found!`);
        return '';
    }
    if (!/style="/.test(svgString)) {
        svgString = svgString.replace('<svg ', '<svg style="" ');
    }
    if (stroke) {
        svgString = svgString.replace(/#000000|#000|black/g, stroke);
    }
    const rgbOrHexColor = (color === null || color === void 0 ? void 0 : color.startsWith('rgb')) || (color === null || color === void 0 ? void 0 : color.startsWith('#'));
    if (color && !rgbOrHexColor) {
        svgString = svgString.replace(/style="/, `style="color:${color};`);
    }
    let _opacity = opacity;
    if (color && rgbOrHexColor) {
        const { r, g, b, a } = textToRgba(color);
        const _color = `rgb(${r},${g},${b})`;
        svgString = svgString.replace(/style="/, `style="color:${_color};`);
        if (opacity === undefined) {
            _opacity = a === undefined ? 1 : a / 100;
        }
    }
    if (_opacity !== undefined && _opacity < 1) {
        if (type === 'pop') {
            svgString = svgString.replace(/style="/, `style="opacity:${_opacity};`);
        }
        else {
            svgString = svgString.replace(/opacity="\.8"/g, `opacity="${_opacity}"`);
        }
    }
    if (size || size === 0) {
        const _size = size === 'sm'
            ? '20px'
            : size === 'md'
                ? '24px'
                : size === 'lg'
                    ? '30px'
                    : size === 'xl'
                        ? '36px'
                        : typeof size === 'number'
                            ? `${size}px`
                            : size;
        svgString = svgString
            .replace(/style="/, `style="width:${_size};height:${_size};`)
            .replace(/width="[0-9]+" height="[0-9]+"/, `width="${_size}" height="${_size}"`);
    }
    return svgString;
}

exports.categories = categories;
exports.pepiconCategoryDic = pepiconCategoryDic;
exports.pepiconSvgString = pepiconSvgString;
exports.pop = pop;
exports.print = print;
exports.synonyms = synonyms$1;
exports.synonymsJa = synonyms;
