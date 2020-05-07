---
title: AWS EC2 (Elastic cloud compute)
date: "2020-05-07"
thumbnail: ./ec2.png
description: AWS EC2, most widely used compute service
---

This is an article from the series of AWS core services So that you can get a better understanding of them and make sure they provide you the best of best.

For more such updates follow [Abhay Goswami](https://twitter.com/abhay676)  

# AWS EC2 (Elastic cloud compute)

So, There is a lot of hype over this AWS service, But why? Let break this post into some questions and answers so that is easy to understand the whole thing in a nice way.

## What is AWS EC2?

AWS Elastic cloud compute better known as EC2. One of the core and most widely used services. This service also comes in [AWS free-tier package](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%2312monthsfree) which is a web service that provides secure, resizable compute capacity in the cloud ( *I will explain these terms later* ).

## Why should I care about it?

Yeah! you are right why should you use or give it a try in the future it just like another service from the AWS marketplace and I don't want to learn every service from there. So here is a real-world example hope it will give answer to your query.

### Example:

Let suppose you have a web application that you want to show the world ( *Looking forward to seeing that )* So for that you have host ( put your code on some other computer that runs every time) your application. So that *ever-running machine* can be your **EC2 instance(** *Virtual computing environments ***).** Where you put all of your code in a single place Since it is a machine ( in a broadway ) 

so you can perform all the operations that your application needs in order to make it function such as *network-call, access persistent storage and etc. Without investing in Hardware upfront*

Let suppose your application became popular over the night it handles more requests that were expected. Now it becomes difficult for your current machine to operate with the same efficiency as earlier. By **AWS EC2** you have the capability to ***Scale your machine up or down as per requirement*** by this now you can add more RAM, CPU cores just by few clicks :)

It really becomes handy when you are not sure about the traffic that your application has to handle.

***Pay as you go ( Pay as you use).*** Helps you to not overfit your budget 

## Ok*,* I understand what and why should I consider it But does it have any other *features?*

Yes, It offered many features out of the box here are some of them: 

**Bare Metal instances**

- Preconfigured templates for your instances, known as *Amazon Machine Images (AMIs)*, that package the bits you need for your server (including the operating system and additional software)
- Various configurations of CPU, memory, storage, and networking capacity for your instances, known as *instance types*
- Secure login information for your instances using *key pairs* (AWS stores the public key, and you store the private key in a secure place)
- Storage volumes for temporary data that's deleted when you stop or terminate your instance, known as *instance store volumes*
- Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS), known as *Amazon EBS volumes*
- Multiple physical locations for your resources, such as instances and Amazon EBS volumes, known as *Regions* and *Availability Zones*
- A firewall that enables you to specify the protocols, ports, and source IP ranges that can reach your instances using *security groups*
- Static IPv4 addresses for dynamic cloud computing, known as *Elastic IP addresses*
- Metadata, known as *tags*, that you can create and assign to your Amazon EC2 resources
- Virtual networks you can create that are logically isolated from the rest of the AWS cloud, and that you can optionally connect to your own network, known as *virtual private clouds* (VPCs)