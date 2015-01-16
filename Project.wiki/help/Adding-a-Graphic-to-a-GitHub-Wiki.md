Issues let you drag and drop images in; but wikis don't.  That said; GitHub Wikis are git repositories so you can make that work for you.
 
# Create a Web capable Image File

1.  Create your graphic as a PNG, Image or GIF.  This can be done in powerpoint and then save the slide as a png for example; or even paint on windows.

# Clone your Wiki locally
2.  make sure you have cloned your wiki locally.  To do this, find the github address to clone from.   Open the wiki page, and copy the address in the area below on the right of the page (as of November 2014):
![Screenshot of Where to find the address to clone the wiki](images/Where-to-find-wiki-clone-address-11-2014.png)

3.	Open a a github posh-git powershell on windows or bash or other shell on mac (i haven't tried on mac so YMMV.   Move to the directory where you want to store the repository locally.   Github wiki's have the name of your repository with a `.wiki`

4.  For example, to clone this repository into a local directory `mynewapp.wiki`:

		git clone https://github.com/toddwseattle/Cloaked-Hipster.wiki.git mynewapp.wiki

5.	It will look something like this locally (on windows for powershell at least..):

		C:\repos\mynewapp.wiki [master]> dir

	    Directory: C:\users\todd\documents\github\repos\mynewapp.wiki


		Mode                LastWriteTime     Length Name
		----                -------------     ------ ----
		d----         11/7/2014  12:10 PM            help
		d----         11/7/2014  12:10 PM            images
		-a---         11/7/2014  12:02 PM       2238 Architecture.md
		-a---         11/7/2014  12:02 PM       1892 Filing-Issues.md
		-a---         11/7/2014  12:02 PM       1056 Home.md
		-a---         11/7/2014  12:10 PM       2218 Technical-Style-Guide.md
# Add the image to the local wiki repostory

6.	Copy the image file you created of your architecture to the images directory. (or wherever you want it in your project)

7.	From the wiki directory (root of repository), add and commit the changes to the github.com website:
		git add .
		git commit . -m "added architecture image to the directory"
		git push origin master
# Referencing the image in markdown

8. Now reference the image in the document.  For example in the sample project it is referenced in markdown this way:
 
        \!\[Exchange Rate Application Architecture](images/exchange-rate-arch-1.png)
 
The "!" says make an image reference in markdown. The expression between the `[]`is the alternate text if the image cannot download.   The url relative to the wiki of the image is in (). In the example I've put the images in an images directory under the root of the wiki respository. 
