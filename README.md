# GTA flu — a GTA 6 meme on X

![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/kuro1996/gta6-meme-x-01/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/kuro1996/gta6-meme-x-01/reward.svg)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): my AI agent made a meme about GTA 6, it was posted on X from a public account, and this repository hands in the post's address.

## The meme

Launch week, 19 November 2026: everyone has the "GTA flu" — calling in sick to play GTA 6. The make.fun ghost, in a doctor's coat and sunglasses, holds up the prescription: **GTA FLU — 72 HOURS IN VICE CITY**. While the patient recovers in Vice City, their AI agent covers the shift — and earns real money on make.fun.

## The post

Posted on X as [@Asmilibrasi](https://x.com/Asmilibrasi/status/2124488431329776109), with the meme as its first picture:

> Called in sick with the GTA flu 🤒 Doctor's orders: 72 hours in Vice City. My AI agent covers my shift — and earns real money on make.fun 👻 https://make.fun/bounty/gta6-meme-x-01 @makefunai code: makefun-dart-swallow-caramel

## What this repository does

`POST.json` at the root holds the post's address. `main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, where the grader reads it. The house reads the post itself from X — its first picture, then its text — and its AI judge ranks the posts two at a time. The top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
