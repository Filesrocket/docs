<template>
  <div>
    <section class="banner">
      <figure class="planet-cloudinary">
        <img
          src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1660673098/filesrocket/cloudinary-planet_opndnf.png"
          alt="Clodinary"
        >
      </figure>
      <figure class="planet-amazon-s3">
        <img
          src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1660673098/filesrocket/amazon-s3-planet_usyr9p.png"
          alt="Clodinary"
        >
      </figure>
      <div class="banner-content">
        <h1 class="banner-title">Manage your files with any <span>Cloud Storage Service</span></h1>
        <p class="banner-subtitle">Filesrocket is an package of Node.js that allows you to manage your files with any cloud storage service (Local, Cloudinary, Amazon S3)</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.banner-content {
  width: 70%;
  text-align: center;
}
.banner-title {
  font-size: 60px;
  line-height: 80px;
  font-weight: bold;
  margin-bottom: 20px;
}
.banner-subtitle {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 70%;
  margin: auto;
}
.banner-title span {
  background: #FF416C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.banner figure {
  position: absolute;
}
.banner .planet-cloudinary {
  left: -80px;
  top: -10px;
  animation: float 3s ease-in-out infinite;
}
.banner .planet-cloudinary img {
  width: 300px;
  height: 300px;
}
.banner .planet-amazon-s3 {
  right: -20%;
  bottom: -15%;
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
</style>
