<div class="footerinfo">
    @switch($Bond[0]['Vou_Type'])
        @case(1)
            <div id="footercontent1" class="footercontent" style="text-align: center">
                <span>امين الصندوق </span><br>

            </div>
            <div id="footercontent2" class="footercontent" style="text-align: center">
                <span>المحاسب </span><br>

            </div>
            <div id="footercontent3" class="footercontent" style="text-align: center">
                <span> المدير المفوض</span><br>

            </div>
        @break

        @case(2)
            <div id="footercontent1" class="footercontent">
                <div style="width: 100%">
                    <div style="float: right;width:50%">المستلم  </div>
                    <div style="float: right;">امين الصندوق  </div>
                </div>


            </div>
            <div id="footercontent2" class="footercontent">
                <div style="width: 100%">
                    <div style="float: right;width:50%">المنظم  </div>
                    <div style="float: right;">مدير الحسابات </div>
                </div>
            </div>
            <div id="footercontent3" class="footercontent">
                <div style="width: 100%">
                <div style="float: right;width:50%">التدقيق  </div>
                <div style="float: right;"> المدير المفوض </div>
            </div>
            </div>
        @break

        @default
    @endswitch

</div>
