---
title: "Family Upgrades and Patches"
order: 100
---


## Family Upgrades

Family upgrades used to be much larger.  Since the introduction of the ServiceNow Store most of the new features are delievered as applications.  This means that family upgrades are much smaller and easier to manage.  However, there are still some things you need to do to prepare for a family upgrade.

These generally occur two times a year.

What is a Release Family? 

> A complete solution including new capabilities that customers can implement to add value to their organization. The release family also incorporates available fixes to existing functionality.

### Transfer of Information (TOI) Videos

There's a [load of videos on nowlearning](https://nowlearning.servicenow.com/lxp/en/pages/lxp-search?id=search&q=toi&spa=1) that will inform you techncially what has changed.  These videos are long but worth lookign into for each product suite you use.

### Upgrade Checklist

ServiceNow has a list they provide but because they remove docs for 2 + versions ago here's my list of things to do before an upgrade.

<!--lets me a list of checkboxes, this markdown doesnt support GFM so use html-->

#### Pre-Upgrade

<input type="checkbox" > Read the release notes and plan for the upgrade

#### Plan the tasks

<input type="checkbox" > Confirm which instances will be upgraded
<input type="checkbox" > Confirm the upgrade Family, patch and hotfix version
<input type="checkbox" > Confirm the upgrade dates (consider change freezes, holidays, etc.)
<input type="checkbox" > Confirm who will be the upgrade lead and backup
<input type="checkbox" > Set up a communication plan for the upgrade

#### Plan for nonprod

<input type="checkbox" > Inform the stakeholders and testers of the upgrade dates and expectations
<input type="checkbox" > Schedule the upgrade for non-production instance

#### Upgrade nonprod

<input type="checkbox" > Upgrade the non-production instance (note how long it takes)
<input type="checkbox" > Lead to review the skipped updates and delegate
<input type="checkbox" > Deal with skipped updates by reverting or merging them
<input type="checkbox" > Test the non-production instance
<input type="checkbox" > Send out communication to the stakeholders and testers
<input type="checkbox" > Confirm the stakeholders and testers have tested the non-production instance

#### Plan the prod

<input type="checkbox" > Inform the stakeholders and testers of the upgrade dates and expectations
<input type="checkbox" > Schedule the upgrade for production instance
<input type="checkbox" > Create a change request for the upgrade
<input type="checkbox" > Send out communication to the stakeholders and testers

#### Upgrade prod

<input type="checkbox" > Upgrade the production instance
<input type="checkbox" > Monitor the upgrade
<input type="checkbox" > Apply any update sets and post-upgrade fix scripts that you have.
<input type="checkbox" > Validate and test your instance
<input type="checkbox" > Communicate the upgrade is complete



### Patches

Patches are similar to a feature release but the amount of work is much smaller.  

There's three types of patches.

#### Functional

These seem to happen monthly.  

What is a Functional Patch?

> Supports existing functionality within the release family with a collection of problem fixes and generally does not include new features.

#### Security

What is a Security Patch?

> Supports existing functionality within the release family with specific security fixes. These fixes are incrementally added to the patch version. For example, Quebec Patch 6a is a security patch that contains security fixes added to Quebec Patch 6.  Similarly, Quebec Patch 6b contains the fixes in Quebec Patch 6a plus the new ones in Quebec Patch 6b. There are usually less than five fixes per security patch, but we reserve the right to include more fixes as required.


#### Hotfixes

What is a Hotfix?

> Supports existing functionality within the release family with a targeted, specific problem fix. It may or may not include any previous fixes within the release family. It does not include new capabilities. For example, Quebec Patch 1 Hotfix 2 is part of the Quebec family.


## Resources

- [Patching Madness](https://www.servicenow.com/community/developer-articles/servicenow-patching-so-there-is-a-method-to-the-madness/ta-p/2748894)
- [Upgrade Policy](https://nowlearning.servicenow.com/nowcreate/en/pages/assets?id=nc_asset&asset_id=9a89918a473a71d490542034846d43c1)
- [ServiceNow Pathcing Program FAQs](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0696901)
- [Upgrade planning checklist](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0995167)
- [Patching an Upgrade Release Cycle](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0547244)
