# Series and Expression Structure

トップは **シリーズ一覧** です。`001 / 002 / 003 / 004` はそれぞれ独立したシリーズであり、各シリーズ内に複数の表現ページを持てます。現在は001のみ4表現を公開し、002〜004は同じ拡張方式を受け入れるシリーズ入口です。

```text
client/src/
├── data/
│   └── series.ts                    # シリーズ、001の表現、構造図・地図・時系列の共通データ
├── components/
│   ├── desktop/
│   │   └── DesktopChamber.tsx       # 001 / Desktop
│   └── sequence/
│       ├── ChamberMark.tsx          # 全シリーズ一覧への帰還
│       └── ExpressionShell.tsx      # 001の4表現の共通切替
├── pages/
│   ├── Home.tsx                     # シリーズ一覧LP
│   ├── SeriesHub.tsx                # 001の4表現一覧
│   ├── Chapter001.tsx               # /001/desktop
│   ├── StructureExpression.tsx      # /001/structure
│   ├── MapExpression.tsx            # /001/map
│   ├── TimelineExpression.tsx       # /001/timeline
│   └── FutureSeries.tsx             # /002, /003, /004 の拡張用入口
└── App.tsx                          # 二層ルート定義
```

## 001の公開URL

| 表現 | URL | 役割 |
|---|---|---|
| Series Hub | `/001` | 4つの別表現を選ぶ入口 |
| Desktop | `/001/desktop` | OS的な原点表現 |
| Structure | `/001/structure` | 根・幹・枝のサイトマップ |
| Map | `/001/map` | コンテンツを置く架空地図 |
| Timeline | `/001/timeline` | コーナーの作成順を記録する時系列図 |

002以降は、`series.ts` の対象シリーズへ `expressions` を追加し、`pages/` に対応する表現コンポーネントと`App.tsx`のルートを追加して展開します。
