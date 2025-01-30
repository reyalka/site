---
title: OilとCopilot
date: "2025-01-30"
published: true
---

超絶ライトな記事です。

## OilとCopilotと共存する

[Oil.nvim](https://github.com/stevearc/oil.nvim)を使用する際、デフォルトの設定のままだとCopilotの補完が出てしまします。

![`/015 index.ts`という補完が出ている。](./oil-with-copilot.1.png)

これだと、なんだかOilの裏側を見てるような気分になりますよね。

## 解決策

Oilの設定ファイルに以下の設定を追加することで、Copilotの補完が出なくなります。

```lua
return {
    "github/copilot.vim",
    config = function()
        local CopilotGroup = vim.api.nvim_create_augroup("MyCopilotController", { clear = true })

        vim.api.nvim_create_autocmd({ "FileType" }, {
            pattern = "oil",
            group = CopilotGroup,
            callback = function() vim.cmd("Copilot disable") end,
        })
        vim.api.nvim_create_autocmd({ "BufLeave" }, {
            group = CopilotGroup,
            callback = function()
                if vim.bo.filetype == "oil" then vim.cmd("Copilot enable") end
            end,
        })
    end,
}

```

Oilに入るとき、Oilから抜けるときにautocmdを設定しています。

これでもう、Oilの謎の補完とはお別れ！
