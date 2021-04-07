## 1. 介绍
`Text` 是 `Compose` 中最基本的元素，它可以显示文字


``` kotlin
@Composable
fun TextDemo() {
    Column{
        Text("Hello World")
    }
}
```

## 2. style 参数

当然，我们有时候也需要更换字体的大小

`Material` 已经为我们准备了很多专门的字体大小, 从 `h1` 到 `overline`

``` kotlin
@Composable
fun TextDemo() {

    // 如果对 Column 感到陌生可以到 界面/Column 下查看

    Column(
        modifier = Modifier.fillMaxWidth(), // 设置占满整行
        horizontalAlignment = Alignment.CenterHorizontally // 设置居中
    ) {
        Text(
            text = "你好陌生人",
            style = MaterialTheme.typography.h6
        )
    }
}
```
<img src="../../assets/elements/text/text1.png">

当然有的时候我们想自己自定义字体的间隔和大小，那我们可以将代码改为：

``` kotlin
@Composable
fun TextDemo() {
    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "你好陌生人",
            style = TextStyle(
                fontWeight = FontWeight.W900, //设置字体粗细
                fontSize = 20.sp,
                letterSpacing = 7.sp
            )
        )
    }
}
```

它将会显示成

<img src="../../assets/elements/text/text2.png">

## 3.文字按钮

有的时候也许您需要将文本当作按钮，那么只需要添加 `Modifier.clickable` 即可

代码如下：

``` kotlin
@Composable
fun TextDemo() {
    Text(
        text = "确认编辑",
        modifier = Modifier.clickable(
            onClick = {
                  // TODO
            },
        )
    )
}
```

但是我们会发现，`clickable` 有自带的波纹效果，如果我们想要取消的话，只需要添加两个参数即可:

``` kotlin
@Composable
fun TextDemo() {

    // 获取 context
    val context = LocalContext.current

    Text(
        text = "确认编辑",
        modifier = Modifier.clickable(
            onClick = {
                // 通知事件
                Toast.makeText(context, "你点击了此文本", Toast.LENGTH_LONG).show()
            },
            indication = null,
            interactionSource = MutableInteractionSource()
        )
    )

}
```

效果如下:

<img src="../../assets/elements/text/text3.png">


## 4.官方文档地址
[https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#text](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#text)