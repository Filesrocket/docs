<template>
  <div>
    <section class="banner">
      <figure id="cloudinary-planet" class="banner-picture">
        <img
          src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1660673098/filesrocket/cloudinary-planet_opndnf.png"
          alt="Cloudinary Planet"
        >
      </figure>
      <figure id="amazon-s3-planet" class="banner-picture">
        <img
          src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1660673098/filesrocket/amazon-s3-planet_usyr9p.png"
          alt="Amazon S3 Planet"
        >
      </figure>
      <div class="banner-content">
        <h1 class="banner-content-title">
          Manage your files with any <span class="text-gradient-red">Cloud Storage Service</span>
        </h1>
        <p class="banner-content-subtitle">
          Filesrocket is an package of Node.js that allows you to manage your files with any cloud storage service (Local, Cloudinary, Amazon S3)
        </p>
      </div>
    </section>

    <section class="features">
      <div class="feature-items">
        <div class="feature-item">
          <article>
              <div class="feature-item-header">
                <div class="feature-item-icon">🚀</div>
              </div>
              <div class="feature-item-body">
                <h4 class="feature-item-title">Support for multiple services</h4>
                <p class="feature-item-subtitle">Manage your files with various cloud storage services like Amazon S3, Cloudinary...</p>
              </div>
          </article>
        </div>
        <div class="feature-item">
          <article>
            <div class="feature-item-header">
              <div class="feature-item-icon">⚡</div>
            </div>
            <div class="feature-item-body">
              <h4 class="feature-item-title">Easy to configure and integrate</h4>
              <p class="feature-item-subtitle">Use the services you want in a fast, simple and intuitive way.</p>
            </div>
          </article>
        </div>
        <div class="feature-item">
          <article>
            <div class="feature-item-header">
              <div class="feature-item-icon">🔒</div>
            </div>
            <div class="feature-item-body">
              <h4 class="feature-item-title">Validations</h4>
              <p class="feature-item-subtitle">Filesrocket allows you to validate your files, such as extensions, size and more...</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.feature-items {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.feature-item {
  padding: 10px;
}
.feature-item article {
  padding: 20px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
}
.feature-item-icon {
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border-radius: 10px;
  font-size: 24px;
  margin-bottom: 20px;
}
.feature-item-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.feature-item-subtitle {
  font-size: 14px;
  color: rgb(195, 195, 195);
}
.banner {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
}
.banner-content {
  width: 100%;
  text-align: center;
}
.banner-content-title {
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  margin-bottom: 20px;
}
.banner-content-subtitle {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: rgb(141, 140, 140);
  width: 100%;
  margin: auto;
}
.text-gradient-red {
  background: #FF416C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.banner-picture {
  position: absolute;
  display: none;
}
#cloudinary-planet {
  width: 300px;
  left: -50px;
  top: -10px;
  animation: float 4s ease-in-out infinite;
}
#amazon-s3-planet {
  right: -300px;
  bottom: -100px;
  animation: float 8s ease-in-out infinite;
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

@media (min-width: 768px) {
  .banner-content {
    width: 80%;
  }
  .banner-content-subtitle {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .banner {
    min-height: 90vh;
  }
  .banner-content {
    width: 60%;
  }
  .banner-content-title {
    font-size: 60px;
    line-height: 80px;
  }
  .banner-content-subtitle {
    font-size: 20px;
    line-height: 30px;
  }
  .banner-picture {
    display: block;
  }
}
</style>
