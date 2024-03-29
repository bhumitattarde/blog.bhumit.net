---
title: Patching XFSTESTS file system regression testing suite for FUSE support
date: "2021-07-12T12:00:00.0000Z"
description: Adding FUSE support to XFSTESTS file system regression testing suite as a part of my Google Summer of Code project.
---

<!-- # Patching XFSTESTS file system regression testing suite for FUSE support -->

## Introduction
Hello everyone! I've been working as a student software developer for [Google Summer of Code](https://summerofcode.withgoogle.com/) at [KDE](https://kde.org/) ([KIO-FUSE](https://invent.kde.org/system/kio-fuse)) since past couple months and thought it'd be nice to share the progress made. This particular blog is supposed to give readers a rough overview of what [FUSE](https://github.com/libfuse/libfuse), [KIO-FUSE](https://invent.kde.org/system/kio-fuse), [XFSTESTS](https://git.kernel.org/pub/scm/fs/xfs/xfstests-dev.git/) are, why we're trying to integrate them, how far we've managed to come, and more important, to announce that it is finally possible to test FUSE file systems using XFSTESTS without ugly hacks!

## Need for file system testing

File systems are one of the most critical parts of an operating system and the role played by them to ensure bug free experience as well as high reliability, and consistency is pretty important. Compared to other areas of an operating system, filesystems particularly need to be as bug free as possible to avoid disastrous events like corruption of a critical file. To make matters worse, the corruption may be replicated in the backups, effectively rendering the damaged data irreparable.

File systems evolve constantly to complement the ever-changing technological landscape. They add new features, modify existing ones, try to introduce unique concepts making the codebase increasingly complex and sometimes unstable. Which, in turn, leads to a plethora of bugs -- like most software. What makes this problem particularly exasperating when dealing with file systems is the fact that finding and fixing bugs in file systems is very hard, evident from the fact that 50% of the file system bugs take more than a year to be fixed.<sup><a href="https://dl.acm.org/doi/10.1145/2619090">ref</a></sup> This makes thoroughly testing file systems and associated programs a high priority affair. Unfortunately and to no one’s surprise, testing file systems is very hard as well. [Learning from XFSTESTS (N Aota, K Kono)](https://www.jstage.jst.go.jp/article/transinf/E102.D/2/E102.D_2018EDP7006/_article/-char/en) does a very good job of explaining the reasons behind it.

## What are FUSE, KIO-FUSE and XFSTESTS?

### FUSE
FUSE stands for 'Filesystem in USErspace'. FUSE let's you create your own file systems without ever having to touch kernel code! Pretty neat, right? It does this by essentially acting as a bridge between your file system logic and kernel operations. A lot of innovative FUSE file systems exist, visit [this WikiPedia link](https://en.wikipedia.org/wiki/Filesystem_in_Userspace#Applications) to see some of the popular ones.

### KIO-FUSE
[KIO](https://api.kde.org/frameworks/kio/html/) is a KDE framework that provides and implements abstractions for accessing various types of (virtual) file systems in a cross-platform way. KIO-FUSE is a project by Fabian Vogt that lets you mount remote locations on your machine locally using FUSE. KIO-FUSE was later polished by feverfew (Alexander Saoutkin) and finally inducted as an official KDE project. Check out [feverfew's blog](https://feverfew.home.blog/) to read more about the process and KIO-FUSE itself.

### (X)FSTESTS
XFSTESTS is a filesystem regression test suite originally developed for [XFS](https://en.wikipedia.org/wiki/XFS). XFSTESTS is used as a file system regression testing suite for all of Linux's major file systems. Many file system maintainers require that any major changes be tested using XFSTESTS before they are submitted for integration. <sup><a href="https://kernel.googlesource.com/pub/scm/fs/ext2/xfstests-bld/+/HEAD/Documentation/what-is-xfstests.md">ref</a></sup>

## FUSE support for XFSTESTS and its impact

XFSTESTS previously did not support FUSE file systems. A patch was submitted for doing so, but it was *sort of* hack-y and was abandoned midway.
Main goal of [the GSoC project](https://summerofcode.withgoogle.com/projects/#6429306361741312) is to integrate XFSTESTS with KIO-FUSE for detecting stealthy bugs. Now, this could've been achieved without patching XFSTESTS for generic FUSE support, but we decided it'd be better to do so for the benefit of multiple open-source projects. A lot of FUSE file systems could potentially be tested and we'd marginally improve the health of the file systems ecosystem.

So, I patched XFSTESTS to support FUSE file systems. This is significant because it'd allow dozens of existing and any upcoming FUSE file systems that can be mounted like `mount -t ...` to be regression tested. XFSTESTS evaluation can be used to fix the detected bugs which probably would have went unnoticed otherwise. This will inherently lead to more robust FUSE file systems. Development speed should see a fair amount of bump too since buggy patches will be automatically weeded out before they're merged.

## The patch

As mentioned earlier, I'm deliberately keeping technical details out of this post in an attempt to make the content more accessible to people who aren't familiar with FUSE or file systems in general.

You can find the patch [here](https://github.com/bhumitattarde/XFSTESTS-FUSE-patch). Instructions for testing can be found in the `README.fuse` file. The patch is based on a (previously submitted and) now abandoned [patch](https://patchwork.kernel.org/project/linux-fsdevel/patch/20200108192504.GA893@miu.piliscsaba.redhat.com/#23160523) by Miklos
Szeredi.

Writing the patch itself wasn't much work but nature of FUSE, XFSTESTS meant a lot of time had to be spent in trial and error. Debugging was a bit harder. I also managed to leave a very silly bug which essentially resulted in XFSTESTS trying to mount the same directory twice. This wasted a couple of days. Fortunately, it was caught by one of my mentors. Afterwards, it was a smooth sail. While the patch was completed in the second week itself, we have held off sending it in case further modifications are required for integrating KIO-FUSE with XFSTESTS.

## Closing thoughts

Next step would be adding support for KIO-FUSE, sending the patch to XFSTESTS mailing list and making the suggested changes, if any. Shoutout to my mentors -- feverfew (Alexander Saoutkin) and Fabian Vogt. They've helped me at every step, even before GSoC started, and I appreciate it a lot.
