var phoneWidth = parseInt(window.screen.width),
    phoneScale = phoneWidth/375;
document.write('<meta name="viewport" content="width=375, initial-scale=1, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');