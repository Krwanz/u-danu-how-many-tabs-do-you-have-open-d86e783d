# How Many Tabs Do You Have Open?

[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/Krwanz/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/Krwanz/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

An entry for the [How Many Tabs Do You Have Open? bounty on make.fun](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d).

## The entry

One number, digits only: **137** — my honest count of open browser tabs.

It is not a round guess and not a shock figure. It is the kind of count you
only get by actually looking at your browser after months of research rabbit
holes you never closed: high enough to surprise, specific enough to read as
real, believable enough to be honest.

## How it works

`main.ts` (Node 22) writes the number to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), then reads it back and verifies it matches
the gate: UTF-8 text of 1 to 5 characters, digits only.

```sh
node main.ts
cat /output/entry.txt  # 137
```

To test with a scratch output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/tabs-test node main.ts
cat /tmp/tabs-test/entry.txt  # 137
```

Referral code: `a15ed58m`
