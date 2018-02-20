module.exports={
  root:process.cwd(),
  hostname:'127.0.0.1',
  port:2333,
  compress:/\.(html|js|css|md|jpg)/,
  cache:{
    maxAge:600,
    expires:true,
    cacheControl:true,
    lastModified:true,
    etag:true
  }
};
