---
title: Google Summer of Code 2021 final report
date: "2021-08-19T14:00:00.0000Z"
description: Final work product report of Google Summer of Code 2021 for project titled 'Integrating XFSTESTS with KDE KIO-FUSE.'
---

<!-- Google Summer of Code 2021 final report -->

## Project summary

### [Integrating XFSTESTS with KDE KIO-FUSE](https://summerofcode.withgoogle.com/projects/#6429306361741312)

While current testing suite of KIO-FUSE tests individual operations pretty aptly, it lacks the support to put KIO-FUSE through regression tests. KIO-FUSE has not been through regression tests and chances are, doing so would uncover bugs that previously went undetected. KIO-FUSE is updated fairly frequently and new features are still being added, making regression testing a necessity to prevent new bugs from creeping in.

The lack of regression tests in KIO-FUSE's current testing suite can be fixed by integrating XFSTESTS with it. XFSTESTS is considered as the quintessential file system regression testing suite and KIO-FUSE would benefit greatly from it. A more rigorous testing regime would translate to an even more robust and reliable filesystem. Testing KIO-FUSE would mean we're testing KIO slaves as well. As of now, XFSTESTS doesn't support FUSE, and that'll have to be added as a part of this project. FUSE support for XFSTESTS would be a major plus since it'd allow hundreds of file systems written using FUSE to be tested.

The project not only benefits KIO, KIO-FUSE and KDE, but the FOSS community as a whole.

## Final Deliverables

### FUSE support for XFSTESTS
  
Patched XFSTESTS file system regression testing suite for FUSE support. Go through [this blog I wrote](https://blog.bhumit.net/patching-xfstest-for-fuse-support/) to know more. The patch can be found at [github.com/bhumitattarde/XFSTESTS-FUSE-patch](https://github.com/bhumitattarde/XFSTESTS-FUSE-patch) and is under review.

### XFSTESTS support for KIO-FUSE
  
Patched KDE KIO-FUSE for XFSTESTS file system regression testing suite support. Merge request can be found at [invent.kde.org/system/kio-fuse/-/merge_requests/58](https://invent.kde.org/system/kio-fuse/-/merge_requests/58). Core code is approved but unit tests and documentation are under review as of now.

### KIO-FUSE XFSTESTS test results
  
Ran all tests and sorted the results in tabular, color-coded fashion. The spreadsheet can be found at [docs.google.com/spreadsheets/d/1LkeBuplbXXJxoXBS-ApsfA1trRLy1CB6PA5a8E1LyyY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1LkeBuplbXXJxoXBS-ApsfA1trRLy1CB6PA5a8E1LyyY/edit?usp=sharing). Switch to the `Raw` sheet for raw test results.

## Acknowledgements

### KDE

Thank you KDE for selecting me as a Google Summer of Code mentee. The community couldn't have been more welcoming. I still remember the first mail I sent to the KDE mailing list asking for suggestions to get started (without a subject line as well, sorry folks :P) and the help that poured in.

### Mentors

I cannot be more thankful to my mentors -- feverfew (Alexander Saoutkin) and Fabian Vogt. We are from very different timezones but they still communicated with me almost daily. They were patient with me throughout the development period and even before GSoC started when I was just starting to understand what FUSE, KIO-FUSE are. They were amazing guides and helped me promptly whenever I was stuck.
