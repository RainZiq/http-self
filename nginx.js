// nginx是一个轻量级的web服务器，对于其它的重量级web服务器，处理http请求进程消耗更少的cpu和内存
// 一般用来做反向代理和负载均衡
// 特性：进程池+单线程，在nginx启动的时候，会根据cpu核数fork 对应的worker进程，同时有一个master进程
// 来管理这些进程，请求分配，进程重启
// 为什么nginx可以做到比多进程多线程web服务器处理并发更好的效果?
// 因为请求时i/o密集型，不是cpu密集型不需要太高的cpu的计算能力，所以可以用单线程把cpu跑满，减少资源的
// 消耗,使用epoll i/o多路复用，类似于http2的多路复用，不会像普通的单线程产生队头阻塞的情况，当多个请求
// 处理的时候被打散成碎片，都复用到一个单线程处理，不按照先后顺序，当链接真正可读可写的时候，才处理，如果
// 发生阻塞，就立刻切换处理其它的请求

// 