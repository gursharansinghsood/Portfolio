import Fade from "../components/motion/Fade";
import Titlebar from "../components/cards/Titlebar";
import { galleryImages } from "../services/galleryImages";
import Image from "../components/ui/Image";

const GalleryPage = () => {
  return (
    <Fade className="h-full flex flex-col">
      <Titlebar name={"Gallery"} />
      <div className="flex-1 overflow-auto p-5 flex flex-col gap-2">
        {galleryImages.map((item) => (
          <>
            <p key={item.name} className="text-xl font-bold">
              {item.name}
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
              {item.image.map((item) => (
                <Image item={item} key={item} />
              ))}
            </div>
          </>
        ))}
      </div>
    </Fade>
  );
};

export default GalleryPage;
