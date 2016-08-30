/**
 * Created by Max cheng on 2016/5/3.
 */

new Vue({
    el:'.companyCertify',
    data:{
        currentView:'view1'
    },
    methods:{
        liEvent:function(e){
            $(e.target).addClass('selected').siblings().removeClass('selected');
            var className=e.target.className.split(' ')[0];
            switch(className){
                case 'li_one':
                    this.currentView='view1';
                    break;
                case 'li_two':
                    this.currentView='view2';
                    break;
                case 'li_three':
                    this.currentView='view3';
                    break;
                case 'li_four':
                    this.currentView='view4';
                    break;
                case 'li_five':
                    this.currentView='view5';
                    break;
            }
        }
    },
    components: {
        view1: {
            template: '#view1',
            methods:{

            }
        },
        view2: {
            template: '#view2',
            methods:{

            }
        },
        view3: {
            template: '#view3',
            methods:{
            }
        },
        view4: {
            template: '#view4',
            methods:{

            }
        },
        view5: {
            template: '#view5',
            methods:{

            }
        }
    }
})