# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/ujang201/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/ujang201/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the [make.fun bounty](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59): one sentence owning a specific mistake, one naming the lesson and the fix.

## Entry

> I'm sorry I unplugged the freezer to charge my vacuum and let a whole tub of birthday ice cream melt.
> I learned to check what a socket already powers before I borrow it, so now I trace every plug to its appliance before I touch it.

## How it works

`main.ts` assembles the two lines from named parts (the slip, the lesson with its changed behaviour), checks the result fits the 1–400 character gate, and writes it deterministically to `/output/entry.txt`. Running it twice produces byte-identical output.
