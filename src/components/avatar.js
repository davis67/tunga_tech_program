import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-4 w-4"
      fill="none"
    >
      <rect
        x="0.485"
        y="1.519"
        fill="url(#pattern0)"
        rx="60"
        transform="rotate(-.463 .485 1.52)"
      ></rect>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0" 
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMVEUAAAD////s7Ozt7e319fX+/v7u7u739/f09PT29vbr6+vy8vL6+vr5+fnz8/Pw8PD4+Pj8/Pz9/f3v7+/x8fHW1tZ0dHQUFBSampqPj496enpVVVXc3Nzi4uLFxcVvb2+5ubmlpaVlZWWFhYVEREQ3Nzevr68hISEqKipdXV1MTEwLCwskK8ETAAAOdElEQVR4nMVba3ujKhAOIIg3ECVt0jbZpGmy7e7//3+HGbyLid3zoXzI7kN1HIe5vLyMG84rKjJCYsYKTqyghHMqLOElYzEhmaAVJ1RowgvGEkKUYIYTJgThhglJiMQJIRhOKEISlKRBUie6RNEcJFmU1Irmm6ECxN+GCpCZArlXgNFeAQYKsF4ByrwC+UwB0imgCRkpUFVG1IpXSS3Kitta4ETGq7iu44pntTAVF7XmVSnqqOKqmah5lYtaVpWsRV7xuha8kRShJN1MjCVVorYoKWkkVRtKBSF5SiP3cjQ1hFBKCTEpdS8X4YSgKSFVSt27JDR1ZqphgqTUvUtJqXs53UzU7uVS6syU0bSCCYaSnGg5Eq1QdA6i6UYId1tOGVzlrEvQusQZExRg1F1Ve2M21u3Xifl1AuuyoXX9OuHCTUTDOk1Ei02WqTyPsyzKc5llZZ5nWZbnJU5E/USRZTLPkyyL81xl1k3YZiKBG22R57aRhBNZsSSpRElRIynbEMJTBp5CKbwcQ2Myb90YXi7lMIHvAtZVaF3K8F1gnSRFuzGK6wRmovhyIMmJtii6HIkuUHSGop0Czrroql4BJ4d461J0VWfdToE2CuCKbp0a68KNbRT0CrSi/TqhaFSgEe1eZRPHSRRF+JvEcQS/s4m4nYj+aeKu6A1jnaf4l2Ns6Cnty3kzJaxbp8YJafNyvLMumMm/XGum3r8b0apzQsacAgKXN+qt2ytAewXQURJ0lMHytgp0jlKgo7jl7RWgAwW6dYrQUYRToChKJWVRJEolRSGlKucTBU7ESkVFEUkVw4SCCRmcUDAhYWKF6A3vnJBNnJD1TkinTsjmTsimTkh7J2QTJ2SdE3IMQ9qH4SjJQRhStC4kuTwdhCFl7fL6dMnoIAwhyWG6dKL7MOxFN2GIojdWW2NKrSNjpNaFMVprYwqtpTGR1qUxFiZyrZUxCU5kunblJykMcbfUTpSJXU0wtc5QUmKM0joHSY9F2yYVs9ZV20LXRAHUtVkqliojdnu+vLz8+nr9en+5XM5HtyJZZuepmA9FtyWzEe1T8WIxUm0JYcNiJDjJT/uvzXx87U8p3JjOipEMiO6L0SDEy8YJ+cAJbRPRGGEiJ4fzn8DD2/Fxfmtzat1kDztwQt44YTlIFusBiVvw9Pj1+87jYTx/HdNEfAeQcLcoAi0AV2m4KqSAs4DdfQyf9Pl+2e9up9N5f3n/fB785XMP7h5WgKMCJTqKE22cAit9gND9wNL704FUuVvEylpnRsP14bQbrM0llXytDzyKggaQ3Lo3fzrVcTbIVri87kkkEaeXzhI7t550KjoYBdZi9FoIVgvBaq2FYLUQrBaDNSu3rfFfb84aymJisC4xxFrHLuwthn1WEnZqA+TjSFDSXdGZtSsyITG7NtK28C49IEk9IEk7QEJFSbbvzdVP6zLhw1oQH5rXf98WxZpa0KnwuSUrakFZxlJGZZlImZQlVKgSSlY7EZGzl3bd8hiui6SM4TrZ3jifiMm2ccizie6IxhvneGAISKgw3vn/7oSa4QE3UQiw2wwPxNnOu+ML5PAgIOnwwF1EpNmL96g3N90p4OGl1DaW7HDQJSlt2iMiD0iSt1e/blY/QERxD98Qp0k3IZuJMvI+/eRQxgjx5Zwfd78aO3++77ekhBuHmLDIG921CYluUWN8DxXrxLvfbQJInJs9TTLw9ZhMAYkwR6+fzGdOOETFkzAc7AtE6q14HO8LmHx738zHPprvC7ZYOT6zOrwv8GHodismL20G2SKzZe7yTjOR+9d8izNrcCPkAIm7gtz+Bp6/2fw61i61xDZLUFLhJJVeg1dpIhSdgaQSJbUTWTgVgzHJxT9/AkjIPvh4DJV9PgEkkvpYaAH+dwBJsWuePwYk0WXx+X656Hh3nGI47shyMXJgjrlNPE+EKDm3NauqitWWbFHgNq6ZqTirNeeFEBG53X2+Sz2ER0IUnOuacSc6OuKCnUgvmvNSiITzDERXC4BExZ9w323CkJSH5/vPBxuMGZICY+FZLgKSQcUYFKPk4tduAsvJNPzm4zOLJ7Ac1/Idy1qoGIV9ANX+Y6ag9O3h8x0YIRNQyv/4tbkDSPg0CpIrmO1QTGH57sHDccgJLNcHCMbf6SwKOEaB2yxUVVHXEdBNdV5Vta59qN1IVNdFVWldw7ajVhX5XKPAjVSqrg1I8qLNyVvGS8proLZa0XqQCdPOBw64ANl0ayYOa56/eVGTrVmpsKRsWecD6RCQ8DkgQVc72HZzyptaoB7FoB+fEWs2p7zZnGr0nVeDkkaAxEVBkZeZ6vknlRUmxffgnm5SSDcp4J/y5SQ4GoXykoDa8qILvPNoYKJnslRW5sUIkPgokFhH35KeoEgbguJ+FuyGaAiKtCcoFMw/STaIgkVAIjDZPOUzikaRX+sUeJtTNB5YHXQAkCRJlMCI2v8YAIF/38qo/4v/N4lCe9LAOObjG91vTCEj78nkWe43AEggb/xqYfmIpntdqYCe0HQAy2H5rtkCIBkSlTVWoWOQqFxpgW0dICobsXOiUinV8U9KlQUmoQ8lVUc3QWQUpbsiX+kD1EiQBB7fU1sRGpZ7Sb1otRFswig/42IFeEK1Ngp8Kp7whDG41vUwIauZ2LBJMcKccSBBun6dAn/7YiR6ul6kfg0mxYhtjDG1VpVJdB2bKotA0ec8q0xc68RUStfGuKxuK1Mm51UKvMZu31lZl/dHojWswS7WY9FmkoqtgnV+iYYERQcj7HGVAhcJqbiFNt3esAD7fZhZKu4ASYqHIRJE3CzA8jQdFCNYJ7auGN2st246EO0UiE7wR8x7xUD0ZG9YYc48tBvfJl92ZPVDQAbjbURW5/5QwU0U8MftbG84AiQModCz8xQ24wnhRG5NHLq7iRIznpAZVP82ES28AgUTEefKARbAPFe4TUju8K2/qjsSXFMO3wlKQmyFCoBoOFwksKHaEZCEoguvQA9KwQdKqIQvCTIkKZ34ALWrloCyqQ9Q8AFtwQt/2Q6Q2BAgUahlNGbLG5qukOvCcCc7amvEliu4/Y+ykygwJrfAGiXWxsYIqDenCPkna5OOf0ImK3kMynENSpCU9UyWF60SAFTPUSdaWutEjwEJyyBbHCcHlx6Q0LV44LXLhGyQCZ0krEfNFnoQBcNaIMS1USBYC15WKfAVrAW0yfKw4qNaIBvWCOmmJAXgfTQ9/5QM+KdVQeB82AyJq6RjsnJUIJ6I7gEJ4gHcQ2zr8MFldlqlwDkLH1x6pAFh0eKBBpA8UKBHRIyuUuBQf0uBbyxBucoJ/pAyvAQGl2AqeuKEGmipRSck6QoFtsWSE6IFZk44CkMqMQ+Ew9CtU3V6+PybTJbCEKv5LAzHicgC7jzHwUTkJiKyDTNU/fsTE9lwIoohEV2TaSIap2JMdvs4mIp9D8n9ZHQ1vockmIqh0H3JaSoeFyOELa95uBjhweX9erAr24PLeTGSoPslqyfFaFKOYZGfF8oxMFl1clcB7W5MlsoxZNnzrBxPAAmEyl+6BEicdfk9luSl5QmDgASuOM4AyQSSVc1VYUgGLGy+/PzntGPL55CMYxpIZ5BsDEp1Bolgr4Kg1HfoyGWa4pw0vT4hUFqC6f4aOgWlE4YEmdCPMgTLm04qsQgLfjnrqjYKZrBcAtZ5KmawfLoxOYEoqkIbk1pHppI60+Fd8qdw18nKRLoObEw4kranaLYxmW7NYpB1Cm/Nmk4qGd4fHLNZJ9UgE+Ku5nk735rNNqeAiZ44C9aCppMqCyrwpkedVJNaUEAW+Ijmm9Pp9tyfkR6i+fbcN39Ae4gNK5D4RhNoD5ltzyMs9Dsz355PCQqGFXm33EnlJkxQgQMwWYudVP69VnVSoa2KEEXTWJcXYQssdlKBApAG30NnRjOSyvPrJzMjqbqJmAUV2BYzCqqbGAidklTzc8MaouwaL3dSZWHSfGuXO6kI5LdPKR50Unmi0jOyp2JOVDYHl0W4HOzjwcHlhKhEA5xViKicU7V5AW7426gpVZspaDqU5rgASm5EYqugyiZUrUKgtZF5iKqdk9Xce+xZTslqDHGTLSPTi0iiDpAMyGrclLk9Y5CsDtH1+RW9up52UjkV6f0zi/0bShrT9fkb5ICrSIN0ffDAApfsfXRgIXREkuOvh100r9BNJIcHFtogjDsuHFgEj2z8BuBW9YCEK3XY3Wsh6sfnZatU3QOSCBfgq1o4sgkfWll8063uDq3MeSVR7HXYH0h7aFX70nVYOrRaOLbzjFzSHLYdQ8fV98efm0DRqsAj+NNyD8lCJxXuhL+MFKo4fdx/1pIZTonLasi5QBK+09odPLrlGAkvSXL8ju3H4+MYFehN13r56Hbp8Lo+YLp5WXVUuDiePKXwVn6zkwoSdrHmmHTdOA5au2fH98sNDGQdNfx4nMi9BoblFg4arTsnfDR2ZKG1mz5o7Xb7pHXE4KPnzzupxq3dy208CTn97+ffSHm/jed+a7fcrmJnl8eRfLu1e9xbTuiqE/OFcd0u9pZ3gORRM1tZrzwrC4wvWtwT7ZvZHrbzec7gX8aNrGnnW9Pabf8lG79uV7Z2P27ptIqfrt98/O9bTvSqls51Ta1EruwdaMYFG3FXNbWubeuV6f4BQ9eP3SGmq1u7VzY2u5Uj7G5bdzv+7IQyS53Vgcbmb3xrJiK7vdx3huvLtuTiW9+afae5HfQWx/2SDtfdETZE0fea27/Z3g8rR9Lj+fI19Ii/r5fzMTVF+Fuz/9faHfjAQdc1tGup9LA9Ho/bQ5JI6PVmLPCt2eMPHP7xEw8gsJ0cE8mccOz1/tdPPP7PRy7D1u5//sjlxz/z+fEPnX78U68f/9jtxz/3+/EPHn/8k88f/+j1xz/7/fEPn3/80+8f//h9EIYDQKIHtaDqa0F0pxYMw7BNly0goWNAMsxW/wHvB5gFwdAkiwAAAABJRU5ErkJggg=="
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;