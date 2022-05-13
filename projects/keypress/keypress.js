let title = document.getElementById("changing-text");
let image = document.getElementById("changing-img");
// const btn = document.getElementById("addimage");

let keyspressed = []

// let codeArray = ["e","g","y","u","h","j"];
let interval = setInterval(changeBackground, 1000);

// btn.addEventListener('click', function(){
//     let img2 = document.createElement("img");
//     img2.className = "imagesadded";
//     img2.src = "earth.png";
//     document.body.appendChild(img2);
// })

document.addEventListener('keydown', function(evt){
    // console.log(evt.code, evt.key);
    if(evt.metaKey == false){
        //clearInterval(interval);
        title.innerHTML += evt.key;
        setImage(title.innerHTML);
        keyspressed.push(evt.key);

        if(evt.key == 'p'){
            clearInterval(interval);
        }
    }

});

function setImage(word){
    switch(word){
        case 'earth':
            image.src = "earth.png";
            break;
        case 'moon':
            image.src = "moon.png";
            break;
        case 'sun':
            image.src = "sun.png";
            break;
        default:
            image.src = "";
    }
}

document.addEventListener('keyup', function(evt){

    if(evt.key === "Backspace"){
        console.log(evt.code);
        title.innerHTML = ""
    }

    if(evt.key === "Alt"){
        title.classList.toggle("change");
    }

    if(evt.key === "Control"){
        title.classList.toggle("before-change");
    }

    switch(evt.key){
        case 'e':
            title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)';
            // image.src = "earth.png";
            break;
        case 'w':
            title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);  ';
            // image.src = "moon.png";
            break;
        case 's':
           title.innerHTML = 'truct group_info truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!bnblocks atomic_set(&group_info->usage, 1); if (!binit_groups = { .usage = ATOMIC_INIT(2) };struct group_info truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
         break;
        case 'q':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) ';
        break;
        case 'p':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
        case 'r':
            title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)';
            // image.src = "earth.png";
            break;
        case 't':
            title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); GFP_USER); ';
            // image.src = "moon.png";
            break;
        case 'y':
           title.innerHTML = 'truct truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!bgroup_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
         break;
        case 'u':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) ';
        break;
        case 'i':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
        case 'b':
            title.innerHTML = 'NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
            // image.src = "earth.png";
            break;
        case 'm':
            title.innerHTML = 'truct truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!bgroup_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
            // image.src = "moon.png";
            break;
        case '.':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
         break;
        case 'x':
           title.innerHTML = 'if float(input("Enter value in kilometers:truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) ';
        break;
        case 'v':
           title.innerHTML = 'tructtruct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!b group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
             break;
        case '.':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
         break;
        case 'x':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) # conversion factorconv_fac 0.621371';
        break;
        case 'l':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!bkmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
        break;
        case 'f':
           title.innerHTML = 'truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct truct group_info init_groups [stye.html= background_color = "black 2.37 #s1325"Ewfjoi { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) struct group_info *groups_alloc(int gidsetsize){ struct group_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1); if (!bgroup_info nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCKup_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);p_info->nblocks = nblocks atomic_set(&group_info->usage, 1);       if (!b) ';
         break;
        case 'h':
           title.innerHTML = 'truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); ';
         break;
        case 'x':
           title.innerHTML = 'if float(input("Enter value in kilometers:truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);itle.innerHTML = truct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(der3em)nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; * / Make sure we always allocate at least one indirect block pointer * /group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER) ';
    
            
            break;
        default:
            image.src = "";
    }
})


function changeBackground(){
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.background ="#" + randomColor;
}